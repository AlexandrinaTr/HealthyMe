function ReviewCard({ title, text }) {
  return (
    <div className="bg-primary-green-light w-full text-text-dark even:bg-accent-pink-light flex flex-col gap-3 justify-start items-center text-center p-2 shadow rounded h-full sm:w-2/3 sm:odd:self-start sm:even:self-end md:p-4 lg:w-full lg:bg-accent-pink-light lg:first:bg-primary-green-light lg:last:bg-primary-green-light lg:px-8 lg:py-4 ">
      <h6 className="font-semibold  lg:text-lg xl:text-xl ">{title}</h6>
      <quote className="text-xs italic md:text-sm xl:text-lg">{text}</quote>
    </div>
  );
}

export default ReviewCard;
