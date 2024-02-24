type HeaderProps = {
  headerData: {
    title: string;
    description: string;
    headerImage: {
      url: string;
    };
  };
};
const Header = ({ headerData }: HeaderProps) => {
  const { title, description } = headerData;

  return (
    <section className="w-full bg-cover bg-[url(https://images.ctfassets.net/zjwnk63fhue4/4ND3EsECcJSdY1zGzWl7Mw/0c6ee7ba9c5b805c6cc82fc0a012d1ef/image-hero-whitecup.jpg)] rounded-lg">
      <div className="w-3/5 px-20 py-20">
        <h1 className="text-5xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-sm text-gray-300 mb-8">{description}</p>
      </div>
    </section>
  );
};

export default Header;
