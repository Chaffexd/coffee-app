import { fetchLandingPage } from "./utils/api";

export default async function Home() {
  const data = await fetchLandingPage();
  console.log("QUERY DATA == ", data);

  return <h1>Hello</h1>;
}
