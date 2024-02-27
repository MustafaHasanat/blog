import BlogSection from "@/components/landingPage/blogSection";
import ProfileSection from "@/components/landingPage/profileSection";

export default async function Home() {
    return (
        <main>
            <ProfileSection />
            <BlogSection />
        </main>
    );
}
