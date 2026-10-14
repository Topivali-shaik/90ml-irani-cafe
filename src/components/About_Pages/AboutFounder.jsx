
import { Link } from "react-router-dom";
import founder from "../../assets/images/Ameen2.png"

function AboutFounder() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F0DF] px-4 py-10 text-[#073D2B] sm:px-8 sm:py-16">

      {/* Vintage paper frame */}
      <section className="mx-auto max-w-5xl border border-[#BCA783] bg-[#F2E5CB] p-2 shadow-[0_12px_35px_rgba(68,45,18,0.12)] sm:p-4">
        <div className="relative border border-[#BCA783] px-5 py-10 sm:px-10 sm:py-14 md:px-16">

          {/* Vintage corner details */}
          <span className="absolute left-3 top-2 font-serif text-3xl text-[#A43E20] sm:left-5 sm:top-4">
            ❧
          </span>

          <span className="absolute right-3 top-2 font-serif text-3xl text-[#A43E20] sm:right-5 sm:top-4">
            ❧
          </span>

          {/* Founder portrait */}
<div className="mb-7 flex justify-center sm:mb-9">
  <div className="relative">
    <img
      src={founder}
      alt="Founder of 90ML Irani Cafe"
      className="h-auto w-70 object-contain sm:w-52"
    />
    <h1 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-6xl">
              SHAIK
        
              <span className="italic text-[#A43E20]">.AMEEN</span>
            </h1>
  </div>
</div>

          {/* Eyebrow */}
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#A43E20] sm:text-xs">
              The Story Behind the Brand
            </p>

            <div className="mx-auto mt-4 flex max-w-[220px] items-center gap-3">
              <span className="h-px flex-1 bg-[#BCA783]" />
              <span className="text-xl text-[#A43E20]">✦</span>
              <span className="h-px flex-1 bg-[#BCA783]" />
            </div>

            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-6xl">
              About Our
              <br />
              <span className="italic text-[#A43E20]">Founder</span>
            </h1>

            <p className="mt-4 font-serif text-sm italic text-[#68604E] sm:text-base">
              Every great story begins with an idea.
            </p>
          </div>

          {/* Vintage divider */}
          <div className="my-8 flex items-center justify-center gap-3 sm:my-10">
            <span className="h-px w-12 bg-[#BCA783] sm:w-20" />
            <span className="text-2xl text-[#A43E20]">❦</span>
            <span className="h-px w-12 bg-[#BCA783] sm:w-20" />
          </div>

          {/* Founder message */}
          <article className="mx-auto max-w-2xl">
            <p className="mb-5 text-center font-serif text-2xl leading-snug sm:text-3xl">
              “A cup of chai is more than a drink.
              It is a moment of connection.”
            </p>

            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#A43E20]">
              A Thought For The Chaiholics
            </p>

            <div className="space-y-5 font-serif text-base leading-8 text-[#484536] sm:text-lg sm:leading-9">
              <p>
                Every memorable cafe begins with a simple thought:
                create a place where people can pause, share stories,
                and enjoy the comfort of a familiar cup.
              </p>

              <p>
                Inspired by the warmth of Irani cafe culture, 90ML
                Irani Cafe celebrates the timeless pleasure of chai,
                traditional favourites, and conversations that turn
                ordinary moments into lasting memories.
              </p>

              <p>
                Our vision is to build a brand that brings together
                heritage, hospitality, and a welcoming atmosphere
                for everyone who walks through our doors.
              </p>

              <p>
                This is the beginning of our story — one cup, one
                conversation, and one memorable experience at a time.
              </p>
            </div>
          </article>

          {/* Founder signature placeholder */}
          <div className="mt-10 text-center sm:mt-12">
            <div className="mx-auto mb-3 h-px w-24 bg-[#BCA783]" />

            <p className="font-serif text-2xl italic text-[#A43E20]">
              With warmth and gratitude
            </p>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#68604E]">
              Founder, 90ML Irani Cafe
            </p>
          </div>

          {/* Bottom ornament */}
          <div className="mt-10 text-center">
            <span className="text-2xl tracking-[0.4em] text-[#A43E20]">
              ❧ ✦ ❧
            </span>
          </div>
        </div>
      </section>

      {/* Return home */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg border border-[#073D2B] px-5 py-3 text-sm font-medium transition-colors hover:bg-[#073D2B] hover:text-[#F8F0DF]"
        >
          ← Back to Home
        </Link>
      </div>

    </main>
  );
}

export default AboutFounder;
