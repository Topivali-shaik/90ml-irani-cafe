const galleryImages = [
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1000&q=85",
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="min-h-screen bg-[#062D27] py-24 text-[#F3E2CC]"
    >

      <div className="mx-auto w-[86%] max-w-[1200px]">

        {/* HEADER */}
        <div className="mb-14 text-center">

          <div className="mb-4 flex items-center justify-center gap-3 text-[9px] font-bold tracking-[0.25em] text-[#D85A22]">

            <span className="h-px w-7 bg-[#D85A22]" />

            OUR GALLERY

            <span className="h-px w-7 bg-[#D85A22]" />

          </div>

          <h2 className="font-serif text-[42px] font-bold">
            A Glimpse of
            <span className="text-[#D85A22]">
              {" "}90ml.
            </span>
          </h2>

        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">

          {galleryImages.map((image, index) => (

            <div
              key={image}
              className={`overflow-hidden rounded-[22px] ${
                index === 0 || index === 4
                  ? "h-[360px]"
                  : "h-[280px]"
              }`}
            >

              <img
                src={image}
                alt={`90ml Irani Cafe gallery ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;