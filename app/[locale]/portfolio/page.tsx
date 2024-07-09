import MyCoursesSection from "@/components/portfolioPage/myCoursesSection";
import DocumentsSection from "@/components/portfolioPage/documentsSection";
import ProjectsSection from "@/components/portfolioPage/projectsSection";
import ServicesSection from "@/components/portfolioPage/servicesSection";
import TestimonialsSection from "@/components/portfolioPage/testimonialsSection";
import Main from "@/components/basic/main";

export default function PortfolioPage() {
    return (
        <Main>
            <ServicesSection />
            <ProjectsSection />
            <DocumentsSection />
            <TestimonialsSection />
            <MyCoursesSection />
        </Main>
    );
}
