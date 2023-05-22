import Link from "next/link";
import Card from "../components/card";
import Button from "../components/button";

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
        <div className="flex w-full gap-4">
          <div className="flex w-full flex-col gap-y-8">
            <OneCard />
            <OneCard />
            <OneCard />
          </div>
          <div className="w-1/4 bg-slate-300 rounded-lg p-8 relative scale-95 hover:scale-100 transition-all ease-in duration-150">
            <h2 className="text-4xl text-center font-bold text-black mb-8">
              This is a title
            </h2>
            <ul className="text-lg text-black text-justify divide-y-2">
              <li>Lorem</li>
              <li>Ipsum</li>
              <li>Dolor</li>
              <li>Sit</li>
              <li>Amet</li>
            </ul>
            <div className="absolute bottom-2">
              <Button />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Showroom;
