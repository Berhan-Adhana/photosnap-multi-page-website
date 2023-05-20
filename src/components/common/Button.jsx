import classNames from "classnames";

const Button = ({
  children,
  black,
  transparent,
  whiteArrow,
  blackArrow,
  ...rest
}) => {
  const cutomClassNames = classNames(
    rest.className,
    "uppercase cursor-pointer font-bold text-[12px] leading-[15.6px] tracking-[2px] transition-all duration-500",
    {
      "bg-black px-4 py-2 text-white hover:bg-lightGrey hover:text-black":
        black,
      "bg-transparent relative hover:underline inline-block after:absolute after:-right-[56px] after:top-[50%] after:-translate-y-[50%]":
        (transparent && blackArrow) || (transparent && whiteArrow),
      "text-black after:content-[url('./assets/shared/desktop/arrow.svg')]":
        transparent && blackArrow,
      "text-white after:content-[url('./assets/shared/desktop/arrow_light.svg')] ":
        transparent && whiteArrow,
    }
  );
  return (
    <button className={cutomClassNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
