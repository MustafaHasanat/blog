import CoursesSection from "@/components/about/coursesSection";
import EducationSection from "@/components/about/educationSection";
import ExperienceSection from "@/components/about/experienceSection";
import LanguagesSection from "@/components/about/languagesSection";
import PublicationsSection from "@/components/about/publicationsSection";
import SkillsSection from "@/components/about/skillsSection";
import StorySection from "@/components/about/storySection";

export default function AboutPage() {
    return (
        <main>
            <StorySection />
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <PublicationsSection />
            <CoursesSection />
            <LanguagesSection />
        </main>
    );
}
