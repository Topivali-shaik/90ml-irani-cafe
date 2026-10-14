function Card({ image, title, subtitle }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-[#064331] shadow-md transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-h-[70px] flex-col items-center px-1 py-2 text-center text-white">
        <h3 className="text-xs font-semibold sm:text-sm">{title}</h3>
        <p className="mt-1 text-[9px] text-[#E4E3D7] sm:text-[10px]">
          {subtitle}
        </p>

        <button
          type="button"
          aria-label={`Explore ${title}`}
          className="mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-bold text-[#073D2B] transition-transform hover:scale-110"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Card;