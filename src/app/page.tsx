import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services";
import Aboutme from "./Aboutme";
import Book from "./Book";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Services id="services"/>
        <Aboutme id="aboutme"/>
        <Book id="book"/>
        <Contact id="contact"/>
      </main>
      <Footer/>
    </div>
  );
}
