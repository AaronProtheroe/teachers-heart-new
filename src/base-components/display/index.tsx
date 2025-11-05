import {
  Box,
  Image,
  Text,
  VStack,
  Button,
  Flex,
  Portal,
} from "@chakra-ui/react";
import {
  DialogRoot,
  DialogContent,
  DialogBody,
  DialogCloseTrigger,
  DialogBackdrop,
  DialogPositioner,
} from "@chakra-ui/react";
import {
  IconDownload,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { useState } from "react";

type DisplayProps = {
  img: string;
  text: string;
  title: string;
};

export function Display({ img, text, title }: DisplayProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shouldShowToggle = text.length > 150;

  const handleDownload = async () => {
    try {
      const response = await fetch(img);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title.replace(/\s+/g, "-").toLowerCase()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <>
      <Box
        w="100%"
        minH={{ base: "calc(100vh - 64px)", md: "100vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(to-br, blue.50, purple.50, pink.50)"
        p={{ base: 4, md: 6 }}
      >
        <VStack
          gap={{ base: 4, md: 6 }}
          align="center"
          textAlign="center"
          bg="white"
          p={{ base: 6, md: 10 }}
          rounded="3xl"
          shadow="xl"
          w={{ base: "100%", md: "4xl" }}
          maxW="4xl"
          border="1px"
          borderColor="gray.100"
        >
          <VStack gap={2} w="100%">
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, blue.500, purple.500)"
              bgClip="text"
              letterSpacing="tight"
              color="black"
            >
              {title}
            </Text>
            <Box position="relative" w="100%">
              <Box
                position="relative"
                overflow="hidden"
                transition="all 0.4s ease-in-out"
                maxH={isExpanded ? "1000px" : "4.5em"}
              >
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.600"
                  lineHeight="1.5em"
                >
                  {text}
                </Text>
              </Box>
              {!isExpanded && shouldShowToggle && (
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  h="2.5em"
                  bgGradient="linear(to-b, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1))"
                  pointerEvents="none"
                  transition="opacity 0.3s ease-in-out"
                />
              )}
            </Box>
            {shouldShowToggle && (
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                size="sm"
                variant="ghost"
                mt={1}
              >
                {isExpanded ? (
                  <IconChevronUp size={16} />
                ) : (
                  <IconChevronDown size={16} />
                )}
                {isExpanded ? "Show less" : "Show more"}
              </Button>
            )}
          </VStack>

          <Box
            position="relative"
            p={{ base: 3, md: 4 }}
            bg="gray.50"
            rounded="2xl"
            border="2px"
            borderColor="gray.200"
            transition="all 0.2s"
            _hover={{
              shadow: "lg",
              borderColor: "blue.300",
              cursor: "pointer",
              transform: "scale(1.02)",
            }}
            w="100%"
            maxW={{ base: "280px", md: "320px" }}
            onClick={() => setIsModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsModalOpen(true);
              }
            }}
          >
            <Image
              src={img}
              alt={title}
              boxSize={{ base: "200px", md: "240px" }}
              objectFit="contain"
              mx="auto"
            />
          </Box>

          <Flex gap={3} w="100%" justify="center">
            <Button
              onClick={handleDownload}
              bg="#eab308"
              size={{ base: "md", md: "lg" }}
              flex={1}
              shadow="sm"
              _hover={{ shadow: "md", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              maxW={60}
            >
              <IconDownload />
              Download Image
            </Button>
          </Flex>
        </VStack>
      </Box>

      <DialogRoot
        open={isModalOpen}
        onOpenChange={(e) => setIsModalOpen(e.open)}
      >
        <Portal>
          <DialogBackdrop bg="blackAlpha.700" />
          <DialogPositioner zIndex={1500}>
            <DialogContent maxW={{ base: "95vw", md: "800px" }}>
              <DialogCloseTrigger />
              <DialogBody p={{ base: 4, md: 6 }}>
                <Image
                  src={img}
                  alt={title}
                  maxW="100%"
                  maxH="60vh"
                  objectFit="contain"
                  mx="auto"
                />
              </DialogBody>
            </DialogContent>
          </DialogPositioner>
        </Portal>
      </DialogRoot>
    </>
  );
}
