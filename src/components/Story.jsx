import cafeImage from "../assets/Images/Cafe.png";

function OurStory() {
  return (
    <section className="my-story-section relative w-full overflow-hidden bg-[#F8F0DF]">
      <div className="my-story-container relative mx-auto w-full max-w-[1440px] px-6 pb-10 pt-12 sm:px-10 sm:pt-16 md:px-16 md:pt-20">

        {/* Story label */}
        <div className="mb-5 flex items-center gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#A43E20] sm:text-lg">
            Our Story
          </span>

          <span className="h-[2px] w-16 bg-[#A43E20] sm:w-24" />
        </div>

        {/* Main heading */}
        <h2 className="font-serif text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#073D2B]">
          More Than
          <br />
          Just a <span className="text-[#A43E20]">Cafe.</span>
        </h2>

        {/* Story description */}
        <p className="mt-6 max-w-[720px] text-base leading-[1.65] text-[#172B22] sm:text-xl md:text-2xl">
          90ML Irani Cafe is a space where great chai,
          delicious food and meaningful conversations
          come together. Inspired by the timeless Irani
          cafe culture, we bring a small cup with a big
          experience to Bangalore.
        </p>
        

{/* Cafe image */}
<div className="relative mt-8 w-full overflow-hidden">
  <img
    src={cafeImage}
    alt="Inside 90ML Irani Cafe"
    className="block h-[220px] w-full object-cover sm:h-[420px] md:h-[560px]"
  />
</div>



{/* Our Story Button */}
<div className="mt-10 flex justify-center sm:mt-12">
  <button
    type="button"
    onClick={() => {
      // Add your story navigation here
    }}
    className="group flex w-[85%] max-w-[480px] items-center justify-center gap-5 rounded-full border-2 border-[#D8B96C] bg-[#073D2B] px-8 py-5 text-[#F8F0DF] shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A5038] hover:shadow-[0_12px_25px_rgba(0,0,0,0.22)] sm:gap-7 sm:py-6"
  >
    <span className="font-serif text-2xl font-bold sm:text-3xl">
      Our Story
    </span>

    <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2">
      →
    </span>
  </button>
</div>


        {/* Cafe image, decorative leaves, quote and button come next */}

      </div>
    </section>
  );
}

export default OurStory;
