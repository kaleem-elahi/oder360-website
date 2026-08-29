import fs from 'fs'
import path from 'path'

// Define the shape of our data
export interface PageVisit {
  id: string;
  path: string;
  timestamp: string;
  userAgent?: string;
  country?: string;
  referrer?: string;
}

export interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  businessAge: string;
  serviceOfInterest: string;
  contactPreference: string;
  timestamp: string;
}

export interface DbSchema {
  visits: PageVisit[];
  submissions: FormSubmission[];
}

const dbFilePath = path.join(process.cwd(), 'data', 'db.json')

// Ensure the data directory and db.json exist
function ensureDbExists() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  
  if (!fs.existsSync(dbFilePath)) {
    const initialData: DbSchema = { visits: [], submissions: [] }
    fs.writeFileSync(dbFilePath, JSON.stringify(initialData, null, 2), 'utf-8')
  }
}

function readDb(): DbSchema {
  ensureDbExists()
  const data = fs.readFileSync(dbFilePath, 'utf-8')
  const parsed = JSON.parse(data)
  
  // Ensure arrays exist in case of old schema
  if (!parsed.visits) parsed.visits = []
  if (!parsed.submissions) parsed.submissions = []
  
  return parsed
}

function writeDb(data: DbSchema) {
  ensureDbExists()
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf-8')
}

export function getVisits(): PageVisit[] {
  return readDb().visits
}

export function addVisit(visit: Omit<PageVisit, 'id' | 'timestamp'>) {
  const db = readDb()
  const newVisit: PageVisit = {
    ...visit,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString()
  }
  db.visits.unshift(newVisit) // Add to beginning so newest is first
  writeDb(db)
  return newVisit
}

export function getSubmissions(): FormSubmission[] {
  return readDb().submissions
}

export function addSubmission(submission: Omit<FormSubmission, 'id' | 'timestamp'>) {
  const db = readDb()
  const newSubmission: FormSubmission = {
    ...submission,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString()
  }
  db.submissions.unshift(newSubmission) // Add to beginning so newest is first
  writeDb(db)
  return newSubmission
}
