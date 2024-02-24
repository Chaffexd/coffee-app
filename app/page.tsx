import NavBar from "./components/NavBar";
import { fetchLandingPage } from "./utils/api";
import Sections from "./components/Landing/Sections";
import Footer from "./components/Footer";

export default async function Home() {
  const { data } = await fetchLandingPage();
  // console.log("QUERY DATA == ", data.page);

  const { sectionsCollection, seoMetadata } = data.page;
  console.log("seoMetadata", data);

  return (
    <> 
      <title>{seoMetadata.title}</title>
      <meta name="description" content={seoMetadata.description} />
      <meta name="keywords" content={seoMetadata.keywords} />
      <Sections sectionsData={sectionsCollection} />
    </>
  );
}
