'use client'

interface ContactModalButtonProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export default function ContactModalButton({ className, style, children }: ContactModalButtonProps) {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('open-contact-modal'));
            }}
            className={className}
            style={style}
        >
            {children}
        </button>
    )
}
