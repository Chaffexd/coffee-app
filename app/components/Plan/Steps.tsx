type StepsProps = {
  stepsData: {
    title: string;
    cardsCollection: {
      items: {
        title: string;
        description: string;
        step: string;
      }[];
    };
  };
};

const Steps = ({ stepsData }: StepsProps) => {
  console.log("STEPS = ", stepsData);
  const { items } = stepsData.cardsCollection;

  console.log("STEPS", items)
  return (
    <section className="mt-28 bg-gray-800 px-12 py-16">
      <div className="flex w-full mb-12">
        {items.map((step, index) => (
          <div key={step.step}>
            <div className="w-full flex items-center">
              <span className="border-2 border-emerald-700 rounded-full w-8 h-8 block"></span>
              <span
                className={`w-full border-2 border-orange-200 ${
                  index === 2 ? "border-0" : ""
                }`}
              ></span>
            </div>
            <div className="w-11/12">
              <p className="text-orange-200 font-bold text-6xl my-12">
                {step.step}
              </p>
              <h6 className="font-bold text-2xl w-3/5 mb-8 text-white">{step.title}</h6>
              <p className="text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
