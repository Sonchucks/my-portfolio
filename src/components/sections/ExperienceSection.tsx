import * as React from 'react';
import Link from 'next/link';
import { workExperience } from '@/lib/constants/experience';
import { cn } from '@/lib/utils';

interface ExperienceSectionProps { };

const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
    return (
        <section
            id="experience"
            className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
            <h2 className="font-bold text-3xl md:text-5xl mb-12">
                Work Experience
            </h2>
            <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
                {workExperience.toReversed().map((exp, weIndex) => (
                    <div key={exp.id} className="grid gap-1 relative">
                        <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />
                        <h4 className="text-xl font-medium">
                            {exp.role && (<>{`${exp.role} @`}</>)}
                            <Link
                                href={exp.companyWebsite}
                                target="_blank"
                                className={cn(
                                    "text-primary",
                                    exp.role && 'ml-2'
                                )}
                            >
                                {exp.company}
                            </Link>
                        </h4>
                        {exp.startDate && exp.endDate && (
                            <div className="text-gray-500 dark:text-gray-400">
                                {exp.startDate} - {exp.endDate}
                            </div>
                        )}
                        {exp.keyResponsibilities && (
                            <div className="mt-2">
                                <ul className="text-gray-500 text-sm list-disc pl-4">
                                    {exp.keyResponsibilities.map((resp, krIndex) => (
                                        <li key={`${weIndex}-KR-${krIndex}`}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {exp.projectsAndContracts && exp.projectsAndContracts.toReversed().map((item, pcIndex) => (
                            <div key={`${weIndex}-PnC-${pcIndex}`} className='mt-2'>
                                <h6 className='font-medium'>
                                    {item.website ? (<>{`${item.role} -`}</>) : (<>{item.role}</>)}
                                    {item.website ? (
                                        <Link
                                            href={item.website}
                                            target='_blank'
                                            className='ml-2 text-primary'
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <span className='ml-2 text-slate-500'>
                                            {item.name}
                                        </span>
                                    )}
                                </h6>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {item.startDate} - {item.endDate}
                                </div>
                                <div className='mt-2'>
                                    <ul className="text-gray-500 text-sm list-disc pl-4">
                                        {item.keyResponsibilities.map((resp, krIndex) => (
                                            <li key={`${weIndex}-PC-${pcIndex}-KR-${krIndex}`}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
};

export default ExperienceSection;