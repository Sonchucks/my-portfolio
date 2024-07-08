import * as React from 'react';
import { education } from '@/lib/constants/education';

interface EducationSectionProps {}

const EducationSection: React.FC<EducationSectionProps> = () => {
    return (
        <section
            id='education'
            className='container mx-auto max-w-5xl py-12 md:py-16 lg:py-20'
        >
            <h2 className='mb-12 text-3xl font-bold md:text-5xl'>Education</h2>
            <div className='relative grid gap-10 pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20'>
                {education.toReversed().map((ed) => (
                    <div key={ed.id} className='relative grid gap-1'>
                        <div className='absolute left-0 top-2 z-10 aspect-square w-3 translate-x-[-29.5px] rounded-full bg-gray-900 dark:bg-gray-50' />

                        <h4 className='text-xl font-medium'>{ed.degree}</h4>
                        <h5 className='font-medium'>{ed.institution}</h5>
                        <div className='text-gray-500 dark:text-gray-400'>
                            {ed.startDate} - {ed.endDate}
                        </div>
                        {ed.description && (
                            <p className='mt-2 text-sm text-gray-500'>
                                {ed.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
