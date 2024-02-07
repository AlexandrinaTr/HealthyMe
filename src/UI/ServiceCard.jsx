function ServiceCard({ imageURL, title, paragraph }) {
  return (
    <div className="bg-card-bg h-full rounded overflow-hidden shadow text-text-dark xl:hover:-translate-y-2 xl:transition-transform">
      <img
        src={imageURL}
        alt="Service Image"
        className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-sm"
      />
      <div className="">
        <h6 className="text-md my-2 font-semibold text-center mb-3 xl:text-lg 2xl:text-xl">
          {title}
        </h6>
        <p className="text-xs text-center px-1 mb-2 sm:px-2 md:px-3 lg:text-sm 2xl:text-lg">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
