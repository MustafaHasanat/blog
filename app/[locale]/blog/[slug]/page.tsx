interface props {
    params: { slug: string };
}

export default function Page({ params }: props) {
    return <main>My Post: {params.slug}</main>;
}
