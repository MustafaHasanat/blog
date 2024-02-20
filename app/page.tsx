import styles from "./page.module.scss";
import BlogSection from "@/components/landingPage/blogSection";
import ProfileSection from "@/components/landingPage/profileSection";

export default function Home() {
    return (
        <main className={styles.main}>
            <ProfileSection />
            <BlogSection />
        </main>
    );
}
