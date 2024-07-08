import * as React from 'react';
import Link from 'next/link';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className='container mt-20 border-t py-4'>
            <p className='text-center text-sm text-gray-400'>
                <Link href='/' className='ml-1 text-primary'>
                    davidson.is
                </Link>
            </p>
        </footer>
    );
};

export default Footer;
