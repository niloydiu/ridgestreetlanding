import { texas } from "@/assets/images/exporter";
import { Inter, Raleway } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["500", "800"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["700"] });

const Texas = () => {
  return (
    <div
      className="w-[440px] h-[560px] border-2 border-solid relative overflow-hidden"
      style={{
        borderTopRightRadius: "60px",
        borderBottomLeftRadius: "60px",
      }}
    >
      {/* Background Image */}
      <div className="relative h-full">
        <Image
          src={texas}
          alt="Texas Property"
          fill
          className="object-cover"
          priority
        />
        {/* Green Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(147.38deg, rgba(96, 230, 151, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%)",
          }}
        ></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center px-8">
        {/* Main Content Container with better vertical distribution */}
        <div className="flex flex-col h-full justify-between py-20">
          {/* Top Section - Moved down a bit */}
          <div className="text-center mt-24">
            <h2
              className={`${inter.className} text-[56px] font-extrabold tracking-[0.04em] text-white leading-[100%] mb-4`}
            >
              Texas
            </h2>
            <p
              className={`${inter.className} text-[22px] font-medium tracking-[0.01em] text-white leading-[100%]`}
            >
              Hard Money Loans | DSCR Loans
            </p>
          </div>

          {/* Bottom Section - Button moved up slightly from bottom */}
          <div className="flex justify-center mb-20">
            <div
              className={`
                w-[300px] h-[70px] border-2 border-white rounded-[80px] flex items-center justify-center
                backdrop-blur-sm bg-white/10
              `}
            >
              <button
                className={`${raleway.className} text-[20px] font-bold leading-[34px] uppercase text-white text-center`}
              >
                VIEW ALL LOCATIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Texas;
