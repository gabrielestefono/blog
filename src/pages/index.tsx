import Header from "@/components/layouts/website/header";
import About from "@/components/website/about";
import Categories from "@/components/website/categories";
import History from "@/components/website/history";
import Posts from "@/components/website/index/posts";
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
        <Posts/>
        <About/>
        <Categories/>
        <History/>
      </main>
    </>
  );
}
