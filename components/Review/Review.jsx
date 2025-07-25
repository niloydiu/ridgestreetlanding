import { client1, client2, client3, client4 } from "@/assets/images/exporter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ClientReviewCard from "./ClientReviewCard";

const Review = () => {
  const reviews = [
    {
      imageSrc: client1,
      name: "John Doe",
      subtitle: "Great Service!",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus.",
    },
    {
      imageSrc: client2,
      name: "Jane Smith",
      subtitle: "Quick Approval",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus.",
      imageClassName: "object-cover object-top bg-white",
    },
    {
      imageSrc: client3,
      name: "Michael Lee",
      subtitle: "Quick Approval",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus.",
      imageClassName: "object-cover object-top bg-white",
    },
    {
      imageSrc: client4,
      name: "Emily Clark",
      subtitle: "Quick Approval",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus.",
    },
  ];

  return (
    <div className="relative flex flex-col w-full py-10 overflow-hidden">
      {/* Vertical split background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="w-full h-1/2 bg-white" />
        <div className="w-full h-1/2 bg-green-800" />
      </div>

      <div className="relative z-10">
        <h2 className="font-inter font-extrabold not-italic text-[56px] leading-[100%] tracking-[0.04em] text-center uppercase align-middle text-green-800">
          Ridge Street Client Reviews
        </h2>
        <div className="flex items-center justify-center gap-4 mt-12 w-full">
          {/* Left Arrow Button */}
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border border-green-800 text-green-800 hover:bg-green-100 transition">
            <ArrowLeft className="w-7 h-7" strokeWidth={2.5} />
          </button>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {reviews.map((review, idx) => (
              <ClientReviewCard key={idx} {...review} />
            ))}
          </div>
          {/* Right Arrow Button */}
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border border-green-800 text-green-800 hover:bg-green-100 transition">
            <ArrowRight className="w-7 h-7" strokeWidth={2.5} />
          </button>
        </div>
        <div className="flex justify-center mt-12">
          <button
            className="relative flex items-center w-full max-w-[400px] h-[72px] bg-white rounded-[16px] shadow-lg overflow-hidden pr-0 pl-8 border-none"
            style={{ boxShadow: "0 4px 24px 0 rgba(24, 91, 55, 0.18)" }}
          >
            <span className="text-green-800 font-inter font-semibold text-[20px] leading-[100%] tracking-[0.04em] flex-1 text-left">
              GET APPROVED ONLINE
            </span>
            <span className="flex items-center h-full">
              <span
                className="flex items-center justify-center h-full px-8 bg-green-800"
                style={{
                  borderTopRightRadius: 16,
                  borderBottomRightRadius: 16,
                }}
              >
                <ArrowRight
                  className="w-10 h-10 text-white"
                  strokeWidth={2.5}
                />
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
