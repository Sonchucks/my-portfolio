import * as React from 'react';
import Link from 'next/link';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { navLinkOptions } from '@/lib/constants/navbar';

const NavbarLinkOptions: React.FC = () => {
    return (
        <>
            {navLinkOptions.map((link) => (
                <Link
                    className='text-sm text-gray-800 transition-colors hover:text-primary dark:hover:text-gray-50'
                    href={link.path}
                    key={link.path}
                >
                    {link.label}
                </Link>
            ))}
        </>
    );
};

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <header className='h-18 fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950'>
            <div className='h-18 container mx-auto flex max-w-5xl items-center justify-between px-4 py-2 md:px-6'>
                <Link href='/' className='flex items-center' prefetch={false}>
                    davidson.is
                </Link>
                <nav className='hidden space-x-4 lg:flex'>
                    <NavbarLinkOptions />
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant='outline'
                            size='icon'
                            className='lg:hidden'
                        >
                            <HamburgerMenuIcon className='h-6 w-6' />
                            <span className='sr-only'>
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='right'>
                        <div className='grid gap-6 p-6'>
                            <NavbarLinkOptions />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Navbar;
