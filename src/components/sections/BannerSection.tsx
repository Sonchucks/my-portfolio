import * as React from 'react';
import Image from "next/image";
import Link from "next/link";
import {
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { personalInfo, contactInfo } from '@/lib/constants/banner';

interface BannerSectionProps { };

const BannerSection: React.FC<BannerSectionProps> = () => {
    return (
        <section
            id="home"
            className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="w-1/2 mx-auto lg:w-1/3">
                    <Image
                        src="/assets/profile.jpeg"
                        width={280}
                        height={280}
                        alt="Developer"
                        className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full border"
                    />
                </div>
                <div className="w-full lg:w-2/3 space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
                            {`${personalInfo.name} is`}
                        </h1>
                    </div>
                    <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
                        {personalInfo.bio}
                    </p>
                    <div className="space-x-4">
                        <Link
                            target="_blank"
                            href={contactInfo.github}
                            prefetch={false}
                        >
                            <Button variant="secondary" size="icon">
                                <GitHubLogoIcon className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link
                            target="_blank"
                            href={contactInfo.linkedIn}
                            prefetch={false}
                        >
                            <Button variant="secondary" size="icon">
                                <LinkedInLogoIcon className="h-4 w-4" />
                            </Button>
                        </Link>

                        <Link href={`mailto:${contactInfo.email}`}>
                            <Button variant="secondary" size="icon">
                                <EnvelopeClosedIcon className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BannerSection;