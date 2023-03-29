import { Modal } from "antd";
import { useRouter } from "next/router";
import { IMutationCreateUserArgs } from "../../../../commons/types/generated/types";
import { UseMutationCreateUser } from "../mutation/UseMutationCreateUser";

interface IuseSignUp {
  onClickSignUp: (data: IMutationCreateUserArgs) => Promise<void>;
}

export const useSignUp = (): IuseSignUp => {
  const [createUser] = UseMutationCreateUser();
  const router = useRouter();
  const onClickSignUp = async (
    data: IMutationCreateUserArgs
  ): Promise<void> => {
    try {
      void createUser({
        variables: {
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
        },
      });
      // 회원가입 성공 Modal
      void router.push(`/login`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return {
    onClickSignUp,
  };
};
