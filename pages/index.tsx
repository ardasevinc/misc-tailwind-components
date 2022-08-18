import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>tailwind starter template</title>
      </Head>
      <main className="bg-slate-900 text-white flex-1 flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-4xl font-bold">Hello World!</h1>
        <p>I can&apos;t wait to see what you create!</p>
      </main>
    </>
  );
};

export default Home;
