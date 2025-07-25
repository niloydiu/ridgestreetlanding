import { building } from "@/assets/images/exporter";
import { ArrowRight, CheckCircle, Info } from "lucide-react";
import Image from "next/image";

const OtherCard2 = () => {
  return (
    <div className="w-[447px] flex flex-col items-center justify-between rounded-[20px] p-10 pt-5 pb-10 bg-white opacity-100 shadow-[0_10px_50px_0_rgba(0,0,0,0.4)] relative overflow-hidden">
      {/* Top angled background */}
      <div
        className="absolute top-0 left-0 w-[489px] h-[40px] bg-[#165831] opacity-100 z-0"
        style={{
          transform: "rotate(-5deg)",
          transformOrigin: "top left",
          marginTop: "-15px",
          marginLeft: "-20px",
        }}
      />

      {/* Bottom angled background */}
      <div
        className="absolute bottom-0 right-0 w-[489px] h-[40px] bg-[#165831] opacity-100 z-0"
        style={{
          transform: "rotate(-5deg)",
          transformOrigin: "bottom right",
          marginBottom: "-5px",
          marginRight: "-20px",
        }}
      />

      <div className="bg-[#165831] rounded-[24px] p-8 mb-8 flex items-center justify-center z-10">
        <Image
          src={building}
          alt="Ground Up Construction"
          width={80}
          height={80}
        />
      </div>

      <h2 className="text-[#165831] font-inter font-semibold text-[32px] leading-[100%] tracking-[0px] text-center m-0 z-10">
        Ground Up Construction
      </h2>

      <div className="text-[#165831] text-[16px] font-inter font-medium leading-[100%] tracking-[0px] mb-7 mt-2 text-center z-10">
        Ground Up Construction loans in Florida and Texas
      </div>

      <ul className="text-[#165831] font-inter text-[16px] font-medium leading-[100%] tracking-[0px] list-none p-0 m-0 mb-7 w-full z-10">
        <li className="flex items-center mb-3">
          <CheckCircle
            className="text-[#165831] mr-3 w-6 h-6"
            strokeWidth={2.2}
          />
          Up to $3,500,000
        </li>
        <li className="flex items-center mb-3">
          <CheckCircle
            className="text-[#165831] mr-3 w-6 h-6"
            strokeWidth={2.2}
          />
          Interest Rate 11.25%-13.25%
        </li>
        <li className="flex items-center mb-3">
          <CheckCircle
            className="text-[#165831] mr-3 w-6 h-6"
            strokeWidth={2.2}
          />
          Origination Fee From 1.5%
        </li>
        <li className="flex items-center">
          <CheckCircle
            className="text-[#165831] mr-3 w-6 h-6"
            strokeWidth={2.2}
          />
          Up to 80% of LTC
        </li>
      </ul>

      <div className="flex items-center text-[#165831] font-inter text-[16px] font-semibold leading-[100%] tracking-[0px] underline underline-offset-0 decoration-solid mb-8 z-10">
        <Info className="w-5 h-5 mr-2" strokeWidth={2.2} />
        <a
          href="#"
          className="text-[#165831] font-inter text-[16px] font-semibold leading-[100%] tracking-[0px] underline underline-offset-0 decoration-solid"
        >
          Learn More
        </a>
      </div>

      <div className="w-full flex justify-center mt-auto z-10">
        <button className="w-[370px] h-[64px] bg-[#165831] text-white font-inter font-semibold text-[19.43px] leading-[100%] tracking-[0px] uppercase border-none rounded-[12px] flex items-center justify-between px-8 shadow-[0_2px_8px_0_rgba(24,91,55,0.10)] transition hover:bg-[#124526]">
          <span>GET APPROVED ONLINE</span>
          <div className="flex items-center justify-center ml-4">
            <div className="bg-white rounded-[8px] flex items-center justify-center w-[48px] h-[48px]">
              <ArrowRight
                className="text-[#165831] w-7 h-7"
                strokeWidth={2.5}
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default OtherCard2;
