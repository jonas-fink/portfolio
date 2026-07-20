import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const links = [
    {
        name: 'home',
        href: '/',
    },
    {
        name: 'projects',
        href: '/projects',
    },
    {
        name: 'about',
        href: '/about',
    },
    {
        name: 'contact',
        href: '/contact',
    },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx('nav-link', {
                            'nav-link-active': pathname === link.href,
                        })}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </>
    );
}
