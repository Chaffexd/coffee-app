import Header from "./Header"
import Headquarters from "./Headquarters";
import OurCommitment from "./OurCommitment";
import Quality from "./Quality";

type AboutUsProps = {
    sectionsCollection: {
        items: {
            title: string;
            description: string;
            descriptionLong: string;
            headerImage: {
                url: string
            }
            image: {
                altText: string;
                image: {
                    url: string
                }
            }
        }[]
    }
}
const AboutUsSections = ({sectionsCollection}: AboutUsProps) => {
    // console.log("about us props = ", sectionsCollection.items)
    const headerData = sectionsCollection.items[0];
    const ourCommitment = sectionsCollection.items[1];
    const quality = sectionsCollection.items[2];
    const headquarters = sectionsCollection.items[3];

  return (
    <>
        <Header headerData={headerData} />
        <OurCommitment ourCommitment={ourCommitment} />
        <Quality quality={quality} />
        <Headquarters headquarters={headquarters} />
    </>
  )
}

export default AboutUsSections