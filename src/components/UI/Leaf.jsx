

function Leaf({ image, className = "" }) {
  return (
    <img
      src={image}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 h-auto select-none ${className}`}
    />
  );
}

export default Leaf;