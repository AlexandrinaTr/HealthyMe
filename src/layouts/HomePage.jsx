import Button from "../UI/Button";

function HomePage() {
  return (
    <section className="mx-3 my-5 flex flex-col gap-2 md:flex-row md:gap-5 md:mx-10 lg:mx-20 lg:gap-10 xl:mx-36 2xl:mx-48 ">
      <div className=" h-36 overflow-hidden md:basis-1/2 md:h-full md:order-1">
        <img
          src="./src/assets/images/hero-section.jpg"
          alt="Hero section image"
          className=" object-cover w-full h-36 md:h-80 lg:h-96  rounded"
        />
      </div>
      <div className="flex flex-col gap-3 md:basis-1/2 md:gap-5 lg:gap-10">
        <h3 className="capitalize text-sm sm:text-xl">
          At <span className="text-accent-pink">HEALTHY ME</span>, we believe
          that true wellness is not just about diets and workouts. It is about
          creating sustainable lifestyle changes that nourish your <b>body</b>,{" "}
          <b>mind</b>, and <b>soul.</b>
        </h3>
        <p className="text-xs sm:text-sm lg:text-lg">
          Through personalized coaching programs, evidence-based strategies, and
          unwavering support, we will empower you to make positive changes that
          last a lifetime.
        </p>
        <div className="self-center md:self-start">
          <Button />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
