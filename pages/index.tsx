import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Button from "../components/button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>tailwind starter template</title>
      </Head>
      <main className="flex flex-1 flex-col items-center justify-center gap-y-4 bg-slate-900 text-white">
        <h1 className="text-4xl font-bold">Hello World!</h1>
        <p>I can&apos;t wait to see what you create!</p>
        <Link href="/showroom">
          <a className="rounded-md p-2 text-lg underline hover:ring hover:ring-sky-400 focus:outline-none focus-visible:ring focus-visible:ring-sky-400">
            Go to Showroom
          </a>
        </Link>
        <Button />
      </main>
    </>
  );
};

export default Home;
