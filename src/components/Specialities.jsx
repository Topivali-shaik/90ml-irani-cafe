const specialities = [
  {
    title: "Irani Chai",
    description: "Rich. Strong. Authentic.",
    icon: "☕",
    color: "#D85A22",
  },
  {
    title: "Coffee",
    description: "Bold. Aromatic. Classic.",
    icon: "☕",
    color: "#062D27",
  },
  {
    title: "Snacks",
    description: "Crispy. Tasty. Addictive.",
    icon: "🍪",
    color: "#8C4218",
  },
  {
    title: "Bakery",
    description: "Fresh. Soft. Delicious.",
    icon: "🥐",
    color: "#54270D",
  },
];

function Specialities() {
  return (
    <section className="flex min-h-screen items-center bg-[#F3E2CC] py-20 text-[#062D27]">

      <div className="mx-auto w-[86%] max-w-[1200px]">

        <div className="grid items-center gap-16 lg:grid-cols-[330px_1fr]">

          {/* LEFT */}
          <div>

            <div className="mb-5 flex items-center gap-3 text-[9px] font-bold tracking-[0.25em] text-[#D85A22]">

              <span className="h-px w-7 bg-[#D85A22]" />

              OUR SPECIALITIES

            </div>

            <h2 className="font-serif text-[40px] font-bold leading-[1.08]">
              Timeless Flavours,
              <br />
              Irani Style.
            </h2>

            <p className="mt-6 max-w-[320px] text-[13px] leading-[1.8] text-[#351708]">
              From piping hot chai to freshly brewed coffee,
              our menu is a celebration of authentic Irani
              flavours, made with love and tradition.
            </p>

            <a
              href="#menu"
              className="mt-7 inline-flex rounded-full bg-[#062D27] px-6 py-3.5 text-[11px] font-semibold text-white transition hover:bg-[#D85A22]"
            >
              View Full Menu →
            </a>

          </div>

          {/* ITEMS */}
          <div className="grid grid-cols-2 gap-y-14 sm:grid-cols-4 sm:gap-x-8">

            {specialities.map((item) => (

              <div
                key={item.title}
                className="text-center"
              >

                <div
                  className="mx-auto flex h-[115px] w-[115px] items-center justify-center rounded-full text-[42px] shadow-sm"
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <h3 className="mt-6 font-serif text-[19px] font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-[11px] text-[#351708]/75">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Specialities;