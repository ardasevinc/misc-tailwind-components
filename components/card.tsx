import Image, { StaticImageData } from "next/image";

interface CardInfo {
  image: StaticImageData | string;
  altText: string;
  cardTitle: string;
  cardTextContent: string;
}

const Card = ({ image, altText, cardTitle, cardTextContent }: CardInfo) => {
  return (
    <div className="flex w-full items-center gap-x-2 rounded-md bg-sky-900 py-3 transition-all hover:-translate-y-2 hover:ring hover:ring-sky-200 focus:outline-none focus-visible:-translate-y-2 focus-visible:ring-sky-200 sm:max-w-lg">
      <div className="flex p-2">
        <figure className="h-16 w-16 lg:h-24 lg:w-24">
          {typeof image === "string" ? (
            <Image
              className="rounded-full"
              src={image}
              alt={altText}
              width={200}
              height={200}
            />
          ) : (
            <Image className="rounded-full" src={image} alt={altText} />
          )}
        </figure>
      </div>
      <div className="flex w-full flex-col ">
        <div className="">
          <h2 className="text-lg font-bold text-black dark:text-white lg:text-2xl">
            {cardTitle}
          </h2>
          <p className="text-base font-normal text-black dark:text-white lg:text-lg">
            {cardTextContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
