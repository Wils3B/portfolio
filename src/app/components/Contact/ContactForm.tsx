"use client";

import { AvatarIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Button, Container, Heading, Text, TextArea, TextField } from "@radix-ui/themes";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import classes from "./ContactForm.module.scss";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = () => {
    toast("Thank you for contact me, let's get in touch in a few days 😊");
    reset();
  };

  return (
    <Container id="contact">
      <form noValidate className={classes.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <Heading>Contact Me 😊</Heading>
        <div className={classes.fullWidth}>
          <Text as="label" htmlFor="name">
            Name
          </Text>
          <TextField.Root
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          >
            <TextField.Slot>
              <AvatarIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          {errors.name && <Text as="span" color="tomato">{errors.name.message}</Text>}
        </div>

        <div className={classes.fullWidth}>
          <Text as="label" htmlFor="email">
            Email
          </Text>
          <TextField.Root
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address",
              },
            })}
          >
            <TextField.Slot>
              <EnvelopeClosedIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          {errors.email && <Text as="span" color="tomato">{errors.email.message}</Text>}
        </div>

        <div className={classes.fullWidth}>
          <Text as="label" htmlFor="message">
            Message
          </Text>
          <TextArea
            id="message"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <Text as="span" color="tomato">{errors.message.message}</Text>}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};
