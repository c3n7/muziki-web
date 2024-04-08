"use client";

import Button from "@/components/action/button";
import { TextInput } from "@/components/input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SignInFormValues } from "../lib/types";
import { authenticate } from "../lib/actions";

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required("This field is required"),
  password: Yup.string().required("This field is required"),
});

const initialValues: SignInFormValues = {
  email: "",
  password: "",
};

export function SignInForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={async (values) => {
        authenticate(values);
        console.log(values);
      }}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form>
          <div className="w-full flex flex-col space-y-1">
            <TextInput
              label="Email"
              type="email"
              value={values?.email}
              error={touched?.email && errors?.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            <TextInput
              label="Password"
              type="password"
              value={values?.password}
              error={touched?.password && errors?.password}
              onChange={(e) => setFieldValue("password", e.target.value)}
            />

            <div className="pt-2 w-full">
              <Button text="Log In" type="submit" fillWidth />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
