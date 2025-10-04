"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import '../style.css';
const navLinks = [
  { href: '/register', label: 'Register' },
  { href: '/login', label: 'Login' },
    { href: '/forgot-password', label: 'Forgot Password' },
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <body>
                <nav
                    style={{
                        backgroundColor: 'lightgreen',
                        padding: '1rem',
                        marginBottom: '2rem',
                        display: 'flex',
                        gap: '1rem',
                    }}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
                        return (
                        <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                        );
                    })}
                </nav>
                {children}
            </body>
        </html>
    );
}
