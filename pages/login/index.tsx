import CustomInput from "@components/common/customInput";
import DefaultButton from "@components/common/defaultButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "@refinedev/core";

type LoginFormValues = {
  email: string;
  password: string;
};
export default function Login() {
  const { mutate: login, isLoading } = useLogin<LoginFormValues>({});
  const { register, handleSubmit, reset } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = async ({
    email,
    password,
  }) => {
    login({ email, password });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Sign in to your account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <CustomInput
                type={"email"}
                name={"email"}
                isRequired={true}
                labelText={"Your email"}
                placeholder={"ex. axel@gmail.com"}
                formRegistration={{ ...register("email", { required: true }) }}
              />
              <CustomInput
                type={"password"}
                name={"password"}
                isRequired={true}
                labelText={"Your Password"}
                placeholder={"••••••••"}
                formRegistration={{
                  ...register("password", { required: true }),
                }}
              />
              <div className={"flex justify-end"}>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-right"
                >
                  Forgot password?
                </a>
              </div>
              <DefaultButton
                isFull={true}
                text={"Sign In"}
                type={"submit"}
                isLoading={isLoading}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

Login.noLayout = true;
