import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  footerData: {
    companyName: string;
    navItemsCollection: {
      items: {
        title: string;
        slug: string;
      }[];
    };
    logo: {
      altText: string;
      image: {
        url: string;
      };
    };
    socialsCollection: {
      items: {
        altText: string;
        image: {
          url: string;
        };
      }[];
    };
  };
};

const Footer = ({ footerData }: FooterProps) => {
  const { url } = footerData.logo.image;
  const { altText } = footerData.logo;
  const { items } = footerData.navItemsCollection;
  // Have to take this approach because you can't dot notate on a server component
  const facebookLogo = footerData.socialsCollection.items[0].image.url;
  const facebookAlt = footerData.socialsCollection.items[0].altText;
  const twitterLogo = footerData.socialsCollection.items[1].image.url;
  const twitterAlt = footerData.socialsCollection.items[1].altText;
  const instragramLogo = footerData.socialsCollection.items[2].image.url;
  const instagramAlt = footerData.socialsCollection.items[2].altText;

  return (
    <footer className="bg-gray-800 flex items-center justify-between h-20 px-8 mt-40 rounded-t-lg w-9/12 m-auto">
      <div className="flex">
        <Image src={url} alt={altText} width={200} height={40} className="mr-8" />
        <ul className="flex">
          {items.map((navItems) => (
            <li key={navItems.slug} className="text-gray-300 ml-8">
              <Link href={navItems.slug}>{navItems.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <Image src={facebookLogo} alt={facebookAlt} width={20} height={20} />
        <Image src={twitterLogo} alt={twitterAlt} width={20} height={20} className="ml-8" />
        <Image src={instragramLogo} alt={instagramAlt} width={20} height={20} className="ml-8" />
      </div>
    </footer>
  );
};

export default Footer;
