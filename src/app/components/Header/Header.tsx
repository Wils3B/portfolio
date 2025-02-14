"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Box, Container, Flex, Link, Separator, Text } from "@radix-ui/themes";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { FC, useRef, useState } from "react";

import classes from "./Header.module.scss";
import { scrollToSection } from "@/app/utils/scrollToSection/scrollToSection";

export const Header: FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 180) {
      setHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      whileHover={hidden ? "peeking" : "visible"}
      onFocusCapture={hidden ? () => setHidden(false) : undefined}
      variants={{
        visible: { y: "0%" },
        hidden: { y: "-100%" },
        peeking: { y: "0%", cursor: "pointer" },
      }}
      transition={{ duration: 0.2 }}
      className={classes.header__wrapper}
    >
      <div className={classes.header__blurBackdrop} />
      <Container>
        <Flex px="4" justify="between" className={classes.header}>
          <Flex gap="2">
            <Link
              href="/#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </Link>
          </Flex>
          <Text>wilsongouanet.com</Text>
          <Flex gap="2">
            <Link
              href="https://github.com/Wils3B"
              target="_blank"
              rel="noreferrer noopener"
              className={classes.header__link}
            >
              <GitHubLogoIcon />
              <Box as="span" ml="1" display="inline">
                Github
              </Box>
            </Link>

            <Link
              href="https://linkedin.com/in/wilson-gouanet"
              target="_blank"
              rel="noreferrer noopener"
              className={classes.header__link}
            >
              <LinkedInLogoIcon />
              <Box as="span" ml="1" display="inline">
                Linkedin
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Container>
      <Separator orientation="horizontal" size="4" />
    </motion.div>
  );
};
