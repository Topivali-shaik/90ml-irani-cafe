const menuItems = [
  {
    name: "Irani Chai",
    price: "₹25",
    description: "Slow brewed, creamy and perfectly balanced.",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Osmania Biscuit",
    price: "₹15",
    description: "Classic buttery biscuit with a gentle sweetness.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Filter Coffee",
    price: "₹40",
    description: "Bold South Indian coffee with rich aroma.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Veg Sandwich",
    price: "₹60",
    description: "Fresh vegetables, toasted bread and house seasoning.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85",
  },
];

function SignatureMenu() {
  return (
    <section
      id="menu"
      className="min-h-screen bg-[#062D27] py-24 text-[#F3E2CC]"
    >

      <div className="mx-auto w-[86%] max-w-[1200px]">

        {/* HEADER */}
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <div className="mb-4 flex items-center gap-3 text-[9px] font-bold tracking-[0.25em] text-[#D85A22]">

              <span className="h-px w-7 bg-[#D85A22]" />

              SIGNATURE MENU

            </div>

            <h2 className="font-serif text-[40px] font-bold leading-[1.1]">
              Taste the
              <br />
              <span className="text-[#D85A22]">
                Tradition.
              </span>
            </h2>

          </div>

          <p className="max-w-[320px] text-[12px] leading-[1.7] text-[#F3E2CC]/60">
            Simple ingredients, timeless recipes and the
            unmistakable flavour of an Irani cafe.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {menuItems.map((item) => (

            <div
              key={item.name}
              className="overflow-hidden rounded-[24px] bg-[#F3E2CC] text-[#062D27] transition duration-300 hover:-translate-y-2"
            >

              <div className="h-[240px] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

              </div>

              <div className="p-6">

                <div className="flex items-center justify-between gap-3">

                  <h3 className="font-serif text-[19px] font-bold">
                    {item.name}
                  </h3>

                  <span className="text-[17px] font-bold text-[#D85A22]">
                    {item.price}
                  </span>

                </div>

                <p className="mt-3 text-[11px] leading-[1.6] text-[#351708]/70">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default SignatureMenu;