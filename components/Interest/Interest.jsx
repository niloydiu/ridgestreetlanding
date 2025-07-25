import { BadgeDollarSign, Handshake, PhoneCall } from "lucide-react";
import InterestCard from "./InterestCard";

const Interest = () => {
  return (
    <section className="py-16 px-4 md:px-0 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-4">
        INTERESTED IN WORKING WITH US?
      </h2>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl">
        We work with real estate investors across the country every day. How can
        we help?
      </p>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <InterestCard
          icon={
            <Handshake className="text-green-700" size={32} strokeWidth={2} />
          }
          title="Active Deal"
          description="I have an active deal and would like a Term Sheet"
        />
        <InterestCard
          icon={
            <BadgeDollarSign
              className="text-green-700"
              size={32}
              strokeWidth={2}
            />
          }
          title="Pre-Approval"
          description="I'd like to get pre-approved so I can find my next deal."
          filled
        />
        <InterestCard
          icon={
            <PhoneCall className="text-green-700" size={32} strokeWidth={2} />
          }
          title="Schedule A Call"
          description="I'd like to schedule a call."
        />
      </div>
    </section>
  );
};

export default Interest;
