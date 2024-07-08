import { PersonalInfo } from '@/types/personalInfoTypes';
import { ContactInfo } from '@/types/contactInfoTypes';
import { Skills } from '@/types/skillTypes';

export const personalInfo: PersonalInfo = {
    name: 'David Son',
    title: 'Full Stack Developer',
    location: 'Montreal, Quebec, Canada',
    bio:
        'a software developer with a foundation in customer service and management, driven by a passion for innovation' +
        ' and problem-solving. Thrives on building elegant user interfaces and collaborating effectively within teams' +
        ' to achieve shared goals.',
};

export const contactInfo: ContactInfo = {
    email: 'hyun.uk.son@gmail.com',
    phone: 'CAD +1-(514)-531-3069',
    linkedIn: 'https://www.linkedin.com/in/sonchucks',
    github: 'https://github.com/sonchucks',
};

export const skills: Skills = {
    languages: [],
    frameworks: [],
    databases: [],
    tools: [],
};
