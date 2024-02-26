import React from "react";
import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={useColorModeValue("gray.50", "gray.900")} color="white">
      <Box>
        <Link as={RouterLink} to="/" px={3} py={1} rounded={"md"} color={linkColor}>
          Home
        </Link>
        <Link as={RouterLink} to="/picketfence" px={3} py={1} rounded={"md"} color={linkColor}>
          Picket Fence
        </Link>
        <Link as={RouterLink} to="/starshot" px={3} py={1} rounded={"md"} color={linkColor}>
          Starshot
        </Link>
        <Link as={RouterLink} to="/catphan" px={3} py={1} rounded={"md"} color={linkColor}>
          Catphan
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
