import Header from "@/components/layouts/website/header";
import SliderPrincipal from "@/components/website/sliderPrincipal";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <SliderPrincipal/>
      </main>
    </>
  );
}
