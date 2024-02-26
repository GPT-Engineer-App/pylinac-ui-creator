import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, VStack, useToast, Image } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleSubmit = () => {
    // This is where you would handle the file upload to a backend service that uses pylinac.
    // For now, we'll just show a toast notification.
    if (file) {
      toast({
        title: "Analysis Started",
        description: "Your file is being processed by pylinac.",
        status: "info",
        duration: 9000,
        isClosable: true,
      });

      // Reset file input
      setFile(null);
      // TODO: Implement the actual file upload and pylinac processing logic
    }
  };

  return (
    <Container maxW="container.md">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="xl">
          Pylinac Analysis Tool
        </Heading>
        <Text>Welcome to the Pylinac Analysis Tool. Upload your DICOM files, and we'll analyze them for you.</Text>
        <Box>
          <Image src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWRpb2xvZ3l8ZW58MHx8fHwxNzA4OTU1OTI2fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Radiology Image" />
        </Box>
        <Stack spacing={4} direction="row" align="center">
          <Input type="file" accept=".dcm" onChange={handleFileChange} isRequired />
          <Button leftIcon={<FaUpload />} colorScheme="teal" variant="solid" onClick={handleSubmit} isDisabled={!file}>
            Upload & Analyze
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
