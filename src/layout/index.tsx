import { Sidebar } from "@/base-components";
import { Box, Flex, Container, IconButton } from "@chakra-ui/react";
import { IconMenu2 } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const AppShell = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex minH="100vh" maxW="100vw" overflowX="hidden">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <Box
        display={{ base: "block", md: "none" }}
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg="white"
        p={4}
        shadow="md"
        zIndex={10}
      >
        <IconButton
          onClick={() => setIsOpen(true)}
          variant="ghost"
          aria-label="Open menu"
        >
          <IconMenu2 size={24} />
        </IconButton>
      </Box>

      <Box
        ml={{ base: 0, md: "250px" }}
        flex="1"
        bg="#9ad2ab"
        pt={{ base: "72px", md: 0 }}
        minH="100vh"
        w={{ base: "100vw", md: "auto" }}
      >
        <Container maxW="container.xl" py={8}>
          <Outlet />
        </Container>
      </Box>
    </Flex>
  );
};
