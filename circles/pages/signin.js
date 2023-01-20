import React, { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import { Box, Heading, Input, Button, Image, Alert, Card } from "@chakra-ui/react";
import { signIn } from "next-auth/react";


export default function SignIn() {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      const response = await signIn("email", {
        email: values.email,
        password: values.password
      });

      if (response.error) {
        setError(response.error);
        return;
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
<Card maxW="600px" p={160} bg="white" borderRadius={12} alignItems="center" justifyContent="center" transform="translate(105%, 50%)">
<Image src="https://i.ibb.co/N1MPh1L/image.jpg" alt="image" mb={4} maxW="100%" objectFit="cover" objectPosition="center" />

<Heading as="h1" textAlign="center" mb={50}>
        Sign In
    </Heading>
    <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
            const errors = {};
            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Password is required";
            }
            return errors;
        }}
        onSubmit={handleSubmit}
    >
        {({ errors, touched }) => (
            <Form>
                <Field name="email" type="text">
                  {({ field }) => (
                    <Input
                      {...field}
                      id="email"
                      stroke={2}
                      placeholder="Email"
                      isInvalid={errors.email && touched.email}
                      mb={4}
                    />
                  )}
                </Field>
                <Field name="password" type="password">
                  {({ field }) => (
                    <Input
                      {...field}
                      id="password"
                      placeholder="Password"
                      isInvalid={errors.password && touched.password}
                      mb={4}
                    />
                  )}
                </Field>
                {error && <Alert status="error" mb={4}>{error}</Alert>}
                <Button maxW="20px" color={"blackAlpha.400"} type="submit">Sign In</Button>
              </Form>
            )}
          </Formik>
    </Card>
  );
}


