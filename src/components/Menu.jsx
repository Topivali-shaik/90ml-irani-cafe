import Card from "./UI/Card";
import iranichai from "../assets/Images/Food_items/IraniChai.png"
import Maggi from "../assets/Images/Food_items/Maggi.png"
import MaskaBun from "../assets/Images/Food_items/MaskaBun.png"
import Coldcoffee from "../assets/Images/Food_items/ColdCoffee.png"
import Biscuit from "../assets/Images/Food_items/Biscuit.png"
import Samosa from "../assets/Images/Food_items/Samosa.jpg"
import Noodles from "../assets/Images/Food_Images/Noodles.png"
import Leaf from "./UI/Leaf";



function Menu() {
  const menuItems = [
  { title: "Irani Chai", subtitle: "Rich. Strong. Timeless.", Displayimage: iranichai },
  { title: "Maggi", subtitle: "Hot. Spicy. Comforting.", Displayimage: Maggi },
  { title: "Osmania Biscuit", subtitle: "Crispy. Buttery. Classic.", Displayimage: Biscuit },
  { title: "Bun Maska", subtitle: "Soft. Buttery. Irresistible.", Displayimage: MaskaBun },
  { title: "Filter Coffee", subtitle: "Bold. Aromatic. Freshly Brewed.", Displayimage: Coldcoffee },
  { title: "Samosa", subtitle: "Golden. Crispy. Full of Flavour.", Displayimage: Samosa },
];

  return (
    <section id="menu" className="bg-[#F8F0DF]">
      <div className="px-4 pt-0 pb-15 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A43E20]">
          Taste the Tradition
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#073D2B] sm:text-4xl">
          Our Menu
        </h2>
        

        <p className="mx-auto mt-3 max-w-md text-sm text-[#5D6258]">
          Classic Irani flavours and timeless cafe favourites.
        </p>
<Leaf
    image={Noodles}
    className="pointer-events-none right-0 top-[145%] z-100 w-35 -rotate-0 opacity-100 sm:w-32 md:w-40"
  />
        
      </div>

      <div className="grid grid-cols-2 gap-3 px-4 py-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2">
        {menuItems.map((item, index, Displayimage) => (
          <Card
            key={index}
            image={item.Displayimage}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}

      </div>
      
    </section>
  );
}

export default Menu;
