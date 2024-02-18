type StepsProps = {
  stepsData: {
    title: string;
    cta: {
      actionText: string;
    };
    stepCardsCollection: {
      items: {
        title: string;
        description: string;
        step: string;
      }[];
    };
  };
};
const Steps = ({ stepsData }: StepsProps) => {
  const { title } = stepsData;
  const { actionText } = stepsData.cta;
  const { items } = stepsData.stepCardsCollection;

  return (
    <section className="mt-64 px-24">
      <h6>{title}</h6>
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
              <h6 className="font-bold text-2xl w-3/5 mb-8">{step.title}</h6>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="rounded-lg text-white font-bold h-12 w-48 bg-emerald-700">
        {actionText}
      </button>
    </section>
  );
};

export default Steps;
