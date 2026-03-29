function AnimationButton({ content }) {
  return (
    <>
      <button className="cursor-pointer min-w-40 w-fit md:min-w-50 relative overflow-hidden py-3 bg-black text-white rounded-md group/button px-5">
        <span className="relative z-10 font-bold">{content}</span>
        <span className="absolute inset-0 h-full w-0 bg-red-600 transition-all duration-300 group-hover/button:w-full"></span>
      </button>
    </>
  );
}

export default AnimationButton;
