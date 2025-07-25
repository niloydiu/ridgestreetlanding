import { home } from "@/assets/images/exporter";
import { ArrowRight, CheckCircle, Info } from "lucide-react";
import Image from "next/image";

const SolidBG = () => {
  return (
    <div className="w-[447px] flex flex-col items-center justify-between rounded-[20px] p-6 pt-5 pb-8 bg-[#165831] opacity-100 shadow-[0_10px_50px_0_rgba(0,0,0,0.4)] relative">
      <div className="bg-white rounded-[24px] p-8 mb-8 flex items-center justify-center">
        <Image
          src={home}
          alt="Fix and Flip"
          width={80}
          height={80}
          className="mt-[20px] ml-[19.65px]"
        />
      </div>
      <h2 className="text-white font-inter font-semibold text-[32px] leading-[100%] tracking-[0px] text-center m-0">
        Fix and Flip
      </h2>
      <div className="text-white text-[16px] font-inter font-medium leading-[100%] tracking-[0px] mb-7 mt-2 text-center">
        Funding For Rehab + Purchase
      </div>
      <ul className="text-white font-inter text-[16px] font-medium leading-[100%] tracking-[0px] list-none p-0 m-0 mb-7 w-full">
        <li className="flex items-center mb-3">
          <CheckCircle className="text-white mr-3 w-6 h-6" strokeWidth={2.2} />
          $50,000 up to $3,000,000
        </li>
        <li className="flex items-center mb-3">
          <CheckCircle className="text-white mr-3 w-6 h-6" strokeWidth={2.2} />
          Interest Rate 10.5%-12.99%
        </li>
        <li className="flex items-center mb-3">
          <CheckCircle className="text-white mr-3 w-6 h-6" strokeWidth={2.2} />
          Origination Fee From 1.5%
        </li>
        <li className="flex items-center">
          <CheckCircle className="text-white mr-3 w-6 h-6" strokeWidth={2.2} />
          Up to 85% of Purchase and 100% of Rehab
        </li>
      </ul>
      <div className="flex items-center text-white font-inter text-[16px] font-semibold leading-[100%] tracking-[0px] underline underline-offset-0 decoration-solid mb-8">
        <Info className="w-5 h-5 mr-2" strokeWidth={2.2} />
        <a
          href="#"
          className="text-white font-inter text-[16px] font-semibold leading-[100%] tracking-[0px] underline underline-offset-0 decoration-solid"
        >
          Learn More
        </a>
      </div>
      <div className="w-full flex justify-center mt-auto">
        <button className="w-full max-w-[240px] h-[52px] bg-white text-[#165831] font-inter font-semibold text-[17px] leading-[100%] tracking-[0px] uppercase border-none rounded-[12px] flex items-center justify-between px-6 shadow-[0_2px_8px_0_rgba(24,91,55,0.10)] transition hover:bg-gray-100">
          <span>GET APPROVED ONLINE</span>
          <span
            className="ml-4 text-[24px] bg-[#165831] text-white rounded-[8px] flex items-center justify-center w-[36px] h-[36px] border-2 border-[#165831]"
            style={{ boxSizing: "border-box" }}
          >
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SolidBG;
