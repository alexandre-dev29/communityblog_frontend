import React from "react";

export interface IUpperCardProps {
  cardIcon: any;
  cardNature: string;
  cardNumberToDisplay: string;
  cardIconBgColor: string;
}

const UpperCards = ({
  cardNature,
  cardIcon,
  cardNumberToDisplay,
  cardIconBgColor,
}: IUpperCardProps) => {
  return (
    <div
      className={
        "bg-white p-4 shadow-sm transition-all duration-500 hover:shadow-md flex rounded-md "
      }
    >
      <div
        className={`w-1/4 ${cardIconBgColor} flex items-center justify-center text-center rounded-lg`}
      >
        {cardIcon}
      </div>
      <div className={"ml-4"}>
        <p className={"font-extrabold text-2xl text-gray-800"}>
          {cardNumberToDisplay}
        </p>
        <p className={"mt-4 text-gray-400 font-bold"}>{cardNature}</p>
      </div>
    </div>
  );
};

export default UpperCards;
