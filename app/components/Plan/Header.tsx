type HeaderData = {
  headerData: {
    title: string;
    description: string;
    headerImage: {
      title: string;
      url: string;
    };
  };
};

const Header = ({ headerData }: HeaderData) => {
    const { title, description } = headerData;

    return (
      <section className="w-full bg-cover bg-[url(https://images.ctfassets.net/zjwnk63fhue4/7oKK8cDTwLwEKgX8xDVXYH/7953e11ad34d404e5e2439b07490ef72/image-hero-blackcup.jpg)]">
        <div className="w-1/2 px-20 py-20">
          <h1 className="text-5xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-sm text-gray-300 mb-8">{description}</p>
        </div>
      </section>
    );
};

export default Header;
