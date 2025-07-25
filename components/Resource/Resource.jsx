import ResourceCard from "./ResourceCard";

const resources = [
  {
    image: "/resource1.jpg",
    date: "May 9, 2024",
    title: "Investor’s Guide To Real Estate Wholetailing",
    description:
      "Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.",
  },
  {
    image: "/resource2.jpg",
    date: "May 9, 2024",
    title: "Investor’s Guide To Real Estate Wholetailing",
    description:
      "Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.",
  },
  {
    image: "/resource3.jpg",
    date: "May 9, 2024",
    title: "Investor’s Guide To Real Estate Wholetailing",
    description:
      "Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.",
  },
];

const Resource = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-white">
      {/* Section Title and Button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-[1400px] mb-12 gap-6">
        <h2 className="text-green-800 text-[48px] font-extrabold leading-tight uppercase tracking-wide text-left">
          OTHER RESOURCES
          <br />
          YOU’LL LIKE
        </h2>
        <button className="bg-green-800 text-white text-[20px] font-semibold rounded-full px-10 py-3 shadow-md hover:bg-green-900 transition">
          VIEW MORE
        </button>
      </div>
      {/* Cards Row */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1400px] justify-center items-stretch">
        {resources.map((resource, idx) => (
          <ResourceCard key={idx} {...resource} />
        ))}
      </div>
    </section>
  );
};

export default Resource;
