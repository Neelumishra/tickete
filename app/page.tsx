import ConfirmSecondComp from "@/components/ConfirmSecondComp";
import Confirmcard from "@/components/Confirmcard";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div>
      <div className="block md:hidden ">
        <Navbar/>
        <ConfirmSecondComp />
        <Confirmcard />
        <div className="flex flex-col">
          <Question />
          <Footer />
        </div>
      </div>
      <div className="md:block hidden">
        <Navbar />
        <div className="flex justify-evenly mt-8">
          <Confirmcard />
          <ConfirmSecondComp />
        </div>
        <Question />
        <Footer />
      </div>
    </div>
  );
}
