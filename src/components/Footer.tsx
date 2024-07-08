import * as React from 'react';
import Link from 'next/link';

interface FooterProps { };

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className='py-4 container border-t mt-20'>
            <p className='text-sm text-gray-400 text-center'>
                <Link href="/" className='ml-1 text-primary'>
                    Sonchucks
                </Link>
            </p>
        </footer>
    )
};

export default Footer;