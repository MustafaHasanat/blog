import Main from "@/components/basic/main";
import ContactSection from "@/components/contactPage/contactSection";
import WelcomeSection from "@/components/contactPage/welcomeSection";

export default function ContactPage() {
    return (
        <Main>
            <WelcomeSection />
            <ContactSection />
        </Main>
    );
}
