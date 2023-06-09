const Feature = ({ feature }) => {
  return (
    <article className="flex flex-col text-black items-center">
      <img
        src={feature.icon}
        alt={feature.name}
        className="w-[80px] h-[64px]"
      />

      <h3 className="mt-12 whitespace-nowrap">{feature.name}</h3>
      <p className="text-black opacity-60 mix-blend-normal text-center mt-4">
        {feature.desc}
      </p>
    </article>
  );
};

export default Feature;
