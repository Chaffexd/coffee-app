import Image from "next/image";
import Link from "next/link";

type NavProps = {
  navData: {
    navItemsCollection: {
      items: {
        title: string;
        slug: string;
      }[];
    };
    logo: {
      altText: string;
      slug: string;
      image: {
        url: string;
      };
    };
  };
};

const NavBar = ({ navData }: NavProps) => {
  // console.log("navData", navData);
  const liItems = navData.navItemsCollection.items;
  const logo = navData.logo.image.url;
  const altText = navData.logo.altText;

  return (
    <header className="w-9/12 m-auto">
      <nav className="w-full">
        <ul className="flex justify-between items-center h-20">
          <Image src={logo} alt={altText} width={200} height={40} />
          <div className="flex items-center">
            {liItems.map((item, index) => (
              <li key={index} className="ml-8">
                <Link href={item.slug}>{item.title}</Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
