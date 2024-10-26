type TSectionTitleProps = {
  heading: string;
  subHeading?: string;
  direction?: "start" | "center" | "end";
};

const SectionTitle = ({ heading, subHeading }: TSectionTitleProps) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <h3 className="text-4xl font-bold uppercase border-y-4 py-4">
        {heading}
      </h3>
      <p className="text-yellow-500 font-bold mx-2">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
