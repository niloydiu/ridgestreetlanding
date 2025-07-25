import OtherCard1 from "./OtherCard1";
import OtherCard2 from "./OtherCard2";
import SolidBG from "./SolidBG";

const Loan = () => {
  return (
    <section className="w-[80%] mx-auto flex flex-col items-center py-8">
      <h1 className="text-[36px] md:text-[56px] text-green-800 font-extrabold uppercase tracking-[0.04em] leading-[100%] text-center mb-12 font-inter">
        Loan Products
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-center md:items-stretch">
        <SolidBG />
        <OtherCard1 />
        <OtherCard2 />
      </div>
    </section>
  );
};

export default Loan;
