import Image from "next/image";

type OurCommitmentProps = {
  ourCommitment: {
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

const OurCommitment = ({ ourCommitment }: OurCommitmentProps) => {
  const { url } = ourCommitment.image.image;
  const { altText } = ourCommitment.image;
  const { title, descriptionLong } = ourCommitment;
  
  return (
    <div className="flex mt-28">
      <div className="w-1/2">
        <Image
          src={url}
          alt={altText}
          width={400}
          height={600}
          className="rounded-lg m-auto"
        />
      </div>
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-4xl mb-8">{title}</h2>
        <p>{descriptionLong}</p>
      </div>
    </div>
  );
};

export default OurCommitment;
