import { IPost } from "../../interfaces/posts";
import { axiosInstance } from "../../utils";
import { API_URL, FRONT_URL } from "../../constants/constants";
import {
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { Popover } from "antd";
import { LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { Send } from "react-iconly";

function ShareBar({ postData }: { postData: IPost }) {
  const addShareCount = () => {
    axiosInstance.post(API_URL);
  };
  return (
    <div
      className={
        " flex border-t-2 border-b-2 border-slate-200 py-2 justify-end gap-4"
      }
    >
      <LinkedinShareButton
        title={`${postData.postTitle}`}
        summary={`${postData.postDescription}`}
        source={`${FRONT_URL}/post/${postData.postSlug}`}
        url={`${FRONT_URL}/post/${postData.postSlug}`}
        onShareWindowClose={addShareCount}
      >
        <Popover content={"Share on linkedin"}>
          <LinkedinOutlined
            className={"text-2xl text-gdgBlue cursor-pointer"}
          />
        </Popover>
      </LinkedinShareButton>
      <TwitterShareButton
        title={`${postData.postTitle}`}
        via={`${FRONT_URL}/post/${postData.postSlug}`}
        hashtags={postData.Tags.map((value) => value.tagName)}
        related={[]}
        url={`${FRONT_URL}/post/${postData.postSlug}`}
      >
        <Popover content={"Share on twitter"}>
          <TwitterOutlined className={"text-2xl text-gdgBlue cursor-pointer"} />
        </Popover>
      </TwitterShareButton>
      <TelegramShareButton
        url={`${FRONT_URL}/post/${postData.postSlug}`}
        title={`${postData.postTitle}`}
      >
        <Popover content={"Share on telegram"}>
          <Send
            style={{ cursor: "pointer" }}
            primaryColor={"rgb(66,133,246)"}
            size={28}
            set="bold"
          />
        </Popover>
      </TelegramShareButton>

      <WhatsappShareButton
        url={`${FRONT_URL}/post/${postData.postSlug}`}
        title={`${postData.postTitle}`}
      >
        <Popover content={"Share on facebook"}>
          <WhatsappIcon className={"cursor-pointer"} size={28} />
        </Popover>
      </WhatsappShareButton>
    </div>
  );
}

export default ShareBar;
