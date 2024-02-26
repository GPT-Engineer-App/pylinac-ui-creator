import React, { useState } from "react";
import { Box, Button, Container, VStack, Input, useToast } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { FaUpload } from "react-icons/fa";

function PicketFence() {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleSubmit = () => {
    if (file) {
      toast({
        title: "Analysis Started",
        description: "Your file is being processed by pylinac.",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
      setFile(null);
    }
  };

  return (
    <Container maxW="container.md">
      <Navigation />
      <VStack spacing={8} py={10}>
        <Box>
          <Input type="file" accept=".dcm" onChange={handleFileChange} isRequired />
          <Button leftIcon={<FaUpload />} colorScheme="teal" variant="solid" onClick={handleSubmit} isDisabled={!file}>
            Upload & Analyze
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}

export default PicketFence;
