import React from "react";
import { useGetIdentity, useIsAuthenticated, useLogout } from "@refinedev/core";
import { Avatar, Dropdown } from "flowbite-react";
import Link from "next/link";
import { IUser } from "../../interfaces/users";
import { gdgLogo } from "src/assets";
import Image from "next/image";

function NavBarSimple() {
  const { isLoading } = useIsAuthenticated();
  const { data: userData } = useGetIdentity<IUser>();
  const { mutate: mutateLogout } = useLogout();

  return (
    <nav
      className={
        "py-2 px-4 md:px-8  w-full flex justify-between items-center bg-white"
      }
    >
      <div className={"relative w-[30px] h-[30px]"}>
        <Link href={"/"}>
          <Image src={gdgLogo} alt={"logo GDG"} fill={true} priority={true} />
        </Link>
      </div>
      {isLoading ? (
        <p>loading</p>
      ) : userData ? (
        <Dropdown
          label={
            <Avatar
              rounded={true}
              img={(props) => (
                <Image
                  width={40}
                  height={40}
                  referrerPolicy="no-referrer"
                  className={"rounded-full "}
                  src={`${userData?.avatarImage}`}
                  alt={`${userData?.fullName} profile image`}
                />
              )}
            />
          }
          arrowIcon={false}
          inline={true}
          placement={"bottom"}
        >
          <Dropdown.Header>
            <span className="block text-sm">{userData.fullName}</span>
            <span className="block truncate text-sm font-medium">
              {userData.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link href={"/dashboard"}>Dashboard</Link>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              mutateLogout();
            }}
          >
            Sign out
          </Dropdown.Item>
        </Dropdown>
      ) : (
        <Link
          href={"/login"}
          className={"bg-gdgBlue text-white px-4 py-2 rounded-lg"}
        >
          Login
        </Link>
      )}
    </nav>
  );
}

const SimpleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"relative"}>
      <NavBarSimple />
      {children}
    </div>
  );
};

export default SimpleLayout;
