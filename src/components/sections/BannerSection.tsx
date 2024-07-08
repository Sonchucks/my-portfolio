import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { personalInfo, contactInfo } from '@/lib/constants/banner';

interface BannerSectionProps {}

const BannerSection: React.FC<BannerSectionProps> = () => {
    return (
        <section
            id='home'
            className='container mx-auto max-w-5xl py-12 md:py-16 lg:py-20'
        >
            <div className='flex flex-col items-center justify-center gap-12 lg:flex-row'>
                <div className='mx-auto w-1/2 lg:w-1/3'>
                    <Image
                        src='/assets/profile.jpeg'
                        width={280}
                        height={280}
                        alt='Developer'
                        className='mx-auto aspect-square overflow-hidden rounded-full border object-cover object-center'
                    />
                </div>
                <div className='w-full space-y-4 lg:w-2/3'>
                    <div className='space-y-2'>
                        <h1 className='text-4xl font-bold tracking-tighter md:text-5xl'>
                            {`${personalInfo.name} is`}
                        </h1>
                    </div>
                    <p className='max-w-[600px] text-gray-500 dark:text-gray-400 lg:text-lg'>
                        {personalInfo.bio}
                    </p>
                    <div className='space-x-4'>
                        <Link
                            target='_blank'
                            href={contactInfo.github}
                            prefetch={false}
                        >
                            <Button variant='secondary' size='icon'>
                                <GitHubLogoIcon className='h-4 w-4' />
                            </Button>
                        </Link>
                        <Link
                            target='_blank'
                            href={contactInfo.linkedIn}
                            prefetch={false}
                        >
                            <Button variant='secondary' size='icon'>
                                <LinkedInLogoIcon className='h-4 w-4' />
                            </Button>
                        </Link>

                        <Link href={`mailto:${contactInfo.email}`}>
                            <Button variant='secondary' size='icon'>
                                <EnvelopeClosedIcon className='h-4 w-4' />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
