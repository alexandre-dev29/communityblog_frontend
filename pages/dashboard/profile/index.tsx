import React, { useRef, useState } from "react";
import { API_URL } from "../../../src/constants/constants";
import { GetServerSideProps } from "next";
import { authProvider, axiosInstance, dataProvider } from "../../../src/utils";
import { GetOneResponse, useUpdate } from "@refinedev/core";
import { IUser } from "../../../src/interfaces/users";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { CircularProgress } from "@mui/material";
import { Image } from "antd";
import PostCardForDashboard from "@components/dashboard/postCardForDashboard";
import { MailFilled } from "@ant-design/icons";
import { PhoneIncome } from "iconoir-react";

enum ElementNatureEdit {
  Biography,
  PhoneNumber,
  UserTitle,
}

const ProfilePage: React.FC<{ initialData: GetOneResponse<IUser> }> = ({
  initialData,
}) => {
  const {
    avatarImage,
    fullName,
    userTitle,
    biography,
    email,
    phoneNumber,
    id,
  } = initialData.data;
  const { mutate, isLoading, data } = useUpdate();
  const [isDisabled, setIsDisabled] = useState(true);
  const biographyReference = useRef(biography);
  const phoneNumberReference = useRef(phoneNumber);
  const userTitleReference = useRef(userTitle);
  const handleChange = (
    event: ContentEditableEvent,
    elementNature: ElementNatureEdit
  ) => {
    switch (elementNature) {
      case ElementNatureEdit.Biography:
        biographyReference.current = event.target.value;
        break;
      case ElementNatureEdit.PhoneNumber:
        phoneNumberReference.current = event.target.value;
        break;
      case ElementNatureEdit.UserTitle:
        userTitleReference.current = event.target.value;
    }

    if (
      biography === biographyReference.current &&
      phoneNumber == phoneNumberReference.current &&
      userTitle == userTitleReference.current
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };
  const persistInformation = () => {
    mutate(
      {
        resource: "users",
        id: id,
        values: {
          userTitle: userTitleReference.current,
          biography: biographyReference.current,
          phoneNumber: phoneNumberReference.current,
        },
      },
      {
        onSuccess: () => {
          setIsDisabled(true);
        },
      }
    );
  };

  return (
    <div className={"p-4"}>
      <h3 className={"text-2xl font-extrabold"}>Profile</h3>
      <article className={"px-12"}>
        <div
          className={
            "bg-white shadow-md transition-all duration-500 hover:shadow-lg rounded-lg"
          }
        >
          <div className="bg-gradient-to-r from-amber-200 via-rose-200 to-pink-300 mt-4 h-[20vh] rounded-tl-lg rounded-tr-lg"></div>
          <div className="bg-white relative py-8 rounded-lg">
            <div
              className={
                "bg-white w-fit p-2 rounded-full absolute -top-14 left-10"
              }
            >
              <Image
                alt={`${fullName} avatar`}
                src={`${avatarImage}`}
                width={120}
                height={120}
                className={"rounded-full w-auto h-auto"}
              />
            </div>

            <div className={"absolute right-10 "}>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <button
                  disabled={isDisabled}
                  onClick={persistInformation}
                  className={`${
                    isDisabled ? "bg-gray-200" : "bg-myPrimary"
                  }  px-2 py-2 text-white rounded-lg transition-all duration-700 `}
                >
                  Update informations
                </button>
              )}
            </div>

            <div className={"mt-12 px-8 flex flex-col gap-2"}>
              <h5 className="text-xl font-bold text-gray-600 dark:text-white">
                {fullName}
              </h5>
              <ContentEditable
                html={`${userTitleReference.current}`}
                disabled={false}
                onChange={(event) => {
                  handleChange(event, ElementNatureEdit.UserTitle);
                }}
                contentEditable={false}
                style={{
                  padding: "10px",
                  borderColor: "red",
                  outlineColor: "var(--tw-ring-color)",
                  display: "inline",
                  width: "fit-content",
                }}
              />
              <div className={"flex gap-8"}>
                <p className={"text-gray-400"}>
                  <MailFilled className={"mr-4 text-myPrimary"} />
                  {email}
                </p>
                <div className={"flex items-center"}>
                  <PhoneIncome className={"mr-4 text-myPrimary"} />
                  <ContentEditable
                    html={`${phoneNumberReference.current}`}
                    disabled={false}
                    onChange={(event) => {
                      handleChange(event, ElementNatureEdit.PhoneNumber);
                    }}
                    style={{
                      padding: "0 10px",
                      borderColor: "red",
                      outlineColor: "var(--tw-ring-color)",
                    }}
                  />
                </div>
              </div>
              <ContentEditable
                html={`${biographyReference.current}`}
                disabled={false}
                onChange={(event) => {
                  handleChange(event, ElementNatureEdit.Biography);
                }}
                style={{
                  padding: "10px",
                  borderColor: "red",
                  outlineColor: "var(--tw-ring-color)",
                }}
              />
              {/*<p>{biography}</p>*/}
            </div>
          </div>
        </div>
      </article>
      <article className={"mt-8"}>
        <h5 className={"text-center text-gray-500 text-3xl"}>
          Here are your posts
        </h5>

        <div className={"grid grid-cols-4 gap-8 p-8"}>
          {initialData.data.Posts.map((value) => (
            <PostCardForDashboard postData={value} key={value.id} />
          ))}
        </div>
      </article>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { authenticated, redirectTo } = await authProvider.check(context);

  if (!authenticated) {
    return {
      props: {},
      redirect: {
        destination: redirectTo,
        permanent: false,
      },
    };
  }

  const data = await dataProvider(
    API_URL,
    axiosInstance,
    context.req.headers.cookie
  ).custom({
    url: `${API_URL}/users/me`,
    method: "get",
  });
  console.log(data);

  return {
    props: { initialData: data },
  };
};

export default ProfilePage;
