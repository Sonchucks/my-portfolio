import { WorkExperience } from '@/types/experienceTypes';

export const workExperience: WorkExperience[] = [
    {
        id: 1,
        company: 'The North Face',
        companyWebsite: 'https://www.thenorthface.com/en-ca',
        projectsAndContracts: [
            {
                id: 1,
                name: '',
                role: 'Sales Associate',
                startDate: 'Oct 2014',
                endDate: 'Feb 2016',
                keyResponsibilities: [
                    'Provide high levels of customer satisfaction through excellent service and product knowledge.',
                ],
            },
            {
                id: 2,
                name: '',
                role: 'Stock Supervisor',
                startDate: 'Feb 2016',
                endDate: 'May 2018',
                keyResponsibilities: [
                    'Provide excellent customer service whenever it was required on the sales floor',
                    'Communicate and coordinate with the management team and sales associates',
                    'Handle and process shipements of product',
                    'Update, store and organize all corresponding documentation',
                    'Worked with members from the head office and warranty department in order to increase efficiency within the stockroom',
                ],
            },
        ],
    },
    {
        id: 2,
        company: 'Tempo Software',
        companyWebsite: 'https://www.tempo.io/',
        role: 'Software Developer',
        startDate: 'Jan 2019',
        endDate: 'Jun 2023',
        keyResponsibilities: [
            'Applied clean code practices and design patterns to develop readable, maintainable and scalable code.',
            'Improved and maintained existing code.',
            'Ensured quality with unit and integration tests.',
            'Implemented agile methods to consistently deliver on initiatives.',
            'Focused primarily on frontend development: React, React Redux, Jest.',
            'Occasional backend development: Java',
        ],
    },
    {
        id: 3,
        company: 'IT Link',
        companyWebsite: 'https://www.itlink.fr/en/welcome',
        role: 'Senior Developer',
        startDate: 'Jul 2023',
        endDate: 'Present',
        projectsAndContracts: [
            {
                id: 1,
                name: 'CAE',
                website: 'https://www.cae.com/',
                role: 'Full Stack Developer',
                startDate: 'Jul 2023',
                endDate: 'Mar 2024',
                keyResponsibilities: [
                    'Led the development of an internal web tool, ensuring alignment with client requirements and internal standars.',
                    'Conducted regular meetings with internal clients to provide updates and gather feedback on tool progress.',
                    'Collaborated with the internal tools team to maintain project adherence to established standards.',
                    'Guided UI/UX decisions to ensure consistency with other internal tools.',
                    'Transitioned backend from ExpressJS to C# following discussions wit the tools team.',
                    'Developed frontend using React.',
                    'Designed SQL scripts to migrate client data from multiple Excel files to MySQL database, prioritizing data accuracy and preservation.',
                ],
            },
        ],
    },
];
