import { AntdEditInferencer } from "@refinedev/inferencer/antd";
import { GetServerSideProps } from "next";
import { authProvider } from "src/utils/authProvider";

export default function ProductEdit() {
  return <AntdEditInferencer />;
}

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

  return {
    props: {},
  };
};
