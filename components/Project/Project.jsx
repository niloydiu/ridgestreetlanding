import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section className="w-full bg-[#165831] flex flex-col items-center py-16 px-4">
      {/* Section Title */}
      <h2 className="text-white text-[48px] font-extrabold leading-tight text-left w-full max-w-[1300px] mb-2">
        PAST PROJECTS
      </h2>
      {/* Subtitle */}
      <p className="text-white text-[24px] font-normal mb-10 w-full max-w-[1300px] text-left">
        A Proven Track Record Funding Projects Like These
      </p>

      {/* Cards Row with Arrows */}
      <div className="flex items-center justify-center gap-6 w-full max-w-[1500px] mb-10">
        {/* Left Arrow */}
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition mr-2">
          <svg
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* Cards */}
        <div className="flex gap-8">
          <ProjectCard
            imageSrc="/project.jpg"
            address="4321 Alton Rd, Miami Beach"
            location="Miami, Florida"
            squareFeet="2350"
            garages="4"
            bedrooms="2"
            bathrooms="3"
            loanAmount="$328,000"
            ltv="84.65%"
            rate="11.75%"
            term="12 Months"
            price="$3,45,000"
            forSaleText="For Sale"
          />
          <ProjectCard
            imageSrc="/project.jpg"
            address="AMLI 7th Street Station"
            location="Houston, Texas"
            squareFeet="2350"
            garages="4"
            bedrooms="2"
            bathrooms="3"
            loanAmount="$328,000"
            ltv="84.65%"
            rate="11.75%"
            term="12 Months"
            price="$3,45,000"
            forSaleText="For Sale"
          />
          <ProjectCard
            imageSrc="/project.jpg"
            address="201 South Orange Avenue"
            location="Orlando, Florida"
            squareFeet="2350"
            garages="4"
            bedrooms="2"
            bathrooms="3"
            loanAmount="$328,000"
            ltv="84.65%"
            rate="11.75%"
            term="12 Months"
            price="$3,45,000"
            forSaleText="For Sale"
          />
        </div>
        {/* Right Arrow */}
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition ml-2">
          <svg
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Get Terms Button */}
      <button className="mt-4 bg-white text-[#165831] font-semibold text-[22px] rounded-lg px-10 py-4 flex items-center gap-3 shadow-md hover:bg-gray-100 transition">
        GET TERMS FOR YOUR PROJECT
        <span className="inline-block">
          <svg
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#165831"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </button>
    </section>
  );
};

export default Project;
