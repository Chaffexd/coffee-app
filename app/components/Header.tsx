type HeaderData = {
  headerData: {
    title: string;
    description: string;
    callToAction: {
      actionText: string;
    };
    headerImage: {
      title: string;
      url: string;
    };
  };
};

const Header = ({ headerData }: HeaderData) => {
  // console.log("HEADER DATA = ", headerData);
  const { title, description, callToAction } = headerData;
  return (
    <section className="w-full bg-cover bg-[url(https://images.ctfassets.net/zjwnk63fhue4/63Cwi11s2LfMcovnFkLW53/df70701f9d370d2cb87b40fe076ce9a0/image-hero-coffeepress.jpg)] rounded-lg">
      <div className="w-1/2 px-12 py-28">
        <h1 className="text-7xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-xl text-gray-300 mb-8">{description}</p>
        <button className="mt-8 w-48 rounded-lg text-white font-bold h-12 bg-green-700">{callToAction.actionText}</button>
      </div>
    </section>
  );
};

export default Header;
