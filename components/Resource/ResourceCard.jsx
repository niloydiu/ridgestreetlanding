const ResourceCard = ({ image, date, title, description }) => {
  return (
    <div className="w-[460px] h-[726px] border border-gray-200 rounded-[40px] p-8 bg-white flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        className="w-[396px] h-[318px] object-cover rounded-[16px] mb-6"
      />
      <p className="text-[18px] italic font-normal leading-[100%] text-gray-600 mb-4 text-left w-full">
        {date}
      </p>
      <h2 className="text-[28px] font-bold leading-[140%] text-green-800 mb-4 text-left w-full">
        {title}
      </h2>
      <p className="text-[18px] font-normal leading-[160%] text-gray-700 text-left w-full">
        {description}
      </p>
    </div>
  );
};

export default ResourceCard;
