import SectionTitle from "../../shared/SectionTitle";

const featuredServices = [
  {
    name: "Premium Car Wash",
    description: "Get your car sparkling clean with our premium wash service.",
    image: "https://i.postimg.cc/PfCDdnGh/f1.jpg",
    price: 30,
    duration: 45, // duration in minutes
  },
  {
    name: "Interior Detailing",
    description:
      "Deep cleaning of your car’s interior for a fresh and clean look.",
    image: "https://i.postimg.cc/FFwLRCmS/f2.jpg",
    price: 50,
    duration: 60,
  },
  {
    name: "Express Wash",
    description: "Quick and thorough wash for those on the go.",
    image: "https://i.postimg.cc/rFWttGFP/f3.jpg",
    price: 15,
    duration: 20,
  },
  {
    name: "Tire & Wheel Cleaning",
    description:
      "Specialized cleaning for tires and wheels to make them shine.",
    image: "https://i.postimg.cc/RZBJ13WV/f4.jpg",
    price: 20,
    duration: 30,
  },
  {
    name: "Full Service Detailing",
    description:
      "Comprehensive detailing service covering both interior and exterior.",
    image: "https://i.postimg.cc/xdjk7WGw/f5.webp",
    price: 100,
    duration: 120,
  },
  {
    name: "Engine Cleaning",
    description:
      "Thorough cleaning of your car’s engine for better performance.",
    image: "https://i.postimg.cc/rphdLQQK/f6.webp",
    price: 70,
    duration: 75,
  },
];

const Services = () => {
  return (
    <div className="container mt-14">
      <SectionTitle
        heading="Our Top Services"
        subHeading="Explore our most popular services, carefully selected to give your car the best care it deserves"
      />
      <div className="grid grid-cols-1 px-16 lg:grid-cols-3 gap-10">
        {featuredServices.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt="" className="h-[250px] object-cover" />
              <h2 className="text-xl text-center font-semibold text-primary-foreground mt-4">
                {item.name}
              </h2>
              <p className="text-center">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
