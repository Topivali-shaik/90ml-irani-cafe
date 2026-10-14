
import { Link } from "react-router-dom";
import developer from "../../assets/Images/Topivali.png";

function AboutDeveloper() {
  return (
    <main className="min-h-screen bg-[#F8F0DF] px-4 py-10 text-[#073D2B] sm:px-8 sm:py-16">
      {/* Vintage parchment card */}
      <section className="relative mx-auto max-w-4xl border-2 border-[#A43E20] p-2 sm:p-3">
        <div className="relative border border-[#BCA783] bg-[#F2E5CB] px-5 py-10 sm:px-12 sm:py-14">

          {/* Decorative corners */}
          <span className="absolute left-3 top-2 font-serif text-2xl text-[#A43E20]">
            ❧
          </span>
          <span className="absolute right-3 top-2 font-serif text-2xl text-[#A43E20]">
            ❧
          </span>

          {/* Developer portrait */}
          <div className="mb-5 flex justify-center sm:mb-9">
            
              {/* Subtle tech-inspired ring */}
              

              {/* Transparent image stays uncropped */}
              <img
                src={developer}
                alt="Developer of 90ML Irani Cafe"
                className="relative z-10 h-full w-70 object-contain"
              />

              {/* Code badge */}
              <span className="absolute -bottom-2 right-0 z-20 rounded-md border border-[#A43E20] bg-[#073D2B] px-3 py-1 font-mono text-xs font-bold text-[#F8F0DF] shadow-md">
                {"</>"}
              </span>
          </div>
          

          {/* Tech label */}
          <div className="mb-4 text-center">
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-6xl">
              S
        
              <span className="italic text-[#A43E20]">.TOPIVALI</span>
            </h1>
            <span className="inline-block border border-[#073D2B]/30 bg-[#F8F0DF] px-3 py-1 font-mono text-xs tracking-widest text-[#A43E20] sm:text-sm">
              DEVELOPER.LOG — 90ML
            </span>
          </div>

          {/* Heading */}
          <header className="text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#A43E20] sm:text-sm">
              {"// The mind behind the website"}
            </p>

            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-6xl">
              About Our{" "}
              <span className="text-[#A43E20]">Developer</span>
            </h1>

            <div className="my-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#A43E20] sm:w-20" />
              <span className="font-serif text-2xl text-[#A43E20]">❧</span>
              <span className="h-px w-12 bg-[#A43E20] sm:w-20" />
            </div>

            <p className="font-mono text-xs tracking-wide text-[#073D2B]/70 sm:text-sm">
              DESIGN · CODE · EXPERIENCE
            </p>
          </header>

          {/* Story */}
          <div className="mx-auto mt-9 max-w-2xl space-y-5 text-center leading-8 sm:mt-12 sm:text-lg">
            <p>
              Every memorable experience begins with an idea. This website
              brings the character of <strong>90ML Irani Cafe</strong> into
              the digital world, combining vintage café charm with modern web
              technology.
            </p>

            <p>
              From the layout and colours to the interactions and responsive
              design, every detail aims to make the online experience feel as
              welcoming as stepping into an Irani café.
            </p>

            <p>
              Behind the scenes, design meets development — turning concepts
              into a functional, accessible, and engaging website that works
              across mobile, tablet, and desktop screens.
            </p>
          </div>

          {/* Tech stack panel */}
          <div className="mx-auto mt-9 max-w-2xl border border-[#073D2B]/25 bg-[#F8F0DF] p-4 sm:mt-10 sm:p-6">
            <div className="mb-4 flex items-center gap-2 border-b border-[#BCA783] pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#A43E20]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#BCA783]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#073D2B]" />
              <span className="ml-2 font-mono text-xs text-[#073D2B]/70">
                tech-stack.txt
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {["React", "JavaScript", "Tailwind CSS", "Responsive UI", "Web Design"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="border border-[#073D2B]/25 px-3 py-1.5 font-mono text-xs text-[#073D2B] transition-colors hover:border-[#A43E20] hover:bg-[#F2E5CB] sm:text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Closing statement */}
          <div className="mt-9 text-center sm:mt-12">
            <p className="font-serif text-xl italic leading-relaxed sm:text-2xl">
              "A touch of tradition, built with technology."
            </p>
            <p className="mt-3 font-mono text-xs tracking-widest text-[#A43E20]">
              {"< 90ML IRANI CAFE />"}
            </p>
          </div>

          {/* Return home */}
          <div className="mt-9 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-[#073D2B] bg-[#073D2B] px-6 py-3 font-medium text-[#F8F0DF] transition-colors duration-300 hover:border-[#A43E20] hover:bg-[#A43E20]"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>
          </div>

          {/* Bottom ornament */}
          <div className="mt-10 text-center font-serif text-2xl text-[#A43E20]">
            ❧
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutDeveloper;
