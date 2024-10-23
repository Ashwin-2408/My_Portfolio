"use client";

const Skillcard = ({ title, description }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <div>{title}</div>
        <div>{description}</div>
      </div>

      <div></div>
    </div>
  );
};

export default Skillcard;
