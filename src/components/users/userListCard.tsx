import React from "react";
import { Card } from "flowbite-react";
import { IUser } from "../../interfaces/users";
import Image from "next/image";

const UserListCard = ({ userInformation }: { userInformation: IUser }) => {
  const { fullName, email, avatarImage, biography, userTitle, role } =
    userInformation;
  return (
    <Card className={"relative"}>
      <p
        className={`absolute top-4 left-2 px-4 py-2 font-bold rounded-lg  text-white ${
          role === "Admin" ? "bg-green-400" : "bg-blue-600"
        }`}
      >
        {role}
      </p>
      <div className="flex flex-col items-center max-h-[350px] gap-2">
        <Image
          className=" rounded-full shadow-lg w-auto h-auto"
          src={`${avatarImage}`}
          alt={`${fullName} image`}
          width={70}
          height={70}
        />
        <h5 className="text-xl font-bold text-gray-600 dark:text-white">
          {fullName}
        </h5>
        <p className={"flex flex-col items-center"}>
          <span className="text-sm text-gray-500 text-md dark:text-gray-400">
            {userTitle}
          </span>
          <span className="text-sm text-gray-500 text-md dark:text-gray-400 text-myPrimary">
            {email}
          </span>
        </p>
        <p className={"text-sm text-center font-light "}>{biography}</p>
      </div>
    </Card>
  );
};

export default UserListCard;
