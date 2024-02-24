import Image from "next/image";

type HeadquartersProps = {
  headquarters: {
    title: string;
    cardsCollection: {
      items: {
        title: string;
        descriptionLong: string;
        image: {
          altText: string;
          image: {
            url: string;
          };
        };
      }[];
    };
  };
};

const Headquarters = ({ headquarters }: HeadquartersProps) => {
  const { title, cardsCollection } = headquarters;

  return (
    <div className="w-full mt-32">
      <h4 className="text-4xl">{title}</h4>
      <div className="flex justify-between mt-16">
        {cardsCollection.items.map((location) => (
            <div className="w-1/4">
                <Image src={location.image.image.url} alt={location.image.altText} width={50} height={50} />
                <h5 className="my-8 text-2xl">{location.title}</h5>
                <p>{location.descriptionLong}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Headquarters;
