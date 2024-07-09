import Main from "@/components/basic/main";
import BlogSection from "@/components/landingPage/blogSection";
import ProfileSection from "@/components/landingPage/profileSection";

export default async function Home() {
    return (
        <Main>
            <ProfileSection />
            <BlogSection />
        </Main>
    );
}
