import { Project } from '@/types/projectTypes';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Tweeter - Bootcamp Project',
        description: 'A simplified single-page Twitter clone.',
        technologies: ['jQuery', 'ExpressJS', 'MongoDB'],
        codeRepoUrl: 'https://github.com/Sonchucks/tweeter',
    },
    {
        id: 2,
        title: 'Wiki Map - Bootcamp Project',
        description:
            'A web application that allows users to collaboratively create themed maps which list multipled markers following that theme. For example "Best places to eat in downtown Montreal"',
        technologies: ['PostgreSQL', 'knex', 'ExpressJS', 'EJS', 'LeafletJS'],
        codeRepoUrl: 'https://github.com/Sonchucks/midterm-wikimap-tld',
    },
    {
        id: 3,
        title: 'Chatty App - Bootcamp Project',
        description: 'A simple real time chat app',
        technologies: ['ExpressJS', 'React', 'WebSocket'],
        codeRepoUrl: 'https://github.com/Sonchucks/chattyapp',
    },
    {
        id: 4,
        title: 'Jungle - Bootcamp Project',
        description:
            'A mini e-commerce application which allows uers to view and purchase products with Stripe verification.' +
            ' Admins can add new products and categories.',
        technologies: ['Rails 4.2', 'Stripe API', 'PostgreSQL', 'jQuery'],
        codeRepoUrl: 'https://github.com/Sonchucks/jungle-rails',
    },
    {
        id: 5,
        title: 'Round Robin Tournament Manager',
        description:
            'Small project to tryout NextJS and complemetary libraries. Create a round robin tournament and view/update matches for each round. Also has a view for team standings.',
        technologies: ['NextJS', 'TailwindCSS', 'Prisma', 'SQLite'],
        codeRepoUrl: 'https://github.com/Sonchucks/nextjs-test-project',
        cover: '/assets/roundRobinCover.png'
    },
];
