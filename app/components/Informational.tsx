import Image from "next/image";

type InformationProps = {
  informationalData: {
    title: string;
    description: string;
    cardsCollection: {
      items: {
        title: string;
        description: string;
        image: {
          altText: string;
          image: {
            url: string;
          }
        }
      }[]
    }
  }
}

const Informational = ({ informationalData }: InformationProps) => {
  console.log("INFO = ", informationalData)
  const { title, description } = informationalData;
  const { items } = informationalData.cardsCollection;
  return (
    <section className="w-full text-center bg-gray-800 rounded-lg h-9/12">
      <h4 className="text-white text-4xl pt-12">{title}</h4>
      <p className="text-gray-300 w-1/2 m-auto mt-8 mb-16">{description}</p>
      <div className="w-full">
        <ul className="flex justify-between w-10/12 m-auto gap-8">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col items-center bg-emerald-700 rounded-lg w-80 h-72 justify-center -mb-28 p-4">
              <Image src={item.image.image.url} alt={item.image.altText} width={80} height={80} className="mb-8" />
              <h5 className="font-bold text-gray-300 mb-2">{item.title}</h5>
              <p className="text-gray-300">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Informational