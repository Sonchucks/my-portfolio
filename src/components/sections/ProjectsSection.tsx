import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { projects } from '@/lib/constants/projects';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectsSectionProps { }

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
    return (
        <section
            id='projects'
            className='container mx-auto max-w-5xl py-12 md:py-16 lg:py-20'
        >
            <h2 className='mb-12 text-3xl font-bold md:text-5xl'>
                Personal Projects
            </h2>
            <div className='grid grid-cols-1 gap-4 lg:gap-6'>
                {projects.toReversed().map((project, index) => (
                    <Card
                        key={project.title}
                        className='flex flex-col lg:flex-row'
                    >
                        {project.cover && (
                            <div
                                className={cn(
                                    'flex w-full items-center p-2 lg:w-1/3',
                                    index % 2 === 0
                                        ? 'lg:order-1'
                                        : 'lg:order-2'
                                )}
                            >
                                <Image
                                    src={project.cover}
                                    alt='Project 1'
                                    height={200}
                                    width={300}
                                    className='rounded-md object-cover'
                                />
                            </div>
                        )}
                        <div
                            className={cn(
                                'w-full',
                                project.cover &&
                                (index % 2 === 0
                                    ? 'lg:order-2 lg:w-2/3'
                                    : 'Lg:order-1 lg:w-2/3')
                            )}
                        >
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <div className='flex flex-wrap gap-2'>
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant='secondary'>
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <div className='flex space-x-3'>
                                    {project.liveUrl && (
                                        <Link
                                            target='_blank'
                                            href={project.liveUrl}
                                            prefetch={false}
                                        >
                                            <Button size='sm'>
                                                <GlobeIcon className='mr-2 h-3 w-3' />
                                                Live Demo
                                            </Button>
                                        </Link>
                                    )}
                                    <Link
                                        target='_blank'
                                        href={project.codeRepoUrl}
                                        prefetch={false}
                                    >
                                        <Button size='sm' variant='outline'>
                                            <GitHubLogoIcon className='mr-2 h-3 w-3' />
                                            Open Repository
                                        </Button>
                                    </Link>
                                </div>
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
