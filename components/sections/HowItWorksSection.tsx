export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 pb-32 pt-12 text-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] bg-[radial-gradient(80%_70%_at_70%_55%,rgba(40,72,180,0.35)_0%,rgba(5,5,5,0)_70%)]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="flex justify-center">
          <a
            className="font-display inline-flex items-center gap-2 border-b border-white/35 pb-1 text-[14px] font-semibold text-white/75"
            href="#"
          >
            Explore more examples
          </a>
        </div>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="font-accent flex items-center gap-3 text-[24px] font-normal leading-[31px] text-white/70 max-[960px]:text-[20px] max-[960px]:leading-[28px] max-[640px]:text-[16px] max-[640px]:leading-[22px]">
              <img
                src="/images%205/65ba8d9f14728153fb66da4a_icon_shine.svg"
                alt=""
                aria-hidden="true"
                className="h-5 w-5"
              />
              <span>
                Your website will be ready{" "}
                <span className="text-[#2d6bff]">next Friday</span>
              </span>
            </div>
            <h2 className="mt-6 text-[56px] font-medium leading-[73px] max-[960px]:text-[48px] max-[960px]:leading-[62px] max-[640px]:text-[36px] max-[640px]:leading-[46px]">
              How does it work?
            </h2>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[22px] bg-[#0b0b0b] shadow-[0_30px_60px_rgba(0,0,0,0.55)]">
              <img
                src="/images%205/662fbd88fb3018e820bf64b2_thumb-how-does-it-work-desk.webp"
                alt="How it works preview"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 rounded-full bg-white/20 px-5 py-3 text-white backdrop-blur-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25">
                    <img
                      src="/images%205/65baacae21c7b570bec9030f_icon_play.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </span>
                  <span className="text-base font-semibold">
                    Watch 2-min explainer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
