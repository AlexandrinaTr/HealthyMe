import Button from "../UI/Button";
import ReviewCard from "../UI/ReviewCard";

function Reviews() {
  const reviews = [
    {
      id: 1,
      title: "Life-changing Experience!",
      text: "I can't recommend this coaching program enough! Thanks to the personalized guidance and unwavering support from the coaches, I've completely transformed my lifestyle. Not only have I lost weight and improved my fitness, but I've also gained a newfound sense of confidence and vitality.",
    },
    {
      id: 2,
      title: "A Holistic Approach to Wellness!",
      text: "I am so grateful for the holistic approach to wellness offered by this coaching program. Unlike other programs I've tried in the past, this one focuses on more than just diet and exercise—it addresses all aspects of health, including stress management, sleep quality, and self-care.",
    },
    {
      id: 3,
      title: "Empowering and Motivating!",
      text: "The coaches truly care about their clients' success, and their holistic approach to health and wellness has had a profound impact on my life. If you're ready to take control of your health and transform your life, this program is a game-changer!",
    },
    {
      id: 4,
      title: "Incredible Results!",
      text: "I can't say enough good things about this coaching program! It's been a transformative experience from start to finish. If you're ready to invest in yourself and transform your health, this program is worth every penny!",
    },
  ];
  return (
    <>
      <div
        id="reviews"
        className="flex flex-col gap-2 items-center mx-3 sm:mx-20 sm:gap-4  md:mx-28 lg:grid lg:grid-cols-2 lg:gap-4 2xl:mx-48 2xl:gap-10"
      >
        {reviews.map((review) => (
          <ReviewCard title={review.title} text={review.text} key={review.id} />
        ))}
      </div>
      <div className="w-full flex justify-center mt-8">
        <Button />
      </div>
    </>
  );
}

export default Reviews;
