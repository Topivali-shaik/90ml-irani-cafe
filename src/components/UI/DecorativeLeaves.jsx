import leaf1 from "../../assets/Images/leaves/leaf-1.png";
import leaf2 from "../../assets/Images/leaves/leaf-2.png";
import leaf3 from "../../assets/Images/leaves/leaf-3.png";

function DecorativeLeaves() {
  return (
    <>
      {/* Top-left leaf */}
      <img
        src={leaf1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-10 z-0 w-28 opacity-80 sm:w-40"
      />

      {/* Top-right leaf */}
      <img
        src={leaf2}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/3 z-0 w-32 rotate-12 opacity-80 sm:w-44"
      />

      {/* Bottom-right leaf */}
      <img
        src={leaf3}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-0 z-0 w-28 -rotate-12 opacity-80 sm:w-40"
      />
    </>
  );
}

export default DecorativeLeaves;