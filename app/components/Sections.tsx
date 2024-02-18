import Header from "./Header";
import Informational from "./Informational";
import OurCollection from "./OurCollection";
import Steps from "./Steps";

type SectionProps = {
  sectionsData: {
    items: {
      title: string;
      description: string;
      callToAction: {
        actionText: string;
      };
      headerImage: {
        title: string;
        url: string;
      };
    }[];
  };
};

const Sections = ({ sectionsData }: SectionProps) => {
  // console.log("SECTIONS", sectionsData.items);
  const headerData = sectionsData.items[0];
  const coffeeCollectionData = sectionsData.items[1];
  const informationalData = sectionsData.items[2];
  const stepsData = sectionsData.items[3];

  return (
    <>
      <Header headerData={headerData} />
      <OurCollection coffeeCollectionData={coffeeCollectionData} />
      <Informational informationalData={informationalData}  />
      <Steps stepsData={stepsData} />
    </>
  );
};

export default Sections;
