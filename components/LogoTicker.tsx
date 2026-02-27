'use client'

import Image from 'next/image';

const logos = [
    { name: 'Hael', src: '/images/assets/Website/Hael/brand-hael.png' },
    { name: 'Pizzaty', src: '/images/assets/Website/Pizzaty/Pizzaty LOGO.png' },
    { name: 'Capsica', src: '/images/assets/Website/Capsica/Capsica Logo Copy.png' },
    { name: 'Gemello', src: '/images/assets/Website/Gemello/Gemello Logo png.png' },
    { name: 'Desert Café', src: '/images/assets/Website/Desert Cafe/Desert Cafe Logo.png' },
    { name: '20UR Coffee', src: '/images/assets/Website/20UR Coffee/20_ur_LOGO-png.png' },
    { name: 'Cafe Rashid Ali Pro', src: '/images/assets/Website/Rashid ali pro/Brand logo Rashid ali pro.png' },
]

export default function LogoTicker() {
    return (
        <section className="logo-ticker">
            <div className="ticker-wrapper">
                <div className="ticker-track">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={`${logo.name}-${index}`} className="ticker-item">
                            <div className="ticker-logo-container">
                                {/* We use a fallback text if image fails or path is wrong for now */}
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={160}
                                    height={80}
                                    className="ticker-logo"
                                    onError={(e) => {
                                        // Fallback to text if image is missing
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            const textSpan = document.createElement('span');
                                            textSpan.className = 'ticker-placeholder';
                                            textSpan.innerText = logo.name;
                                            parent.appendChild(textSpan);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
