function AnimatedTitle({ content, bgColor }) {
  return (
    <>
      <div className="w-fit relative overflow-hidden py-2 px-5 font-bold text-2xl sm:text-3xl  lg:text-4xl">
        <span className="relative z-10">{content}</span>
        <span
          className={`absolute inset-0 h-full w-0 ${bgColor} transition-all duration-500 group-hover:w-full`}
        ></span>
      </div>
    </>
  );
}

export default AnimatedTitle;
