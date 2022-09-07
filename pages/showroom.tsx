import Link from "next/link";
import Card from "../components/card";

const Showroom = () => {
  const OneCard = () => (
    <Card
      cardTitle="Card Title Here"
      altText="Alt text"
      cardTextContent="Bla bla Bla blaBla blaBla blaBla blaBla blaBla blaBla blaBla blaBla blaBla blaBla blaBla bla"
      image="https://placeimg.com/200/200/people"
    />
  );

  return (
    <div className="flex-1 bg-slate-900 text-white">
      <header className="p-8">
        <h1 className="mb-4 text-4xl font-bold">The Showroom</h1>
        <Link href="/">
          <a className="rounded-md p-2 text-lg underline hover:ring hover:ring-sky-400 focus:outline-none focus-visible:ring focus-visible:ring-sky-400">
            Go back
          </a>
        </Link>
      </header>
      <main className="mx-auto max-w-4xl p-4 outline-dashed outline-2">
        <div className="flex flex-col gap-y-8">
          <OneCard />
          <OneCard />
          <OneCard />
        </div>
      </main>
    </div>
  );
};

export default Showroom;
