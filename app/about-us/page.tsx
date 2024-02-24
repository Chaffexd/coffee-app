import AboutUsSections from "../components/About/AboutUsSections";
import { fetchAboutPage } from "../utils/api";

const AboutUsPage = async ({ params }: { params: { slug: string } }) => {
  const { data } = await fetchAboutPage("about-us");

  const { seoMetadata, sectionsCollection } = data.pageCollection.items[0];
  return (
    <>
      <title>{seoMetadata.title}</title>
      <meta name="description" content={seoMetadata.description} />
      <meta name="keywords" content={seoMetadata.keywords} />
      <section>
        <AboutUsSections sectionsCollection={sectionsCollection} />
      </section>
    </>
  );
};

export default AboutUsPage;
