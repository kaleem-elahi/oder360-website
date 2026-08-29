'use client'

import React, { useState, useEffect, useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  // Dashboard Data
  const [visits, setVisits] = useState<any[]>([])
  const [submissions, setSubmissions] = useState<any[]>([])

  const checkAuthAndFetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/data')
      if (res.ok) {
        setIsAuthenticated(true)
        const data = await res.json()
        setVisits(data.visits || [])
        setSubmissions(data.submissions || [])
      } else {
        setIsAuthenticated(false)
      }
    } catch (err) {
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAuthAndFetchData()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })

      if (res.ok) {
        checkAuthAndFetchData()
      } else {
        setError('Invalid password')
      }
    } catch (err) {
      setError('An error occurred during login')
    }
  }

  // --- Data Processing for Charts ---
  const chartData = useMemo(() => {
    if (!visits.length) return { visitsByDay: [], topCountries: [], topReferrers: [] }

    // 1. Visits by Day (Last 14 days)
    const visitsByDayMap: Record<string, number> = {}
    const today = new Date()
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      visitsByDayMap[d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })] = 0
    }

    // 2. Top Countries
    const countryMap: Record<string, number> = {}
    
    // 3. Top Referrers
    const referrerMap: Record<string, number> = {}

    visits.forEach(v => {
      // Date
      const d = new Date(v.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      if (visitsByDayMap[d] !== undefined) {
        visitsByDayMap[d]++
      }

      // Country
      const c = v.country || 'Unknown'
      countryMap[c] = (countryMap[c] || 0) + 1

      // Referrer
      let r = v.referrer || 'Direct'
      if (r.startsWith('http')) {
        try { r = new URL(r).hostname.replace('www.', '') } catch(e) {}
      }
      referrerMap[r] = (referrerMap[r] || 0) + 1
    })

    const visitsByDay = Object.keys(visitsByDayMap).map(date => ({ date, visits: visitsByDayMap[date] }))
    
    const topCountries = Object.entries(countryMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5)

    const topReferrers = Object.entries(referrerMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5)

    return { visitsByDay, topCountries, topReferrers }
  }, [visits])

  const COLORS = ['#007AFF', '#34C759', '#FF9500', '#FF3B30', '#AF52DE', '#5AC8FA']

  // --- Render ---
  if (loading) {
    return (
      <div className="admin-loading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#0a0a0a' }}>
        <div style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.1)', borderTopColor: '#007AFF', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#0a0a0a', fontFamily: 'system-ui, sans-serif' }}>
        <form onSubmit={handleLogin} style={{ background: '#141414', padding: '3rem 2.5rem', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', width: '100%', maxWidth: '420px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#fff', letterSpacing: '-0.025em' }}>Oder360 Admin</h2>
            <p style={{ color: '#888', marginTop: '0.5rem', fontSize: '0.95rem' }}>Enter your password to access the dashboard</p>
          </div>
          {error && <div style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.875rem', textAlign: 'center', border: '1px solid rgba(239,68,68,0.2)' }}>{error}</div>}
          <div style={{ marginBottom: '2rem' }}>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '1rem 1.25rem', background: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '1rem', color: '#fff', outline: 'none', transition: 'border-color 0.2s' }}
              placeholder="Admin Password"
              onFocus={(e) => e.target.style.borderColor = '#007AFF'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '1rem', background: '#007AFF', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#0056b3'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#007AFF'}>
            Secure Login
          </button>
        </form>
      </div>
    )
  }

  // Dashboard Styles
  const cardStyle = {
    background: '#141414',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: '24px',
    padding: '2rem',
    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
        
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '-0.025em', margin: 0, background: 'linear-gradient(to right, #fff, #888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Overview</h1>
            <p style={{ color: '#888', margin: '0.5rem 0 0 0' }}>Real-time analytics & submissions for Oder360</p>
          </div>
          <button onClick={() => {
            document.cookie = "admin_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            setIsAuthenticated(false);
          }} style={{ padding: '0.6rem 1.25rem', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500', transition: 'all 0.2s' }}
             onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(239,68,68,0.1)'; e.currentTarget.style.color = '#ef4444'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.3)' }}
             onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            Sign Out
          </button>
        </header>

        {/* Top KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Total Page Views</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <span style={{ fontSize: '4rem', fontWeight: '800', lineHeight: 1 }}>{visits.length}</span>
              <span style={{ color: '#34C759', fontWeight: '600', fontSize: '1rem' }}>Live</span>
            </div>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Total Leads</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <span style={{ fontSize: '4rem', fontWeight: '800', lineHeight: 1 }}>{submissions.length}</span>
              <span style={{ color: '#007AFF', fontWeight: '600', fontSize: '1rem' }}>Forms</span>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {/* Main Traffic Chart */}
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '2rem' }}>Traffic Overview (Last 14 Days)</h3>
            <div style={{ height: '350px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData.visitsByDay}>
                  <defs>
                    <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#007AFF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#007AFF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="date" stroke="#888" tick={{fill: '#888', fontSize: 12}} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#888" tick={{fill: '#888', fontSize: 12}} tickLine={false} axisLine={false} dx={-10} />
                  <Tooltip 
                    contentStyle={{ background: '#1c1c1e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ color: '#888', marginBottom: '0.5rem' }}
                  />
                  <Line type="monotone" dataKey="visits" stroke="#007AFF" strokeWidth={3} dot={{r: 4, fill: '#000', stroke: '#007AFF', strokeWidth: 2}} activeDot={{r: 6, fill: '#007AFF', stroke: '#fff', strokeWidth: 2}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Secondary Charts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '2rem' }}>Top Referrers</h3>
            <div style={{ height: '300px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData.topReferrers} layout="vertical" margin={{ top: 0, right: 0, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#888" tick={{fill: '#fff', fontSize: 13}} tickLine={false} axisLine={false} width={100} />
                  <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ background: '#1c1c1e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                  <Bar dataKey="value" fill="#34C759" radius={[0, 6, 6, 0]}>
                    {chartData.topReferrers.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '2rem' }}>Audience Geography</h3>
            <div style={{ height: '300px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData.topCountries} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={2} dataKey="value" stroke="none">
                    {chartData.topCountries.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: '#1c1c1e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} itemStyle={{color: '#fff'}} />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '13px', color: '#888' }}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Data Tables */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          
          <div style={{...cardStyle, padding: 0, overflow: 'hidden'}}>
            <div style={{ padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff', margin: 0 }}>Recent Leads</h3>
              <span style={{ background: 'rgba(0,122,255,0.1)', color: '#5AC8FA', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>{submissions.length} Total</span>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <tr>
                    <th style={{ padding: '1.25rem 2rem', fontSize: '0.85rem', fontWeight: '600', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Date</th>
                    <th style={{ padding: '1.25rem 2rem', fontSize: '0.85rem', fontWeight: '600', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lead</th>
                    <th style={{ padding: '1.25rem 2rem', fontSize: '0.85rem', fontWeight: '600', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Service</th>
                    <th style={{ padding: '1.25rem 2rem', fontSize: '0.85rem', fontWeight: '600', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.length === 0 ? (
                    <tr><td colSpan={4} style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>No leads yet.</td></tr>
                  ) : (
                    submissions.map((sub: any) => (
                      <tr key={sub.id} style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '1.25rem 2rem', color: '#888', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                          {new Date(sub.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td style={{ padding: '1.25rem 2rem' }}>
                          <div style={{ color: '#fff', fontWeight: '600', marginBottom: '0.2rem' }}>{sub.name}</div>
                          <div style={{ color: '#888', fontSize: '0.85rem' }}>{sub.email} <br/> {sub.phone}</div>
                        </td>
                        <td style={{ padding: '1.25rem 2rem', color: '#ccc', fontSize: '0.95rem' }}>
                          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '6px' }}>{sub.serviceOfInterest || 'N/A'}</span>
                        </td>
                        <td style={{ padding: '1.25rem 2rem', color: '#888', fontSize: '0.95rem', maxWidth: '300px' }}>
                          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }} title={sub.message}>
                            {sub.message}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}
