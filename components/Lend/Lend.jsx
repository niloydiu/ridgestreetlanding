import States from "./States";
import Usa from "./Usa";

const Lend = () => {
  return (
    <div>
      <section
        className="w-full py-12"
        style={{
          background:
            "radial-gradient(55.29% 55.29% at 50% 50%, #499668 0%, #165831 100%)",
        }}
      >
        <div className="max-w-[1000px] mx-auto px-4">
          <h2 className="text-white text-5xl font-extrabold leading-[100%] mb-6 uppercase">
            WHERE WE LEND
          </h2>
          <p className="text-white text-[20px] font-normal mb-2">
            Ridge Street provides hard money loans to real estate investors in
            35 states.
          </p>
          <p className="text-white text-[28px] font-normal mb-10">
            We focus our efforts in <span className="font-bold">Texas</span> and{" "}
            <span className="font-bold">Florida</span>.
          </p>
          <Usa />
          <States />
        </div>
      </section>
    </div>
  );
};

export default Lend;
