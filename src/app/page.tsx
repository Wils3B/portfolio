import { ContactForm } from "./components/Contact/ContactForm";
import { Presentation } from "./components/Presentation/Presentation";
import { Projects } from "./components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Presentation />
      <Projects />
      <ContactForm />
    </>
  );
}
