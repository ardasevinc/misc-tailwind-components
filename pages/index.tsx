import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>tailwind starter template</title>
      </Head>
      <main className="flex flex-1 flex-col items-center justify-center gap-y-4 bg-slate-900 text-white">
        <h1 className="text-4xl font-bold">Hello World!</h1>
        <p>I can&apos;t wait to see what you create!</p>
      </main>
    </>
  );
};

export default Home;
