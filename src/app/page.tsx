import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services";
import Aboutme from "./Aboutme";
import Book from "./Book";
import Contact from "./Contact";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center pt-20">
          <Welcome />
          <Services id="services" />
          <Aboutme id="aboutme" />
          <Book id="book" />
          <Contact id="contact" />
        </main>
      </div>
      <Footer />
    </>
  );
}
