import { client1 } from "@/assets/images/exporter";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ClientReviewCard = ({
  imageSrc = "/reviewer.jpg",
  name = "Name Here",
  subtitle = "What an amazing experience",
  review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus.",
}) => {
  return (
    <div
      className={`${inter.className} relative w-[335px] h-[403px] pt-[80px] pr-[22px] pb-[30px] pl-[22px] rounded-[40px] mt-[70px]`}
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(145.78deg, rgba(255, 255, 255, 0.2) -11.63%, rgba(0, 0, 0, 0.05) 43.68%, rgba(255, 255, 255, 0.8) 107.31%)",
        backdropFilter: "blur(40px)",
        boxShadow: "0px 0px 30px 0px #0000001A",
        background: "rgba(255, 255, 255, 0.5)",
      }}
    >
      {/* Circular Image - Half inside half outside the card */}
      <div className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
          src={client1}
          alt={name}
          width={140}
          height={140}
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center text-center">
        {/* Name */}
        <h3 className="font-semibold text-[24px] leading-[100%] text-[#18532C] mb-3">
          {name}
        </h3>

        {/* Subtitle */}
        <p className="font-medium text-[18px] leading-[100%] text-[#18532C] mb-6">
          {subtitle}
        </p>

        {/* Review Text */}
        <p className="font-normal text-[14px] leading-[170%] text-[#333333]">
          {review}
        </p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
