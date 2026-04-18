'use client'

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const logos = [
    { name: 'Hael', src: '/images/assets/Website/Hael/Hael-Logo.png' },
    { name: 'Pizzaty', src: '/images/assets/Website/Pizzaty/Pizzaty-Logo.png' },
    { name: 'Capsica', src: '/images/assets/Website/Capsica/Capsica-Logo.png' },
    { name: 'Gemello', src: '/images/assets/Website/Gemello/Gemello-Logo.png' },
    { name: 'Desert Café', src: '/images/assets/Website/Desert Cafe/Desert-Cafe-Logo.png' },
    { name: '20UR Coffee', src: '/images/assets/Website/20UR Coffee/20_ur_LOGO-png.png' },
    { name: 'Cafe Rashid Ali Pro', src: '/images/assets/Website/Cafe Rashid Ali Pro/Cafe-RashidAli-Pro-Logo.png' },
    { name: 'Wind', src: '/images/assets/Website/Wind/Wind-Logo.png' },
    { name: 'Karakccino', src: '/images/assets/Website/Karakccino/Karakccino-Logo.png' },
]

export default function LogoTicker() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // Draggable Ticker State
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const xPosRef = useRef(0);
    const isDraggingRef = useRef(false);
    const lastTimeRef = useRef<number>(0);

    useEffect(() => {
        let animationFrameId: number;

        const updateFrame = (time: number) => {
            if (!lastTimeRef.current) lastTimeRef.current = time;
            const deltaTime = time - lastTimeRef.current;
            lastTimeRef.current = time;

            if (sectionRef.current && trackRef.current) {
                // Auto scroll if not dragging
                if (!isDraggingRef.current) {
                    xPosRef.current -= (0.05 * deltaTime); 
                }

                const trackWidth = trackRef.current.scrollWidth;
                const halfWidth = trackWidth / 2;

                // Loop seamlessly
                if (Math.abs(xPosRef.current) >= halfWidth) {
                    xPosRef.current += halfWidth;
                } else if (xPosRef.current > 0) {
                    xPosRef.current -= halfWidth;
                }

                trackRef.current.style.transform = `translateX(${xPosRef.current}px)`;

                // Handle center focus
                const sectionRect = sectionRef.current.getBoundingClientRect();
                const sectionCenter = sectionRect.left + sectionRect.width / 2;

                const items = trackRef.current.querySelectorAll('.ticker-item');
                items.forEach((item) => {
                    const rect = item.getBoundingClientRect();
                    const itemCenter = rect.left + rect.width / 2;
                    const distance = Math.abs(sectionCenter - itemCenter);

                    // Apply the glow/raise effect to the item currently closest to the center
                    if (distance < 160) {
                        item.classList.add('center-focus');
                    } else {
                        item.classList.remove('center-focus');
                    }
                });
            }
            animationFrameId = requestAnimationFrame(updateFrame);
        };

        animationFrameId = requestAnimationFrame(updateFrame);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        isDraggingRef.current = true;
        setIsDragging(true);
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        setStartX(pageX - xPosRef.current);
    };

    const handleMouseLeave = () => {
        isDraggingRef.current = false;
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        isDraggingRef.current = false;
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDraggingRef.current) return;
        e.preventDefault(); // Prevent text selection/scrolling
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        xPosRef.current = pageX - startX;
    };

    return (
        <section className="logo-ticker" ref={sectionRef}>
            <div className="container">
                <div className="ticker-header fade-in-up">
                    <span className="ticker-badge">Trusted Partners</span>
                    <h2 className="ticker-title">Brands We've Empowered</h2>
                </div>
            </div>
            <div 
                className="ticker-wrapper"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                onTouchMove={handleMouseMove}
            >
                <div className="ticker-track" ref={trackRef}>
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={`${logo.name}-${index}`} className="ticker-item">
                            <div className="ticker-logo-container">
                                {/* We use a fallback text if image fails or path is wrong for now */}
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={200}
                                    height={200}
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
                            <div className="ticker-tooltip">{logo.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
