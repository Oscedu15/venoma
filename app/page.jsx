import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Category from "@/components/Category";
import Copyright from "@/components/Copyright";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Topbar from "@/components/Topbar";

const Principal = () => {
  return (
    <main className="w-full max-w-[1140px] mx-auto overflow-hidden bg-white">
      Principal
      <Topbar />
      <Header />
      <Hero />
      <Latest />
      <Category />
      <Benefits />
      <About />
      <Cta />
      <Footer />
      <Copyright />
      {/* temporary div */}
      <div className="h-[4000px]"></div>
    </main>
  );
};

export default Principal;
