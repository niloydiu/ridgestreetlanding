import { usa } from "@/assets/images/exporter";
import Image from "next/image";

const Usa = () => {
  return (
    <div className="max-w-[1080px] mx-auto my-10">
      <Image src={usa} alt="usa" width={900} height={600} />
    </div>
  );
};

export default Usa;
