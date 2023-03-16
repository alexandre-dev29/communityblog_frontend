import { GetServerSideProps } from "next";
import { authProvider } from "src/utils/authProvider";

export default function CategoryList() {
  return <h1>dsfsdf</h1>;
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
