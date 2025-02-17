import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services";
import Aboutme from "./Aboutme";
import Book from "./Book";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <Services id="services"/>
        <Aboutme id="aboutme"/>
        <Book id="book"/>
        <Contact id="contact"/>
      </main>
      <Footer/>
    </div>
  );
}
