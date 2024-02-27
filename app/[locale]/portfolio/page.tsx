import MyCoursesSection from "@/components/portfolio/myCoursesSection";
import DocumentsSection from "@/components/portfolio/documentsSection";
import ProjectsSection from "@/components/portfolio/projectsSection";
import ServicesSection from "@/components/portfolio/servicesSection";
import TestimonialsSection from "@/components/portfolio/testimonialsSection";

export default function PortfolioPage() {
    return (
        <main>
            <ServicesSection />
            <ProjectsSection />
            <DocumentsSection />
            <TestimonialsSection />
            <MyCoursesSection />
        </main>
    );
}
