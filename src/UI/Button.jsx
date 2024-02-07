function Button() {
  return (
    <button className="bg-accent-pink h-12 text-sm md:text-lg xl:h-14 xl:mt-8 text-white py-2 px-5 text-center rounded hover:bg-white hover:border hover:border-accent-pink hover:text-accent-pink">
      <a href="#contact">
        I want to be <span className="text-text-dark">HEALTHY!</span>
      </a>
    </button>
  );
}

export default Button;
