import { Container, Grid, Heading } from "@radix-ui/themes";
import { FC } from "react";
import { projects } from "@/app/data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const Projects: FC = () => {
  return (
    <Container px="4" py="50px" id="projects">
      <Heading align="center" mb="4">
        Projects 🔥
      </Heading>
      <Grid columns="2" gap="3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Grid>
    </Container>
  );
};
