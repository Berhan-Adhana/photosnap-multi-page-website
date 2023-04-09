const Feature = ({ feature }) => {
  return (
    <article className="flex flex-col text-black items-center">
      <img src={feature.icon} alt={feature.name} className="" />

      <h3 className="mt-12 whitespace-nowrap">{feature.name}</h3>
      <p className="text-black opacity-60 mix-blend-normal text-center mt-4 md:w-[457px]">
        {feature.desc}
      </p>
    </article>
  );
};

export default Feature;
