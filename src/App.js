import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <SkillsSection />
        <CertificationsSection />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
