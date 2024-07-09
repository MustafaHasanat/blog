import CoursesSection from "@/components/aboutPage/coursesSection";
import EducationSection from "@/components/aboutPage/educationSection";
import ExperienceSection from "@/components/aboutPage/experienceSection";
import LanguagesSection from "@/components/aboutPage/languagesSection";
import PublicationsSection from "@/components/aboutPage/publicationsSection";
import SkillsSection from "@/components/aboutPage/skillsSection";
import StorySection from "@/components/aboutPage/storySection";
import Main from "@/components/basic/main";

export default function AboutPage() {
    return (
        <Main>
            <StorySection />
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <PublicationsSection />
            <CoursesSection />
            <LanguagesSection />
        </Main>
    );
}
