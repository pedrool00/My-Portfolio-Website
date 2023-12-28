import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import Footer from "./components/Footer";

// Renders the entire app
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
