import { CheckCircle, Info } from "lucide-react";
import Image from "next/image";

const SolidBG = () => {
  return (
    <div className="w-[447px] h-[563.57px] flex flex-col items-center justify-start gap-5 rounded-[20px] p-10 bg-[#165831] opacity-100 shadow-[0_10px_50px_0_rgba(0,0,0,0.4)] relative">
      <div className="bg-white rounded-[24px] p-8 mb-8 flex items-center justify-center">
        <Image
          src="/assets/images/home.png"
          alt="Fix and Flip"
          width={96}
          height={96}
        />
      </div>
      <h2 className="text-white font-inter font-semibold text-[32px] leading-[100%] text-center m-0">
        Fix and Flip
      </h2>
      <div className="text-white text-[20px] font-inter mb-6 mt-2 text-center">
        Funding For Rehab + Purchase
      </div>
      <ul className="text-white font-inter text-[16px] font-medium leading-[100%] list-none p-0 m-0 mb-6 w-full">
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
      <div className="flex items-center text-white font-inter text-[16px] font-semibold underline underline-offset-0 decoration-solid mb-8">
        <Info className="w-5 h-5 mr-2" strokeWidth={2.2} />
        <a
          href="#"
          className="text-white font-inter text-[16px] font-semibold underline underline-offset-0 decoration-solid"
        >
          Learn More
        </a>
      </div>
      <div className="w-full flex justify-center mt-8">
        <button className="w-[370px] h-[64px] bg-white text-[#165831] font-inter font-semibold text-[19.43px] leading-[100%] uppercase border-none rounded-[12px] flex items-center justify-between px-8 shadow-[0_2px_8px_0_rgba(24,91,55,0.10)] transition hover:bg-gray-100">
          <span>GET APPROVED ONLINE</span>
          <span
            className="ml-4 text-[32px] bg-[#165831] text-white rounded-[8px] flex items-center justify-center w-[48px] h-[48px] border-2 border-[#165831]"
            style={{ boxSizing: "border-box" }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SolidBG;
