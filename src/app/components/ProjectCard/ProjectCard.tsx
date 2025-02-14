import { Project } from "@/app/data/projects";
import { Box, Card, Heading, Inset, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FC } from "react";

import classes from "./ProjectCard.module.scss";

export const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <Card size="2">
      <Inset
        clip="padding-box"
        side="top"
        pb="current"
        className={classes.projectCard__imageWrapper}
      >
        <Image
          src={project.image}
          alt={project.name}
          className={classes.projectCard__image}
        />
      </Inset>
      <Box py="3">
						<Heading size="3">{project.name}</Heading>
						<Text>{project.description}</Text>
      </Box>
    </Card>
  );
};
