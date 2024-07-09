import Main from "@/components/basic/main";

interface props {
    params: { slug: string };
}

export default function Page({ params }: props) {
    return <Main>My Post: {params.slug}</Main>;
}
