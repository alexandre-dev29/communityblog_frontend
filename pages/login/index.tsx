import { AuthPage } from "@refinedev/mui";

export default function Login() {
  return (
    <AuthPage
      type="login"
      formProps={{
        defaultValues: {
          email: "demo@refine.dev",
          password: "demodemo",
        },
      }}
    />
  );
}

Login.noLayout = true;
