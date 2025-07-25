import BlankDiv from "@/components/Blank/BlankDiv";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Interest from "@/components/Interest/Interest";
import Lend from "@/components/Lend/Lend";
import Loan from "@/components/LoanProducts/Loan";
import Project from "@/components/Project/Project";
import Resource from "@/components/Resource/Resource";
import Review from "@/components/Review/Review";

export default function Home() {
  return (
    <>
      {/* <div className="w-screen max-w-[1250px]"> */}
      <Header />
      <BlankDiv />
      <Loan />
      <Lend />
      <Review />
      <Project />
      <Interest />
      <Resource />
      <Footer />
      {/* </div> */}
    </>
  );
}
