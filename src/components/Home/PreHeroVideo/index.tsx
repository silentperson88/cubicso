import Link from "next/link";

const PreHeroVideo = () => {
  return (
    <section className="relative pt-32 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#eaf6ff_0%,#f5fbff_52%,#ffffff_100%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(47,115,242,0.14),transparent_35%),radial-gradient(circle_at_86%_84%,rgba(70,196,255,0.15),transparent_40%)]"></div>
      <div className="mx-auto w-full max-w-[1860px] px-2 md:px-4 relative z-10">
        <div className="rounded-3xl border border-primary/15 bg-white/70 p-2 md:p-4 shadow-[0_20px_55px_rgba(16,45,71,0.14)] backdrop-blur-sm">
          <div className="relative overflow-hidden rounded-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/pillars/Gemini_Generated_Image_g8tfmng8tfmng8tf.png"
              className="w-full h-[360px] md:h-[520px] lg:h-[620px] xl:h-[700px] 2xl:h-[760px] object-cover"
            >
              <source src="/videos/cubisco.mp4" type="video/mp4" />
              <source src="/videos/Cubisco.mov" type="video/quicktime" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute left-5 right-5 bottom-5 md:left-8 md:right-8 md:bottom-8">
              <p className="inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1 text-13 text-white backdrop-blur-sm">
                CUBICSO Introduction
              </p>
              <h2 className="mt-3 text-white text-24 md:text-38 font-semibold max-w-3xl leading-tight">
                Building trust through safe, quality-first execution
              </h2>
              <p className="mt-2 text-white/90 text-15 md:text-17 max-w-2xl">
                Heavy Infrastructure, Industrial Services, and Renewable Energy
                programs delivered with schedule certainty and governance rigor.
              </p>
              <div className="mt-5">
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-lg border border-white/30 bg-white/15 px-5 py-2.5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:text-white hover:bg-[linear-gradient(110deg,rgba(47,115,242,0.95)_0%,rgba(70,196,255,0.92)_100%)] hover:shadow-[0_10px_28px_rgba(47,115,242,0.35)]"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreHeroVideo;
