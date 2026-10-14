import Card from "./UI/Card";
import iranichai from "../assets/images/Food_items/iraniChai.png"
import Maggi from "../assets/images/Food_items/Maggi.png"
import MaskaBun from "../assets/images/Food_items/MaskaBun.png"
import Coldcoffee from "../assets/images/Food_items/ColdCoffee.png"
import Biscuit from "../assets/images/Food_items/Biscuit.png"
import Samosa from "../assets/images/Food_items/Samosa.jpg"
import Noodles from "../assets/images/Food_images/Noodles.png"
import Leaf from "./UI/Leaf";



function Menu() {
  const menuItems = [
    { title: "Irani Chai", subtitle: "The Original",Displayimage:iranichai},
    { title: "Filter Coffee", subtitle: "Freshly Brewed",Displayimage:Maggi },
    { title: "Bun Maska", subtitle: "Buttery Goodness",Displayimage:Biscuit },
    { title: "Samosa", subtitle: "Crispy & Spicy",Displayimage:MaskaBun },
    { title: "Sandwich", subtitle: "Fresh & Tasty",Displayimage:Coldcoffee },
    { title: "Osmania Biscuit", subtitle: "Hyderabadi Classic",Displayimage:Samosa },
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
    className="pointer-events-none right-0 top-[136%] z-100 w-35 -rotate-0 opacity-100 sm:w-32 md:w-40"
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