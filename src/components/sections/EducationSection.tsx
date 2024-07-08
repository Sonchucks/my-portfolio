import * as React from 'react';
import { education } from '@/lib/constants/education';

interface EducationSectionProps { };

const EducationSection: React.FC<EducationSectionProps> = () => {
    return (
        <section
            id="education"
            className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
            <h2 className="font-bold text-3xl md:text-5xl mb-12">Education</h2>
            <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
                {education.toReversed().map((ed) => (
                    <div key={ed.id} className="grid gap-1 relative">
                        <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

                        <h4 className="text-xl font-medium">{ed.degree}</h4>
                        <h5 className="font-medium">{ed.institution}</h5>
                        <div className="text-gray-500 dark:text-gray-400">
                            {ed.startDate} - {ed.endDate}
                        </div>
                        {ed.description && <p className="mt-2 text-sm text-gray-500">{ed.description}</p>}
                    </div>
                ))}
            </div>
        </section>
    )
};

export default EducationSection;