import pim from "@/assets/projects/pim.jpeg";
import jam from "@/assets/projects/jam.jpeg";
import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  description: string;
  image: StaticImageData;
};

export const projects: Project[] = [
  {
    name: "Quable PIM",
    description: "Work on Quable PIM as a FrontEnd developer",
    image: pim,
  },
  {
    name: "Jam.gg",
    description: "Work on jam.gg clould gaming platform",
    image: jam,
  },
];
