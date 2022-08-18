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
        <h1 className="text-4xl font-bold">The Showroom</h1>
      </header>
      <main className="outline-2 outline-dashed h- max-w-4xl mx-auto p-4">
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
