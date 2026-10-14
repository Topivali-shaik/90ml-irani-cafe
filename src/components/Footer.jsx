import logo from "../assets/Images/90ml-logo.png";
import leafLeft from "../assets/Images/Leaf_Images/leaf4.png";
import leafRight from "../assets/Images/Leaf_Images/leaf4.png";
import instagramIcon from "../assets/Logos/instagram.png"
import youtube from "../assets/Logos/youtube.png"
import whatsapp from "../assets/Logos/whatsapp.png"
import { Link } from "react-router-dom";


const quickLinks = [
  ["Home", "#home"],
  ["Menu", "#menu"],
  ["Our Story", "#story"],
  ["Gallery", "#gallery"],
  ["Visit Us", "#visit-us"],
  ["Franchise", "#franchise"],
  ["About Founder", "#about-founder"],
  ["About Developer", "#about-developer"],
  ["Contact", "#contact"],
];

const specialties = [
  "Irani Chai",
  "Bun Maska",
  "Osmania Biscuit",
  "Sandwiches",
  "Maggi",
  "Cold Coffee",
  "Milk Shakes",
];

function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value.trim();

    if (!email) return;

    const subject = encodeURIComponent(
      "90ML Irani Cafe Updates Subscription"
    );

    const body = encodeURIComponent(
      `Please add ${email} to the 90ML Irani Cafe updates list.`
    );

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden border-t border-[#D9D0BD] bg-[#F8F0DF] text-[#17251D]"
    >
      {/* Decorative leaves */}
      <img
        src={leafLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 -top-5 -z-10 w-20 rotate-[-18deg] sm:w-28"
      />

      <img
        src={leafRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 -top-5 -z-10 w-20 rotate-[18deg] sm:w-28"
      />

      {/* Main footer content */}
      <div className="mx-auto max-w-[1240px] px-5 pb-7 pt-9 sm:px-8 sm:pt-12 lg:px-10 lg:pb-8 lg:pt-10">
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-7 lg:grid-cols-[1.35fr_1fr_1.15fr_1.8fr] lg:gap-x-9">

          {/* Logo */}
          <div className="col-span-2 flex items-center justify-center sm:col-span-4 lg:col-span-1 lg:items-start lg:justify-start">
            <a href="#home" aria-label="90ML Irani Cafe home">
              <img
                src={logo}
                alt="90ML Irani Cafe"
                className="h-auto w-[145px] object-contain sm:w-[170px] lg:w-[155px]"
              />
            </a>
          </div>

          {/* Quick links */}
          <div className="border-l border-[#C9BFA9] pl-4 sm:pl-5">
            <h3 className="mb-3 text-[13px] font-semibold sm:text-sm">
              Quick Links
            </h3>

            <ul className="space-y-1">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[11px] text-[#343A33] transition-colors duration-200 hover:text-[#A43E20] sm:text-xs"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="border-l border-[#C9BFA9] pl-4 sm:pl-5">
            <h3 className="mb-3 text-[13px] font-semibold sm:text-sm">
              Our Specialties
            </h3>

            <ul className="space-y-1">
              {specialties.map((item) => (
                <li
                  key={item}
                  className="text-[11px] text-[#343A33] sm:text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
            {/* Founder & Developer Buttons */}
<div className="mt-4 flex flex-col items-start gap-2">
  <Link
    to="/about-founder"
    className="inline-flex items-center rounded-lg border border-[#073D2B] bg-[#073D2B] px-4 py-2 text-[11px] font-medium text-[#F8F0DF] transition-colors hover:border-[#A43E20] hover:bg-[#A43E20] sm:text-xs"
  >
    About Founder →
  </Link>

  <Link
    to="/about-developer"
    className="inline-flex items-center rounded-lg border border-[#073D2B] px-4 py-2 text-[11px] font-medium text-[#073D2B] transition-colors hover:bg-[#073D2B] hover:text-[#F8F0DF] sm:text-xs"
  >
    About Developer →
  </Link>
</div>

          </div>

          {/* Social media and newsletter */}
          <div className="col-span-2 border-l border-[#C9BFA9] pl-4 sm:col-span-2 sm:pl-5">
            <h3 className="mb-3 text-[13px] font-semibold sm:text-sm">
              Follow Us
            </h3>

            {/* Text symbols instead of icon libraries */}
            <div className="mb-6 flex items-center gap-3">
              
<a
  href="https://www.instagram.com/90mliranicafe/?hl=en"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-6 w-6 items-center justify-center transition-transform hover:scale-110"
>
  <img
    src={instagramIcon}
    alt=""
    className="h-5 w-5 object-contain"
  />
</a>


              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-6 w-6 items-center justify-center text-[21px] font-bold transition-transform hover:scale-110"
              >
                f
              </a>

              <a
  href="YOUR_INSTAGRAM_URL"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-6 w-6 items-center justify-center transition-transform hover:scale-110"
>
  <img
    src={youtube}
    alt=""
    className="h-5 w-5 object-contain"
  />
</a>

              <a
  href="YOUR_INSTAGRAM_URL"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center transition-transform hover:scale-110"
>
  <img
    src={whatsapp}
    alt=""
    className="h-10 w-10 object-contain"
  />
</a>
            </div>

            <h3 className="mb-1 text-[13px] font-semibold sm:text-sm">
              Get Updates
            </h3>

            <p className="mb-3 text-[11px] text-[#343A33] sm:text-xs">
              Join for offers and new menu items.
            </p>

            {/* Newsletter form */}
            <form
              onSubmit={handleSubscribe}
              className="flex h-10 w-full items-center overflow-hidden rounded-full border border-[#D4CBB8] bg-[#F5EDDC] pl-4 pr-1"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                aria-label="Your email address"
                className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-[#625E54]"
              />

              <button
                type="submit"
                aria-label="Subscribe for updates"
                className="flex h-8 w-9 shrink-0 items-center justify-center rounded-full bg-[#073D2B] text-white transition-colors duration-200 hover:bg-[#A43E20]"
              >
                <span className="text-lg leading-none">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Brand tagline */}
        <p className="mt-8 text-center text-[9px] font-medium tracking-[0.12em] sm:mt-10 sm:text-[10px] sm:tracking-[0.22em]">
          IRANI STYLE <span className="px-1">•</span>
          DUM KI CHAI <span className="px-1">•</span>
          ASLI SWAAD <span className="px-1">•</span>
          EK SIP... <span className="px-1">•</span>
          AUR DIL KHUSH!
        </p>
      </div>

      {/* Bottom footer bar */}
      <div className="border-t border-[#D9D0BD]">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-3 px-5 py-5 text-center sm:px-8 lg:flex-row lg:justify-between lg:gap-5 lg:px-10 lg:py-4 lg:text-left">

          <p className="text-[10px] text-[#343A33] sm:text-xs">
            © 2025 90ML Irani Cafe. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-[10px] sm:text-xs">
            <a
              href="#privacy"
              className="transition-colors hover:text-[#A43E20]"
            >
              Privacy Policy
            </a>

            <span className="text-[#8D8678]">|</span>

            <a
              href="#terms"
              className="transition-colors hover:text-[#A43E20]"
            >
              Terms
            </a>
          </div>

          <p className="flex items-center gap-2 text-[10px] sm:text-xs">
            <span className="text-[#073D2B]">♥</span>
            Made for Chai Lovers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
