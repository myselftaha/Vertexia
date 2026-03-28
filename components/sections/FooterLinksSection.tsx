const productLinks = ["Pricing", "Examples", "Guides", "FAQs"];
const companyLinks = ["About Us", "Careers", "Blog", "Get In Touch"];
const accountLinks = ["Login", "Terms & Conditions", "Refund Policy", "Privacy Policy"];
const compareLinks = ["Vertexia vs GoDaddy", "Vertexia vs Squarespace"];

export default function FooterLinksSection() {
  return (
    <section className="footer-links bg-[#050505] px-6 pb-14 pt-20 text-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Product
              </p>
              <ul className="mt-4 space-y-3 text-white/70">
                {productLinks.map((item) => (
                  <li key={item}>
                    <a className="hover:text-white" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Company
              </p>
              <ul className="mt-4 space-y-3 text-white/70">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <a className="hover:text-white" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Account
              </p>
              <ul className="mt-4 space-y-3 text-white/70">
                {accountLinks.map((item) => (
                  <li key={item}>
                    <a className="hover:text-white" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Become a Partner
              </p>
              <ul className="mt-4 space-y-3 text-white/70">
                <li>
                  <a className="hover:text-white" href="#">
                    Partner Program
                  </a>
                </li>
              </ul>
              
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Compare
              </p>
              <ul className="mt-4 space-y-3 text-white/70">
                {compareLinks.map((item) => (
                  <li key={item}>
                    <a className="hover:text-white" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Research
              </p>
              <p className="mt-4 text-white/70">
                AI = Absolute Inequality for Small Business?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
