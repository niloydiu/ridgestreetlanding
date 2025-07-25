import BlankDiv from "@/components/Blank/BlankDiv";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Loan from "@/components/LoanProducts/Loan";

export default function Home() {
  return (
    <>
      {/* <div className="w-screen max-w-[1250px]"> */}
      <Header />
      <BlankDiv />
      <Loan />
      <Footer />
      {/* </div> */}
    </>
  );
}
