import { Handshake } from "lucide-react";

const InterestCard = (props) => {
  return (
    <div>
      <div className="max-w-sm p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 text-center">
        <div className="flex justify-center mb-4">
          <div
            className="bg-green-100 p-4"
            style={{ clipPath: "polygon(25% 0%, 100% 25%, 75% 100%, 0% 75%)" }}
          >
            <Handshake className=" text-green-700" size={32} strokeWidth={2} />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-green-700 mb-2">
          {props.title}
        </h2>
        <p className="text-gray-700 mb-6">{props.description}</p>
        <button className="px-6 py-2 border border-green-700 text-green-700 font-semibold rounded-lg hover:bg-green-50 transition duration-200">
          Find a home →
        </button>
      </div>
    </div>
  );
};

export default InterestCard;
