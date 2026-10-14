
function CafeStats() {
  const stats = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 15h20v9a9 9 0 0 1-9 9h-2a9 9 0 0 1-9-9z" />
          <path d="M28 18h3a4 4 0 0 1 0 8h-4M13 7v4m7-6v6" />
        </svg>
      ),
      value: "1000+",
      label: "Cups of Chai Served",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="20" cy="10" r="5" />
          <circle cx="8" cy="14" r="3.5" />
          <circle cx="32" cy="14" r="3.5" />
          <path d="M10 32v-5a10 10 0 0 1 20 0v5z" />
          <path d="M2 31v-4a6 6 0 0 1 6-6m30 10v-4a6 6 0 0 0-6-6" />
        </svg>
      ),
      value: "500+",
      label: "Happy Customers",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17 9 8h22l4 9z" />
          <path d="M7 17v16h26V17M14 17v5m6-5v5m6-5v5" />
          <path d="M15 33v-9h10v9" />
        </svg>
      ),
      value: "1",
      label: "Cafe in Bangalore",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 34 6 21C-3 12 9 2 20 13 31 2 43 12 34 21z" />
        </svg>
      ),
      value: "∞",
      label: "Conversations",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden border-y border-[#D9C9A8] bg-[#F8F0DF] px-2 py-3 text-[#102D22] sm:px-4 sm:py-4">
      {/* Decorative corner leaves */}
      <svg
        aria-hidden="true"
        viewBox="0 0 90 100"
        className="pointer-events-none absolute -left-5 -top-4 w-14 text-[#466B32] opacity-80 sm:w-20"
        fill="currentColor"
      >
        <path d="M0 10C22 0 42 7 57 23 35 25 17 20 0 10Z" />
        <path d="M8 0C16 23 28 39 47 54 27 48 12 27 8 0Z" />
        <path d="M0 40C23 31 39 39 50 54 29 57 14 50 0 40Z" />
        <path d="M4 58C23 48 38 56 45 73 26 73 13 67 4 58Z" />
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 90 100"
        className="pointer-events-none absolute -bottom-5 -right-4 w-14 rotate-180 text-[#466B32] opacity-80 sm:w-20"
        fill="currentColor"
      >
        <path d="M0 10C22 0 42 7 57 23 35 25 17 20 0 10Z" />
        <path d="M8 0C16 23 28 39 47 54 27 48 12 27 8 0Z" />
        <path d="M0 40C23 31 39 39 50 54 29 57 14 50 0 40Z" />
        <path d="M4 58C23 48 38 56 45 73 26 73 13 67 4 58Z" />
      </svg>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex min-w-0 items-center justify-center gap-1.5 px-1 py-1 sm:gap-3 sm:px-3 ${
              index !== stats.length - 1
                ? "border-r border-[#CFC2A6]/70"
                : ""
            }`}
          >
            <div className="h-6 w-6 shrink-0 sm:h-8 sm:w-8 md:h-9 md:w-9">
              {stat.icon}
            </div>

            <div className="min-w-0">
              <p className="font-serif text-sm font-bold leading-tight sm:text-lg md:text-xl">
                {stat.value}
              </p>
              <p className="text-[8px] leading-tight sm:text-[10px] md:text-xs">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CafeStats;
