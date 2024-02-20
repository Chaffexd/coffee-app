const Page = ({ params }: { params: { pageId: string } }) => {
  console.log("slug = ", params);
  return <div>Hello</div>;
};

export default Page;
