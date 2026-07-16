import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import heroAsset from "@/assets/kwest-hero.png.asset.json";
import logoAsset from "@/assets/logo-kwest.png.asset.json";
import aerialAsset from "@/assets/ecopark-aerial.png.asset.json";
import gateAsset from "@/assets/ecopark-gate.png.asset.json";
import dossierAsset from "@/assets/dossier.png.asset.json";
import deskAsset from "@/assets/desk.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const { scrollYProgress: pageProgress } = useScroll();
  const threadScale = useTransform(pageProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-noir text-foreground overflow-x-hidden">
      {/* Progress thread */}
      <motion.div
        style={{ scaleX: threadScale, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-blood z-50"
      />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/60 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <img src={logoAsset.url} alt="Maxfiy Detektiv Kwest" className="h-10 w-10 rounded-full shrink-0" />
            <div className="min-w-0">
              <div className="font-stencil text-sm sm:text-base tracking-widest truncate" style={{ fontFamily: "'Black Ops One', sans-serif" }}>
                DETEKTIV <span className="text-blood">KWEST</span>
              </div>
              <div className="text-[10px] text-muted-foreground tracking-widest">CASE FILE: DQ-2407</div>
            </div>
          </div>
          <a
            href="#royxat"
            className="shrink-0 bg-blood px-3 sm:px-5 py-2 text-xs sm:text-sm font-bold tracking-widest text-primary-foreground hover:bg-blood/80 transition-colors border border-blood/60"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            ROʻYXATDAN OʻTISH
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img src={deskAsset.url} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </motion.div>

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, oklch(0.08 0.01 40) 90%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <img src={logoAsset.url} alt="" className="w-32 h-32 sm:w-44 sm:h-44 rounded-full shadow-noir animate-flicker" />
              <div className="absolute -inset-2 rounded-full border border-blood/40 animate-pulse" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs sm:text-sm tracking-[0.4em] text-muted-foreground mb-4"
          >
            SIR HAR DOIM YASHIRIN...
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.05em" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-6xl sm:text-8xl md:text-9xl font-black leading-none mb-2"
            style={{ fontFamily: "'Black Ops One', sans-serif", textShadow: "4px 4px 0 oklch(0 0 0 / 0.6)" }}
          >
            DETEKTIV
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mx-auto max-w-md h-14 sm:h-16 flex items-center justify-center bg-blood mb-8 origin-left"
            style={{ clipPath: "polygon(3% 15%, 97% 5%, 99% 85%, 2% 92%)" }}
          >
            <span className="text-3xl sm:text-5xl tracking-[0.3em] text-primary-foreground font-black" style={{ fontFamily: "'Black Ops One', sans-serif" }}>
              KWEST
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-lg sm:text-2xl mb-6"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <span className="flex items-center gap-2"><span className="text-blood">📅</span> 24-IYUL</span>
            <span className="text-blood/60">|</span>
            <span className="flex items-center gap-2"><span className="text-blood">🕐</span> 19:00</span>
            <span className="text-blood/60">|</span>
            <span className="flex items-center gap-2"><span className="text-blood">📍</span> ECO PARK</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="inline-block border-2 border-blood/70 px-4 sm:px-6 py-2 sm:py-3 mb-10"
          >
            <p className="text-xs sm:text-base tracking-widest">
              FAQAT <span className="text-blood font-bold">ENG ZIYRAKLAR</span> OXIRIGACHA BORA OLADI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#royxat"
              className="w-full sm:w-auto bg-blood px-8 py-4 tracking-widest text-primary-foreground hover:bg-blood/80 transition-all hover:scale-105 shadow-noir font-bold"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              TERGOVGA QOʻSHILISH →
            </a>
            <a
              href="#dosye"
              className="w-full sm:w-auto border border-foreground/40 px-8 py-4 tracking-widest hover:bg-foreground/10 transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              DOSYENI KOʻRISH
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-muted-foreground"
        >
          ↓ IZLARNI KUZATING ↓
        </motion.div>
      </section>

      {/* CASE FILE STRIP */}
      <div className="relative bg-blood/90 py-3 border-y-2 border-blood overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap text-primary-foreground tracking-[0.3em] text-sm sm:text-base font-bold"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              <span>★ CASE FILE DQ-2407</span>
              <span>★ STATUS: ACTIVE</span>
              <span>★ TOP SECRET</span>
              <span>★ MAXFIY OPERATSIYA</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* DOSYE / MISSION */}
      <Section className="relative py-24 sm:py-32 px-4">
        <div id="dosye" className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="stamp mb-6">DOSYE #2407</div>
            <h2 className="text-4xl sm:text-6xl mb-4" style={{ fontFamily: "'Black Ops One', sans-serif" }}>
              TADBIR <span className="text-blood">HAQIDA</span>
            </h2>
            <div className="red-thread max-w-xs mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="paper-card p-8 sm:p-10 relative grain"
            >
              <div className="absolute -top-3 left-8 stamp text-xs">TOP SECRET</div>
              <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: "'Special Elite', monospace" }}>
                Sizni <span className="text-blood font-bold">qiziqarli topshiriqlar</span>, yashirin izlar va mantiqiy jumboqlar kutmoqda.
                Jamoangiz bilan birga haqiqatga yetib boring.
              </p>
              <p className="leading-relaxed mb-6" style={{ fontFamily: "'Special Elite', monospace" }}>
                Har bir iz — muhim. Har bir javob — qadam. Haqiqat sizni kutmoqda.
              </p>
              <div className="border-t border-ink/30 pt-4 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div><span className="text-blood font-bold">JOY:</span> Eco Park</div>
                  <div><span className="text-blood font-bold">SANA:</span> 24-Iyul</div>
                  <div><span className="text-blood font-bold">VAQT:</span> 19:00</div>
                  <div><span className="text-blood font-bold">FORMAT:</span> Jamoaviy</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="paper-card p-6">
                <img src={dossierAsset.url} alt="Dosye" className="w-full h-auto" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blood rounded-full flex items-center justify-center rotate-12 shadow-noir">
                <span className="text-xs font-bold text-primary-foreground text-center leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  TOP<br />SECRET
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* MISSION OBJECTIVES with 3D cards */}
      <Section className="relative py-24 px-4 bg-card/40 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blood tracking-[0.4em] text-sm mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>MISSION OBJECTIVES</p>
            <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "'Black Ops One', sans-serif" }}>
              SIZNI <span className="text-blood">NIMA</span> KUTMOQDA?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔍", title: "JUMBOQLAR", desc: "Mantiqiy topshiriqlar sizni chaqiradi" },
              { icon: "☝️", title: "YASHIRIN IZLAR", desc: "Kichik detallar sizni yoʻnaltiradi" },
              { icon: "🗂️", title: "MAXFIY TOPSHIRIQLAR", desc: "Har bir topshiriq sizni sinaydi" },
              { icon: "🕵️", title: "DETEKTIVONA AQL", desc: "Faqat oʻtkir aql gʻalabaga eltadi" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                whileHover={{ y: -8, rotateY: 5, rotateX: -5, scale: 1.03 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="group relative bg-card border border-border p-6 hover:border-blood/60 transition-colors shadow-noir"
              >
                <div className="absolute inset-0 bg-blood/0 group-hover:bg-blood/5 transition-colors" />
                <div className="relative">
                  <div className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                  <h3 className="text-xl mb-2 text-blood" style={{ fontFamily: "'Black Ops One', sans-serif" }}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Special Elite', monospace" }}>{item.desc}</p>
                </div>
                <div className="absolute top-2 right-2 text-[10px] text-blood/50 tracking-widest">
                  #{String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* PUZZLE EXAMPLE */}
      <Section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blood px-4 py-2 mb-4 -rotate-2">
              <p className="text-primary-foreground tracking-[0.3em] text-sm font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>
                JUMBOQ MISOLI
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl" style={{ fontFamily: "'Black Ops One', sans-serif" }}>
              QULFNI <span className="text-blood">OCHING</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="paper-card p-8 sm:p-12 grain relative"
          >
            <p className="mb-6 text-lg" style={{ fontFamily: "'Special Elite', monospace" }}>
              <span className="text-blood font-bold">SAVOL:</span> Quyidagi belgilardan foydalanib, qulfni ochish uchun toʻgʻri 3 xonali kodni aniqlang.
            </p>

            <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-8 text-center">
              {[
                { s: "★", v: "3" }, { s: "●", v: "1" }, { s: "▲", v: "2" }, { s: "■", v: "4" }, { s: "◆", v: "5" },
              ].map((x, i) => (
                <motion.div
                  key={i}
                  initial={{ rotateY: 180, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="border-2 border-ink/40 p-3 sm:p-4"
                >
                  <div className="text-2xl sm:text-3xl">{x.s}</div>
                  <div className="text-xs text-blood font-bold">= {x.v}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3 text-lg sm:text-2xl font-mono">
              <div>★ ● ▲ = <span className="text-blood font-bold">6</span></div>
              <div>■ ★ ◆ = <span className="text-blood font-bold">12</span></div>
              <div>▲ ● ■ = <span className="text-blood font-bold text-3xl">?</span></div>
            </div>

            <div className="mt-8 border-l-4 border-blood pl-4 text-sm italic">
              <span className="text-blood font-bold">MASLAHAT:</span> Belgilar qiymatlarini topib, logik tarzda kodni aniqlang.
            </div>
          </motion.div>
        </div>
      </Section>

      {/* LOCATION with parallax */}
      <Section className="relative py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blood tracking-[0.4em] text-sm mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
              LOCATION: CONFIRMED
            </p>
            <h2 className="text-4xl sm:text-6xl mb-4" style={{ fontFamily: "'Black Ops One', sans-serif" }}>
              ECO <span className="text-blood">PARK</span>
            </h2>
            <p className="text-muted-foreground tracking-widest">TOSHKENT SHAHAR</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-sm overflow-hidden shadow-noir border-2 border-border mb-8 group"
          >
            <img src={aerialAsset.url} alt="Eco Park Toshkent" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 max-w-xs">
              <div className="bg-background/80 backdrop-blur-sm border border-blood/40 p-4">
                <div className="text-xs text-blood tracking-widest mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>CASE FILE: DQ-2407</div>
                <div className="text-sm">STATUS: <span className="text-blood font-bold">ACTIVE</span></div>
                <div className="text-sm">LOCATION: <span className="text-blood font-bold">CONFIRMED</span></div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border p-6">
              <h3 className="text-2xl mb-4 text-blood" style={{ fontFamily: "'Black Ops One', sans-serif" }}>
                📍 MANZIL
              </h3>
              <p className="mb-2">Taraqqiyot Street 78-80</p>
              <p className="mb-2 text-muted-foreground">Toshkent, Oʻzbekiston</p>
              <p className="text-sm text-muted-foreground font-mono mt-4">Koordinatalar: 875W+P9</p>
              <a
                href="https://maps.app.goo.gl/JzsEDsVe2jFsAkYS6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-blood px-6 py-3 text-primary-foreground text-sm tracking-widest font-bold hover:bg-blood/80 transition"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                GOOGLE MAPS'DA OCHISH →
              </a>
            </div>

            <div className="relative overflow-hidden border border-border">
              <iframe
                title="Eco Park xarita"
                src="https://www.google.com/maps?q=41.3271,69.2827&hl=uz&z=16&output=embed"
                className="w-full h-full min-h-[280px] grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Gate parallax */}
      <section className="relative h-[70vh] overflow-hidden">
        <ParallaxImage src={gateAsset.url} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background flex items-center justify-center">
          <div className="text-center px-4">
            <div className="stamp text-lg mb-6">EST. 1924</div>
            <h2 className="text-4xl sm:text-6xl mb-4" style={{ fontFamily: "'Black Ops One', sans-serif" }}>
              HAQIQAT SENI <span className="text-blood">KUTMOQDA</span>
            </h2>
            <p className="text-muted-foreground tracking-widest max-w-xl mx-auto">
              Har bir iz — muhim. Har bir javob — qadam.
            </p>
          </div>
        </div>
      </section>

      {/* ORGANIZERS */}
      <Section className="py-20 px-4 bg-card/40 border-y border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-muted-foreground tracking-[0.4em] text-xs sm:text-sm mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>
            TASHKILOTCHILAR
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "YOSHLAR ISHLARI", sub: "AGENTLIGI" },
              { title: "NARKOTIKLAR VA OʻQOTAR QUROLLARNI NAZORAT", sub: "QILISH AGENTLIGI" },
              { title: "YOSHLAR", sub: "FRONT OFISI" },
            ].map((org, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-dashed border-border p-6 hover:border-blood/60 transition-colors"
              >
                <div className="text-xs sm:text-sm font-bold tracking-widest mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {org.title}
                </div>
                <div className="text-xs text-muted-foreground tracking-widest">{org.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* REGISTRATION CTA */}
      <Section className="relative py-24 sm:py-32 px-4">
        <div id="royxat" className="max-w-3xl mx-auto text-center relative">
          <motion.div
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="paper-card p-8 sm:p-12 grain relative"
          >
            <div className="absolute -top-4 -left-4 stamp text-sm">MAXFIY</div>
            <div className="absolute -top-4 -right-4 stamp text-sm" style={{ transform: "rotate(6deg)" }}>DQ-2407</div>

            <h2 className="text-4xl sm:text-6xl mb-6" style={{ fontFamily: "'Black Ops One', sans-serif", color: "var(--color-ink)" }}>
              TAYYORMISIZ?
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ fontFamily: "'Special Elite', monospace", color: "var(--color-ink)" }}>
              Topshiriqlar faqat belgilangan hududda amalga oshiriladi.
              Har bir qaror yakuniy natijaga taʼsir qiladi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://t.me/yoshlarfrontofisi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-ink text-paper px-8 py-4 tracking-widest font-bold hover:bg-blood transition-colors shadow-noir"
                style={{ fontFamily: "'Oswald', sans-serif", background: "var(--color-ink)", color: "var(--color-paper)" }}
              >
                ROʻYXATDAN OʻTISH →
              </a>
              <a
                href="tel:+998"
                className="w-full sm:w-auto border-2 border-ink px-8 py-4 tracking-widest font-bold hover:bg-ink hover:text-paper transition-colors"
                style={{ fontFamily: "'Oswald', sans-serif", color: "var(--color-ink)", borderColor: "var(--color-ink)" }}
              >
                MAʼLUMOT OLISH
              </a>
            </div>

            <div className="mt-8 text-xs italic" style={{ color: "var(--color-ink)", opacity: 0.7 }}>
              — Faqat eng ziyraklar oxirigacha bora oladi.
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-4 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-widest">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="w-8 h-8 rounded-full" />
            <span>© 2026 MAXFIY DETEKTIV KWEST · YOSHLAR FRONT OFISI</span>
          </div>
          <div>CASE FILE DQ-2407 · TOP SECRET</div>
        </div>
      </footer>
    </div>
  );
}

function ParallaxImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <img src={src} alt="Eco Park darvozasi" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
}
