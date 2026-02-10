import {
  Header,
  Hero,
  Features,
  MoreInformation,
  Testimonials,
  Form,
  Footer,
} from "./components";
import { motion } from "motion/react";

function App() {
  return (
    <main className="mx-auto">
      <section className="bg-Navy-850 p-6 h-[460px] relative md:h-[700px] overflow-hidden">
        <Header />

        {/* HERO ILLUSTRATION */}
        <motion.img
          className="relative z-10 mt-12 mx-auto w-[320px] md:w-[460px] xl:w-[580px]"
          src="/images/illustration-intro.png"
          alt="intro illustration"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        {/* BG CURVY (animo el fondo para que no quede “plano”) */}
        <img
          className="absolute bottom-0 left-0 w-full xl:hidden"
          src="/images/bg-curvy-mobile.svg"
          alt="bg curvy mobile"
        />

        <img
          className="absolute bottom-0 left-0 w-full hidden xl:block"
          src="/images/bg-curvy-desktop.svg"
          alt="bg curvy desktop"
        />
      </section>

      <section className="bg-Navy-900 p-6 pb-[320px]">
        <Hero />
        <Features />
        <MoreInformation />
        <Testimonials />
      </section>

      <section className="bg-Navy-950 relative">
        <Form />
        <Footer />
      </section>
    </main>
  );
}

export default App;
