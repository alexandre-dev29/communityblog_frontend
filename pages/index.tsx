import { bgback1 } from "src/assets";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        priority
        src={bgback1}
        loading={"eager"}
        className={
          "absolute top-1/3 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
        }
        height={32}
        width={32}
        alt="Follow us on Twitter"
      />
    </div>
  );
}
Home.noLayout = true;
