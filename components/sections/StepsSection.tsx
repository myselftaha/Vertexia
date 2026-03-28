const steps = [
  {
    number: "STEP 1",
    title: "Complete our online questionnaire",
    time: "15-30 min",
    image: "/images%206/65df76fc975665158c213ada_img-questionnaire-step1.webp"
  },
  {
    number: "STEP 2",
    title: "We build your website fully, from A to Z",
    time: "7 days",
    image: "/images%206/65ef094844a72cbb75d618a2_img-step2.webp"
  },
  {
    number: "STEP 3",
    title: "We launch your website with you live over Zoom",
    time: "30 min",
    image: "/images%206/65ef0948e881387c4c984ce0_img-step3.webp"
  }
];

export default function StepsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 pb-32 pt-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_100%,rgba(14,96,160,0.55)_0%,rgba(5,5,5,0)_65%)]" />
      <div className="relative mx-auto max-w-[1200px] text-center">
        <h2 className="text-[40px] font-medium leading-[52px] max-[960px]:text-[34px] max-[960px]:leading-[44px] max-[640px]:text-[28px] max-[640px]:leading-[36px]">
          3 steps to launch your website
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex h-[420px] w-full flex-col items-center rounded-[22px] bg-[#0b0b0b] px-6 pb-6 pt-0 text-center shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
            >
              <img
                src={step.image}
                alt=""
                aria-hidden="true"
                className="mt-0 h-[190px] w-full max-w-full rounded-[14px] object-contain"
              />
              <div className="h-3" />
              <p className="text-[20px] font-bold text-[#2d6bff]">
                {step.number}
              </p>
              <div className="h-3" />
              <h3 className="text-[22px] font-medium leading-[1.4] text-white">
                {step.title}
              </h3>
              <div className="h-5" />
              <p className="text-[22px] font-medium text-white">{step.time}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            className="rounded-[12px] bg-[#ff5a1f] px-10 py-4 text-base font-medium text-white shadow-[0_12px_26px_rgba(255,90,31,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(255,90,31,0.45)]"
            type="button"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
