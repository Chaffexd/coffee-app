import PlanSections from "../components/Plan/PlanSections";
import { fetchDynamicPage } from "../utils/api";

const CreateYourPlanPage = async () => {
  const { data } = await fetchDynamicPage("create-your-plan");
  const { seoMetadata } = data.pageCollection.items[0];
  const { sectionsCollection } = data.pageCollection.items[0];
  
  return (
    <section>
      <title>{seoMetadata.title}</title>
      <meta name="description" content={seoMetadata.description} />
      <meta name="keywords" content={seoMetadata.keywords} />
      <PlanSections sectionsCollection={sectionsCollection} />
    </section>
  );
};

export default CreateYourPlanPage;
