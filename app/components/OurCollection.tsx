import Image from "next/image";

type CoffeeCollectionProps = {
  coffeeCollectionData: {
    availableCoffees: string;
    coffeesCollection: {
      items: {
        title: string;
        description: string;
        coffeeBagImage: {
          altText: string;
          image: {
            url: string;
          };
        };
      }[];
    };
  };
};
const OurCollection = ({ coffeeCollectionData }: CoffeeCollectionProps) => {
  const { items } = coffeeCollectionData.coffeesCollection;
  const { availableCoffees } = coffeeCollectionData;

  return (
    <section className="w-full my-40 text-center">
      <h2 className="text-9xl tracking-widest w-full text-transparent bg-clip-text -mb-12 bg-gradient-to-b from-slate-400">{availableCoffees}</h2>
      <ul className="flex text-center">
        {items.map((coffeeItem) => (
          <li key={coffeeItem.title} className="flex justify-center flex-col items-center">
            <Image className="h-36 w-44" src={coffeeItem.coffeeBagImage.image.url} alt={coffeeItem.coffeeBagImage.altText} width={100} height={150} />
            <h3 className="font-bold mb-4">{coffeeItem.title}</h3>
            <p className="w-11/12">{coffeeItem.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurCollection;
