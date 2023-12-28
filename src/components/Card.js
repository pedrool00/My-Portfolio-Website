import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";
import React from "react";

// This is a functional component named Card
const Card = ({ title, description, imageSrc }) => {
  return (
    // The card is wrapped in a Box component with styling properties
    // Everything after the styling are the contents of the card
    <Box
      bg="#3C3C3C"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      position="relative"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.08)" }}
    >
      <Image src={imageSrc} alt={title} rounded="3xl" objectFit="cover" />
      <VStack spacing={2} align="start" mt={2}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Text color="white" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>{description}</Text>
      </VStack>
    </Box>
  );
};

export default Card;
