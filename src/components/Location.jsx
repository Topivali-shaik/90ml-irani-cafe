
function VisitUs() {
  const address = "S.G. Palya, Bengaluru, Karnataka 560029";
  const phone = "+91 9591190519";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("S.G. Palya, Bengaluru, Karnataka 560029");

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("90ML Irani Cafe, S.G. Palya, Bengaluru");

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=" +
    encodeURIComponent("S.G. Palya, Bengaluru, Karnataka 560029") +
    "&z=14&output=embed";

  return (
    <section
      id="visit-us"
      className="relative overflow-hidden bg-[#F8F0DF] px-5 py-12 text-[#101C15] sm:px-8 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A43E20] sm:text-xs">
            Visit Us
          </p>

          <div className="mb-3 h-[2px] w-[76px] bg-[#A43E20]" />

          <h2 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-[-0.045em]">
            Come Say{" "}
            <span className="text-[#A43E20]">Chai!</span>
          </h2>
        </div>

        {/* Contact and map layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">

          {/* Left: Contact details */}
          <div className="min-w-0">

            {/* Address card */}
            <div className="flex min-h-[100px] items-center gap-4 rounded-2xl border border-[#E6DCC7] px-4 py-5 sm:gap-6 sm:px-6">
              <div className="flex w-12 shrink-0 items-center justify-center text-[34px] sm:w-14">
                📍
              </div>

              <div className="min-w-0 border-l border-[#D2C5AD] pl-4 sm:pl-6">
                <p className="font-serif text-[19px] leading-snug sm:text-[24px]">
                  S.G. Palya, Bengaluru,
                </p>
                <p className="font-serif text-[19px] leading-snug sm:text-[24px]">
                  Karnataka 560029
                </p>
              </div>
            </div>

            {/* Phone card */}
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="mt-4 flex min-h-[100px] items-center gap-4 rounded-2xl border border-[#E6DCC7] px-4 py-5 transition-colors hover:border-[#A43E20] sm:gap-6 sm:px-6"
            >
              <div className="flex w-12 shrink-0 items-center justify-center text-[32px] sm:w-14">
                ☎
              </div>

              <div className="min-w-0 border-l border-[#D2C5AD] pl-4 sm:pl-6">
                <p className="font-serif text-[21px] font-bold sm:text-[25px]">
                  Cafe Daily
                </p>
                <p className="break-words font-serif text-[19px] sm:text-[24px]">
                  {phone}
                </p>
              </div>
            </a>

            {/* Action buttons */}
            <div className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mt-6 sm:gap-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#073D2B] px-4 py-3 text-center text-[15px] font-semibold text-[#FFF8E9] transition-colors duration-300 hover:bg-[#0A5038] sm:min-h-[60px] sm:text-base"
              >
                Get Directions
                <span className="text-xl" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#073D2B] px-4 py-3 text-center text-[15px] font-semibold text-[#073D2B] transition-colors duration-300 hover:bg-[#073D2B] hover:text-white sm:min-h-[60px] sm:text-base"
              >
                View on Maps
              </a>
            </div>
          </div>

          {/* Right: Responsive map */}
          <div className="relative min-w-0">
            <div className="relative h-[320px] overflow-hidden rounded-2xl border-[3px] border-white bg-[#E9E6D9] shadow-[0_8px_25px_rgba(65,48,24,0.10)] sm:h-[400px] lg:h-[390px] xl:h-[430px]">
              <iframe
                title="90ML Irani Cafe location map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />

              {/* Cafe location label */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-3 top-3 flex max-w-[calc(100%-24px)] items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-md backdrop-blur-sm sm:left-5 sm:top-5 sm:px-4"
              >
                <span className="text-[30px] leading-none text-[#A43E20]">
                  📍
                </span>

                <span className="min-w-0">
                  <span className="block text-sm font-bold text-[#17251D] sm:text-base">
                    90ML Irani Cafe
                  </span>
                  <span className="block text-[11px] text-[#56564F] sm:text-xs">
                    S.G. Palya, Bengaluru
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitUs;
