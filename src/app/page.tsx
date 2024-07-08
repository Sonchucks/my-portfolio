import ExperienceSection from '@/components/sections/ExperienceSection';
import BannerSection from '@/components/sections/BannerSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';

export default async function Home() {
    return (
        <main>
            <BannerSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
        </main>
    );
}
