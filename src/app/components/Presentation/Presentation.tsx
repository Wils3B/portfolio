import wilsonImage from "@/assets/wilson.png";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";
import { FC } from "react";

import classes from "./Presentation.module.scss";

export const Presentation: FC = () => {
  return (
    <Container id="home">
      <Flex direction="column" gap="4" px="4" className={classes.presentation}>
        <Image
          alt="Wilson"
          src={wilsonImage}
          className={classes.wilsonImage}
          width={100}
          height={100}
        />
        <Box maxWidth="500px">
          <Heading as="h1" size="1">Hi, I am Wilson Gouanet 👋</Heading>
          <Heading as="h2" size="8">Building Tomorrow&apos;s Software Today</Heading>
        </Box>
      </Flex>
    </Container>
  );
};
