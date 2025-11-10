import { Box, Container, Text, VStack } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box
      bg="white"
      borderRadius={20}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 10, md: 20 }}
      px={4}
    >
      <Container maxW="4xl">
        <VStack gap={8} textAlign="center">
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            bgGradient="linear(to-r, blue.500, purple.500)"
            bgClip="text"
            letterSpacing="tight"
            color="black"
          >
            The Teachers Heart
          </Text>

          <VStack gap={6} align="stretch">
            <Text fontSize="lg" color="gray.700" lineHeight="taller">
              In so many ways, teachers are the backbone of a community. Their
              role is to educate but often, teachers, classrooms and places of
              learning become havens for children. Teachers not only hold space
              for learning – they also hold space for a wide range of emotions,
              thoughts, behaviours and personalities.
            </Text>

            <Text fontSize="lg" color="gray.700" lineHeight="taller">
              They are guardians of children’s minds, but also often guardians
              of children’s souls. But while they hold the nation’s children,
              who holds them?
            </Text>

            <Text fontSize="lg" color="gray.700" lineHeight="taller">
              Social-emotional learning tools can be first implemented in a
              teacher’s own life. They can then introduce these tools in the
              classroom, with symbiotic results.
            </Text>

            <Text fontSize="lg" color="gray.700" lineHeight="taller">
              Using a few simple tools, teachers can check in with themselves,
              reflect, and get help when they need it. They can use these same
              simple tools to instill self-awareness, aid reflection and
              increase help-seeking behaviour in children. Emotional regulation
              works in a feedback loop – teachers affect children and children
              affect teachers. Co-regulation can therefore be profoundly helpful
              for everyone.
            </Text>

            <Text fontSize="lg" color="gray.700" lineHeight="taller">
              The Teacher’s Heart was specifically set up so that teachers
              anywhere can access basic social-emotional tools, posters, and
              information relating to these. All the posters are available for
              teachers to download free of charge.
            </Text>

            <Text fontSize="lg" color="gray.700" lineHeight="taller">
              If you’re interested in gaining more insight into any of the
              concepts and tools, please feel free to contact us.
            </Text>

            <Text fontSize="md" color="teal.500" mt={4}>
              <a
                href="https://teachers-heart-new.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                teachers-heart-new.vercel.app
              </a>
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
