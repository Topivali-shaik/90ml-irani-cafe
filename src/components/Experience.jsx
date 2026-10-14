function Experience() {
  const features = [
    {
      title: "Authentic",
      subtitle: "Irani Taste",
      description: "Traditional recipes and original flavours.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor"
          strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 23V15a5 5 0 0 1 5-5h5l6 5 6-5h5a5 5 0 0 1 5 5v8" />
          <path d="M15 22h18v6a9 9 0 0 1-18 0z" />
          <path d="M24 22v-5m-9 19h18m-18 0v4h18v-4" />
        </svg>
      ),
    },
    {
      title: "Cozy",
      subtitle: "Ambience",
      description: "A warm and inviting space to relax.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor"
          strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 25V12a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v13" />
          <path d="M12 17h24M12 25a6 6 0 0 0-6 6v3h36v-3a6 6 0 0 0-6-6z" />
          <path d="M10 34v5m28-5v5M16 39h16" />
        </svg>
      ),
    },
    {
      title: "Good Food",
      subtitle: "Good People",
      description: "Delicious food served with a smile.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor"
          strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="13" r="6" />
          <circle cx="11" cy="17" r="4.5" />
          <circle cx="37" cy="17" r="4.5" />
          <path d="M12 37v-5a12 12 0 0 1 24 0v5z" />
          <path d="M3 36v-5a8 8 0 0 1 5-7m37 12v-5a8 8 0 0 0-5-7" />
        </svg>
      ),
    },
    {
      title: "Timeless",
      subtitle: "Conversations",
      description: "Chai brings people together.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor"
          strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 39 8 24C-2 13 12 2 24 14 36 2 50 13 40 24z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#073D2B] px-3 py-4 text-[#F8F0DF] sm:px-6 sm:py-5">

      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(#F8F0DF 0.7px, transparent 0.7px)",
          backgroundSize: "7px 7px",
        }}
      />


      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* Section title */}
        <h2 className="text-center font-serif text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl">
          The 90ML Experience
        </h2>

        {/* Four features + quote */}
        <div className="mt-4 grid grid-cols-4 items-stretch md:grid-cols-[repeat(4,minmax(0,1fr))_1.25fr]">

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex min-w-0 flex-col items-center justify-center px-1 py-2 text-center sm:px-3 md:py-1 ${
                index < 3 ? "md:border-r md:border-[#D9C18A]/30" : ""
              } ${
                index % 2 === 0 ? "border-r border-[#D9C18A]/30 md:border-r" : ""
              }`}
            >
              <div className="mb-1.5 h-6 w-6 shrink-0 text-[#F6C66A] sm:h-8 sm:w-8">
                {feature.icon}
              </div>

              <h3 className="text-[11px] font-semibold leading-tight sm:text-sm">
                {feature.title}
              </h3>

              <h4 className="text-[11px] font-semibold leading-tight sm:text-sm">
                {feature.subtitle}
              </h4>

              <p className="mt-1.5 hidden max-w-[145px] text-[10px] leading-snug text-[#E4DCCB] sm:block sm:text-xs">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Quote: hidden on small screens, visible on desktop */}
          <div className="col-span-4 mt-3 flex flex-col items-center border-t border-[#D9C18A]/25 px-4 pt-3 text-center md:col-span-1 md:mt-0 md:justify-center md:border-l-0 md:border-t-0 md:pl-5 md:pt-0 md:text-left">
            <blockquote className="max-w-[260px] font-serif text-sm italic leading-snug sm:text-base">
              <span className="mr-1 text-xl font-bold text-[#F6C66A]">“</span>
              Chai is not just a drink, it's a reason for good conversations.
              <span className="ml-1 text-xl font-bold text-[#F6C66A]">”</span>
            </blockquote>

            {/* Coffee bean divider */}
            <div className="mt-2 flex w-full max-w-[120px] items-center gap-2">
              <span className="h-px flex-1 bg-[#D9A94D]/70" />

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-3 w-3 shrink-0 rotate-[-25deg] text-[#F6C66A]"
                fill="currentColor"
              >
                <ellipse cx="12" cy="12" rx="8" ry="11" />
                <path
                  d="M13 2Q6 12 13 22"
                  fill="none"
                  stroke="#073D2B"
                  strokeWidth="1.5"
                />
              </svg>

              <span className="h-px flex-1 bg-[#D9A94D]/70" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;