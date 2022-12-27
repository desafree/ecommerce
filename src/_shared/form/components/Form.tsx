import React from "react";
import { FormProvider } from "react-hook-form";
import { UseFormReturn } from "../hooks";

type FormProps<T extends Record<string, any>> = {
  children: React.ReactNode;
  onSubmit: (data: T) => void;
  formContextValue: UseFormReturn<T>;
  formRef: React.ForwardedRef<HTMLFormElement>;
};

function Form<T extends Record<string, any>>(props: FormProps<T>) {
  return (
    <FormProvider {...props.formContextValue}>
      <form
        onSubmit={props.formContextValue.handleSubmit(props.onSubmit)}
        ref={props.formRef}
      >
        {props.children}
      </form>
    </FormProvider>
  );
}

export default Form;
