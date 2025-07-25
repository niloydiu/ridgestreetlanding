/**
 * A reusable property card component displaying property details and financing information
 *
 * @param {import('./ProjectCardTypes').ProjectCardProps} props - Component props
 * @returns {JSX.Element} ProjectCard component
 */
const ProjectCard = ({
  imageSrc = "/project.jpg",
  address = "4321 Alton Rd, Miami Beach",
  location = "Miami, Florida",
  squareFeet = "2350",
  garages = "4",
  bedrooms = "2",
  bathrooms = "3",
  loanAmount = "$328,000",
  ltv = "84.65%",
  rate = "11.75%",
  term = "12 Months",
  price = "$3,45,000",
  forSaleText = "For Sale",
}) => {
  return (
    <div className="w-[447px] h-[713px] flex flex-col rounded-[14px] shadow-md overflow-hidden">
      {/* Image section with For Sale label */}
      <div className="relative">
        <img
          src={imageSrc}
          alt={`Property at ${address}`}
          className="w-full h-[309.8px] object-cover rounded-t-[14px]"
        />
        <div className="absolute top-[25.72px] left-[24.49px]">
          <div className="w-[91.85px] h-[40.41px] bg-green-800 rounded-[4.87px] flex items-center justify-center">
            <span className="text-white font-[Inter] text-[17.15px] font-medium leading-[26.94px]">
              {forSaleText}
            </span>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col p-6 gap-[12.17px] bg-white flex-grow">
        {/* Address */}
        <h3 className="text-[21px] font-semibold text-gray-800 text-center">
          {address}
        </h3>

        {/* Location */}
        <div className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600 font-[Inter] text-[14.61px]">
            {location}
          </span>
        </div>

        <hr className="my-2" />

        {/* Property Features */}
        <div className="grid grid-cols-2 gap-y-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span className="font-[Inter] text-[14.61px] text-gray-700">
              {squareFeet} Square Feet
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-5h6a1 1 0 001-1V5a1 1 0 00-1-1H3zM2 5a2 2 0 012-2h13a2 2 0 012 2v5a2 2 0 01-2 2h-6a1 1 0 00-1 1v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
            </svg>
            <span className="font-[Inter] text-[14.61px] text-gray-700">
              {garages} Garages
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
            <span className="font-[Inter] text-[14.61px] text-gray-700">
              {bedrooms} Bedrooms
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011-1h8a1 1 0 011 1v1h1a2 2 0 012 2v3a2 2 0 01-1.85 1.995L16 10v5a2 2 0 01-1.85 1.995L14 17H6a2 2 0 01-1.995-1.85L4 15v-5a2 2 0 01-1.85-1.995L2 8V5a2 2 0 011.85-1.995L4 3h1V2zm9 9a1 1 0 01-1 1H7a1 1 0 01-1-1V4h8v7z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-[Inter] text-[14.61px] text-gray-700">
              {bathrooms} Bathrooms
            </span>
          </div>
        </div>

        <hr className="my-2" />

        {/* Loan Details */}
        <div className="grid grid-cols-2 gap-y-2">
          <div className="flex items-center gap-1">
            <span className="font-[Inter] text-[14.61px] text-gray-700">
              • Loan Amount:{" "}
            </span>
            <span className="font-[Inter] text-[14.61px] font-medium text-gray-800">
              {loanAmount}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-[Inter] text-[14.61px] text-gray-700">
              • LTV:{" "}
            </span>
            <span className="font-[Inter] text-[14.61px] font-medium text-gray-800">
              {ltv}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-[Inter] text-[14.61px] text-gray-700">
              • Rate:{" "}
            </span>
            <span className="font-[Inter] text-[14.61px] font-medium text-gray-800">
              {rate}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-[Inter] text-[14.61px] text-gray-700">
              • Term:{" "}
            </span>
            <span className="font-[Inter] text-[14.61px] font-medium text-gray-800">
              {term}
            </span>
          </div>
        </div>
      </div>

      {/* Price section */}
      <div
        className="w-full h-[67.36px] bg-green-radial flex items-center justify-center rounded-b-[14px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #165831 0%, #0D4022 100%)",
        }}
      >
        <span className="text-white font-bold text-[21.91px] leading-[36.52px]">
          {price}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
