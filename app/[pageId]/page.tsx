import { Metadata, ResolvingMetadata } from "next";
import { fetchDynamicPage } from "../utils/api";

type Props = {
    params: { pageId: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const pageId = params.pageId;

    // fetch data
    const { data } = await fetchDynamicPage(pageId);

    return {
        title: data.pageCollection.items[0].seoMetadata.title,
        description: data.pageCollection.items[0].seoMetadata.description,
        keywords: data.pageCollection.items[0].seoMetadata.keywords
    }
}

const Page = async ({ params }: { params: { pageId: string } }) => {
    const { data } = await fetchDynamicPage(params.pageId);
    console.log("DATA on dynamic segment = ", data.pageCollection.items[0].seoMetadata)

  return <div>Hello</div>;
};

export default Page;
