import Button from "../UI/Button";
import ServiceCard from "../UI/ServiceCard";

function Services() {
  const services = [
    {
      id: 1,
      imageURL: "./src/assets/images/card-1.jpg",
      title: "Nutrition Coaching",
      paragraph:
        "Providing personalized guidance on dietary habits, meal planning, portion control, and making healthier food choices.",
    },
    {
      id: 2,
      imageURL: "./src/assets/images/card-2.jpg",
      title: "Fitness Programs",
      paragraph:
        "Developing exercise programs tailored to clients' fitness levels, goals, and preferences.",
    },
    {
      id: 3,
      imageURL: "./src/assets/images/card-3.jpg",
      title: "Weight Management",
      paragraph:
        "Assisting clients in achieving and maintaining a healthy weight and ongoing support.",
    },
    {
      id: 4,
      imageURL: "./src/assets/images/card-4.jpg",
      title: "Health Education",
      paragraph:
        "Providing evidence-based information on topics such as nutrition, exercise physiology, stress management, sleep, and healthy aging.",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-accent-pink-light via-card-bg to-primary-green-light my-24 py-10">
      <div className=" mx-5 mb-5 lg:mb-10">
        <h1 className="text-text-dark text-center text-xl font-semibold md:text-2xl xl:text-3xl">
          Discover Your Path to Wellness with Our Services
        </h1>
      </div>
      <div
        id="services"
        className="mx-3 grid grid-cols-2 gap-2 sm:mx-20 md:mx-36 lg:mx-20 xl:mx-36 2xl:mx-48 p-3 sm:gap-6 md:gap-12 lg:grid-cols-4 lg:gap-5 xl:gap-7 "
      >
        {services.map((service) => (
          <ServiceCard
            imageURL={service.imageURL}
            title={service.title}
            paragraph={service.paragraph}
            key={service.id}
          />
        ))}
      </div>
      <div className="w-full flex justify-center mt-8 ">
        <Button />
      </div>
    </div>
  );
}

export default Services;
