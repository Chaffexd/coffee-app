import Header from "./Header";
import Steps from "./Steps";

type PlanSectionsProps = {
  sectionsCollection: {
    items: {
      title: string;
      description: string;
      headerImage: {
        title: string;
        url: string;
      };
    }[];
  };
};
const PlanSections = ({ sectionsCollection }: PlanSectionsProps) => {
  console.log("sections = ", sectionsCollection);
  const headerData = sectionsCollection.items[0];
  const stepsData = sectionsCollection.items[1];
  return (
    <>
      <Header headerData={headerData} />
      <Steps stepsData={stepsData} />
    </>
  );
};

export default PlanSections;
