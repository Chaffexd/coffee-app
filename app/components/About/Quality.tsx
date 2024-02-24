import Image from "next/image";

type QualityProps = {
  quality: {
    title: string;
    description: null;
    descriptionLong: string;
    image: {
      altText: string;
      image: {
        url: string;
      };
    };
  };
};

const Quality = ({ quality }: QualityProps) => {
  const { title, descriptionLong } = quality;
  const { url } = quality.image.image;
  const { altText } = quality.image;

  return (
    <div className="flex w-full bg-gray-800 text-gray-300 rounded-lg mt-52">
      <div className="w-1/2 p-12 pl-20">
        <h3 className="text-3xl mb-8 text-white">{title}</h3>
        <p className="text-md">{descriptionLong}</p>
      </div>
      <div className="w-1/2">
        <Image src={url} alt={altText} width={350} height={450} className="rounded-lg m-auto -mt-16 mb-16" />
      </div>
    </div>
  );
};

export default Quality;
