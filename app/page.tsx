import NavBar from "./components/NavBar";
import { fetchLandingPage } from "./utils/api";
import Sections from "./components/Sections";

export default async function Home() {
  const { data } = await fetchLandingPage();
  // console.log("QUERY DATA == ", data.page);

  const { navbar } = data.page;
  const { sectionsCollection } = data.page;
  // console.log("nav", sectionsCollection);

  return (
    <>
      <NavBar navData={navbar} />
      <Sections sectionsData={sectionsCollection} />
    </>
  );
}
