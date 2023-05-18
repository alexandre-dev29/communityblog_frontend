import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CustomIMainImage = ({
  postImageSrc,
  postTitle,
  blurImage,
  customHeight,
  customWidth,
  hasBlurImage,
  customClassName,
}: {
  postTitle: string;
  postImageSrc: string;
  blurImage?: any;
  hasBlurImage: boolean;
  customWidth?: number | `${number}` | undefined;
  customHeight?: number | `${number}` | undefined;
  customClassName?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ModalImageElement
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        imageSrc={postImageSrc}
        hasBlurImage={hasBlurImage}
        blurData={blurImage}
      />
      <Image
        width={customWidth ?? 800}
        height={customHeight ?? 350}
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={`${postTitle} image`}
        src={postImageSrc}
        placeholder={hasBlurImage ? "blur" : "empty"}
        blurDataURL={blurImage}
        style={{ transform: "translate3d(0, 0, 0)" }}
        className={`${customClassName} transition-all brightness-100 hover:brightness-90 cursor-pointer`}
        onClick={() => setIsModalOpen(true)}
      />
    </>
  );
};

export function BlurImage({ src, ...props }: { src: string; props: any }) {
  const [isLoading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ModalImageElement
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        imageSrc={src}
        hasBlurImage={false}
      />
      <Image
        {...props}
        height={530}
        width={1879}
        priority={true}
        style={{ borderRadius: "10px", transform: "translate3d(0, 0, 0)" }}
        src={src}
        alt={"article image"}
        className={cn(
          "duration-700 ease-in-out transition-all brightness-100 hover:brightness-90 cursor-pointer",
          isLoading
            ? "grayscale blur-2xl scale-105"
            : "grayscale-0 blur-0 scale-100"
        )}
        onClick={() => setIsModalOpen(true)}
        onLoadingComplete={() => setLoading(false)}
      />
    </>
  );
}

const ModalImageElement = ({
  setIsModalOpen,
  isOpen,
  imageSrc,
  blurData,
  hasBlurImage,
}: {
  isOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageSrc: string;
  hasBlurImage: boolean;
  blurData?: any;
}) => {
  const [isLoading, setLoading] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      centered={true}
      footer={null}
      className={"w-[90vw] md:w-[60vw] p-0"}
    >
      <Image
        height={530}
        width={1879}
        priority={true}
        placeholder={hasBlurImage ? "blur" : "empty"}
        blurDataURL={blurData}
        style={{ borderRadius: "10px", transform: "translate3d(0, 0, 0)" }}
        src={imageSrc}
        alt={"article image"}
        className={cn(
          "duration-700 ease-in-out transition-all brightness-100 hover:brightness-90 cursor-pointer",
          !hasBlurImage
            ? isLoading
              ? "grayscale blur-2xl scale-105"
              : "grayscale-0 blur-0 scale-100"
            : ""
        )}
        onClick={() => setIsModalOpen(true)}
        onLoadingComplete={() => setLoading(false)}
      />
    </Modal>
  );
};

export default CustomIMainImage;
