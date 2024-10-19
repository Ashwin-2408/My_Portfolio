import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div></div>
      <div className="pt-5">
        <Image
          src="/Images/download.jpeg"
          alt="Hero Image"
          width={350}
          height={350}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
