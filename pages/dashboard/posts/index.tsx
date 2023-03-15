import { GetServerSideProps } from "next";
import { authProvider } from "src/utils/authProvider";

export default function ProductList() {
  return (
    <p className={"bg-myPrimary"} style={{ color: "var(--myPrimary)" }}>
      Here is the posts
    </p>
  );
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
