import chef from "/src/assets/Images/Ameen.png"
import cafeFacade from "../assets/Images/Vintage Irani Café Facade in Sepia Haze.png";
import vidhanaSoudha from "../assets/Images/Translucent Watercolor Vidhana Soudha.png";
import Leaf from "./UI/Leaf";
import leaf1 from "../assets/Images/Leaf_Images/Leaf3.png";
import leaf7 from "../assets/Images/Leaf_Images/Leaf7.png";
import Burger from "../assets/Images/Food_Images/Burger.png";
import Sandwitch from "../assets/Images/Food_Images/Sandwitch.png";
import Samosa from "../assets/Images/Food_Images/Samosa.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[440px] w-full overflow-hidden bg-[#F8F0DF]">



      {/* Main chai-cup image */}


<div className="relative px-0 pt-0 md:pl-[1.5%] md:pr-[1.5%]">
      <div className="relative px-0 pt-10 md:pl-[1.5%] md:pr-[1.5%]">

      

        {/* Small label */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-[#963B20]">
          Authentic Irani Cafe, A Place for chaiholics
        </p>

        {/* Main headline */}
        <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl">
          <span className="block text-[#073D2B]">
            Little Cup,
          </span>

          <span className="block text-[#A43D20]">
            Lots Of Stories.
          </span>
        </h1>
        
        

        <p className="mt-3 max-w-[340px] text-[13px] leading-[1.5] text-[#24241F]">
          Every sip brings a story.
          Every visit makes a memory
        </p>

        <div className="mt-4 ml-2 flex items-center gap-4">

          {/* Explore Menu button */}
          <a
            href="#menu"
            className="inline-flex h-[36px] items-center gap-2 rounded-xl border border-[#073D2B] px-5 text-[12px] font-medium text-[#17251D] transition-colors duration-300 hover:bg-[#073D2B] hover:text-white"
          >
            <span>♧</span>
            Explore Menu
            <span>→</span>
          </a>

          {/* Visit Us button */}
          <a
            href="#visit-us"
            className="inline-flex h-[36px] items-center gap-2 rounded-xl border border-[#073D2B] px-5 text-[12px] font-medium text-[#17251D] transition-colors duration-300 hover:bg-[#073D2B] hover:text-white"
          >
            <span>♙</span>
            Visit Us
          </a>

        </div>
        <div className="mt-4 ml-2 flex justify-start">
   <Link
    to="/get-franchise"
    className="inline-flex h-[38px] items-center gap-2 rounded-xl border border-[#073D2B] bg-[#073D2B] px-10 text-[12px] font-medium text-[#F8F0DF] transition-colors duration-300 hover:bg-[#0A5038]"
  >
    <span>♧</span>
    Get Franchise
  </Link>
</div>


        {/* Hero artwork area */}
        <div className="relative mt-6 min-h-[330px] overflow-hidden">

          

          {/* Vidhana Soudha — left background */}
          <img
            src={vidhanaSoudha}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[-5%] z-0 h-[85%] w-[65%] object-contain object-bottom opacity-80"
          />

          {/* Irani Cafe facade — right background */}
          <img
            src={cafeFacade}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-[-8%] z-0 h-[100%] w-[62%] object-contain object-bottom opacity-90"
          />

          {/* Chai Connects People */}
          <p className="absolute left-[4%] top-[70px] z-20 -rotate-6 font-serif text-1xl italic text-[#A43E20]">
            "Chai Connects People"
          </p>

          {/* Phrase underline */}
        

          {/* Chef Artwork Container */}
<div className="relative mx-auto h-[380px] w-[90%] max-w-[500px] translate-x-9 sm:h-[500px] md:w-[65%]">
  {/* Add your images here */}
  <img
    src={chef}
    alt="90ML Irani Cafe chef"
    className="h-full w-full object-contain object-bottom"
  />
  <Leaf
    image={Burger}
    className="pointer-events-none right-9 top-[8%] z-100 w-25 -rotate-0 opacity-100 sm:w-32 md:w-40"
  />
  <Leaf
    image={Samosa}
    className="pointer-events-none right-65 top-[40%] z-100 w-15 -rotate-50 opacity-100 sm:w-32 md:w-40"
  />
  <Leaf
    image={Sandwitch}
    className="pointer-events-none right-1 top-[78%] z-100 w-20 -rotate-0 opacity-100 sm:w-32 md:w-40"
  />
  
</div>

        </div>

<Leaf
    image={leaf1}
    className="pointer-events-none left-0 top-[92%] z-100 w-28 -rotate-12 opacity-100 sm:w-32 md:w-40"
  />
      </div>
      {/* Compact responsive green feature panel */}
        <div className="relative z-20 mx-0 mt-0 w-full bg-[#003D2D] px-3 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5 md:px-8 md:pb-7 md:pt-6">

          {/* Four features */}
          <div className="grid grid-cols-4">

            {/* Authentic Taste */}
            <div className="flex flex-col items-center justify-center gap-2 py-2 text-center">
              <span className="text-2xl leading-none text-[#F6C66A] sm:text-3xl md:text-4xl">
                ♧
              </span>
              <p className="text-[10px] leading-[1.4] text-[#FFF4DF] sm:text-xs md:text-base">
                Authentic
                <br />
                Taste
              </p>
            </div>

            {/* Warm Ambience */}
            <div className="flex flex-col items-center justify-center gap-2 border-l border-[#496D5B] py-2 text-center">
              <span className="text-2xl leading-none text-[#F6C66A] sm:text-3xl md:text-4xl">
                ♙
              </span>
              <p className="text-[10px] leading-[1.4] text-[#FFF4DF] sm:text-xs md:text-base">
                Warm
                <br />
                Ambience
              </p>
            </div>

            {/* Freshly Brewed */}
            <div className="flex flex-col items-center justify-center gap-2 border-l border-[#496D5B] py-2 text-center">
              <span className="text-2xl leading-none text-[#F6C66A] sm:text-3xl md:text-4xl">
                ♨
              </span>
              <p className="text-[10px] leading-[1.4] text-[#FFF4DF] sm:text-xs md:text-base">
                Freshly
                <br />
                Brewed
              </p>
            </div>

            {/* Good Food Good People */}
            <div className="flex flex-col items-center justify-center gap-2 border-l border-[#496D5B] py-2 text-center">
              <span className="text-2xl leading-none text-[#F6C66A] sm:text-3xl md:text-4xl">
                ♡
              </span>
              <p className="text-[10px] leading-[1.4] text-[#FFF4DF] sm:text-xs md:text-base">
                Good Food
                <br />
                Good People
              </p>
            </div>

          </div>

          {/* Responsive wave */}
          <div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 w-full translate-y-[98%]">
            <svg
              viewBox="0 0 1440 70"
              preserveAspectRatio="none"
              className="block h-[28px] w-full sm:h-[38px] md:h-[50px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Terracotta accent */}
              <path
                d="M0 0 C150 65 230 10 390 20 C560 30 620 70 780 48 C950 25 1020 5 1160 20 C1300 35 1370 30 1440 0 L1440 0 L0 0 Z"
                fill="#C4512B"
              />

              {/* Green foreground wave */}
              <path
                d="M0 0 C150 58 230 4 390 14 C560 24 620 62 780 40 C950 18 1020 0 1160 14 C1300 29 1370 24 1440 0 L1440 0 L0 0 Z"
                fill="#003D2D"
              />
            </svg>
          </div>

        </div>
        <Leaf
    image={leaf7}
    className="pointer-events-none right-0 top-[88%] z-100 w-28 -rotate-230 opacity-100 sm:w-32 md:w-40"
  />



        <div className="bg-[#F8F0DF]">
          {/* Blank menu cards */}
          <div className="grid grid-cols-2 px-4 py-7 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2">
          </div>

        </div>
  </div>
    </section>
  );
}

export default Hero;
