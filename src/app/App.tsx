import CuppinoLogo from "../imports/CuppinoLogo";
import heroImage from "../assets/86d3a50c820f9559a19086e8ac66786de69129d4.png";

export default function App() {
  const links = [
    {
      icon: "🛒",
      text: "Shop Our Collection",
      url: "https://cuppino.it",
    },
    {
      icon: "🫒",
      text: "Extra Virgin Olive Oil",
      url: "#olive-oil",
    },
    {
      icon: "🍯",
      text: "Artisanal Honey Collection",
      url: "https://cuppino.it/collections/honey-from-abruzzo",
    },
    { icon: "🎁", text: "Gift Boxes", url: "https://cuppino.it/collections/cuppino-gift-boxes" },
    { icon: "📖", text: "Our Story", url: "https://cuppino.it/pages/story" },
  ];

  return (
    <div className="min-h-screen bg-[#D6CDBF]">
      {/* Header Section */}
      <header className="relative w-full flex justify-center bg-[#D6CDBF]">
        <div className="relative w-full md:max-w-[580px] h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={heroImage}
            alt="Cuppino Italian Food Gift Box"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#D6CDBF]/80"></div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="w-full max-w-[580px] mx-auto px-4 md:px-0">
        {/* Bio Section */}
        <section
          className="py-8 px-6 text-center"
          style={{
            fontFamily: "Jost, sans-serif",
            color: "#2C2C2C",
            lineHeight: "1.5",
          }}
        >
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center px-4 py-4">
            <div className="w-full max-w-[200px] md:max-w-[250px] mb-3">
              <CuppinoLogo />
            </div>
            <p
              className="tracking-[0.125rem] uppercase"
              style={{
                fontFamily: "Barlow, sans-serif",
                fontSize: "12px",
                color: "#194C24",
              }}
            >
              Genuine Italian Food
            </p>
          </div>
          <p className="text-base">
            Directly from family farms in Abruzzo to your table.
            <br></br>Extra virgin olive oil, artisanal honey, and
            sun-ripened antipasti. <br></br>No middlemen. Only genuine food.
          </p>
        </section>

        {/* Primary Link Buttons */}
        <section className="px-4 pb-12">
          <div className="flex flex-col gap-[14px]">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="group flex items-center justify-center gap-3 px-[18px] py-[14px] bg-[#FFF0D7] rounded-[100px] border-[2px] border-[#194C24] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#E9E9BD]"
                style={{
                  boxShadow: "2px 2px 0px 2px #194C24",
                  fontFamily: "Barlow, sans-serif",
                  fontWeight: "600",
                  color: "#4A5D3B",
                }}
              >
                <span className="text-xl md:text-2xl">
                  {link.icon}
                </span>
                <span className="text-[15px] md:text-base uppercase">
                  {link.text}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Social Icons Section */}
        <section className="px-4 py-8 flex justify-center gap-6">
          <a
            href="https://facebook.com/cuppino.it"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#194C24] text-[#F5F1E8] transition-all duration-150 hover:scale-110 hover:bg-[#18361A]"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/cuppino.it"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#194C24] text-[#F5F1E8] transition-all duration-150 hover:scale-110 hover:bg-[#18361A]"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
              />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://tiktok.com/@cuppino.it"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#194C24] text-[#F5F1E8] transition-all duration-150 hover:scale-110 hover:bg-[#18361A]"
            aria-label="TikTok"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#871E1E] text-[#F5F1E8] py-6 mt-8">
        <div className="text-center space-y-3">
          <p className="text-xs md:text-sm">
            Made with ❤️ in Abruzzo, Italy
          </p>
          <div className="flex justify-center gap-4 text-xs">
            <a href="https://cuppino.it/policies/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="https://cuppino.it/pages/shipping-returns" className="hover:underline">
              Shipping & Returns
            </a>
            <span>|</span>
            <a href="https://cuppino.it/pages/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}