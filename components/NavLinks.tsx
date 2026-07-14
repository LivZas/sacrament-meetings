"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "All Meetings", href: "/meetings" },
    { name: "Current Meeting", href: "/meetings/current" },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
     <ul className="flex gap-6">
        {links.map((link) => (
            <li key={link.href}>
                <Link
                href={link.href}
                className={pathname === link.href ? "font-bold" : ""}
                >
                {link.name}
                </Link>
            </li>
        ))}
        </ul>
    );
}