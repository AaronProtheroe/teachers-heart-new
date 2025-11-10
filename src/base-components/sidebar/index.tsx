import {
  Box,
  Image,
  VStack,
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerCloseTrigger,
  DrawerBody,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import {
  IconFlame,
  IconHealthRecognition,
  IconHeart,
  IconHeartRateMonitor,
  IconHome,
  IconMoodLookDown,
  IconNavigationHeart,
  IconPencil,
  IconRun,
} from "@tabler/icons-react";
import { CustomLink } from "./components/link";
import logo from "../../assets/Logo.png";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { to: "/", name: "Home", icon: IconHome },
  { to: "/well-being", name: "Well-being", icon: IconHealthRecognition },
  { to: "/emotions", name: "Emotions", icon: IconHeart },
  { to: "/stress", name: "Stress", icon: IconHeartRateMonitor },
  { to: "/somatic-reponse", name: "Somatic Response", icon: IconMoodLookDown },
  { to: "/somatic-exercises", name: "Somatic Exercises", icon: IconRun },
  { to: "/54321-technique", name: "54321 Technique", icon: IconPencil },
  { to: "/affirmations", name: "Affirmations", icon: IconNavigationHeart },
  { to: "/burnout", name: "Burnout", icon: IconFlame },
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const SidebarContent = () => (
    <>
      <Box p={6} borderBottom="1px" borderColor="whiteAlpha.300">
        <Image
          src={logo}
          alt="Company Logo"
          boxSize="120px"
          objectFit="contain"
        />
      </Box>

      <VStack align="stretch" gap={2} p={4}>
        {navItems.map((item: any) => {
          return (
            <CustomLink
              to={item.to}
              icon={item.icon}
              name={item.name}
              onNavigate={onClose}
            />
          );
        })}
      </VStack>
    </>
  );

  if (isMobile) {
    return (
      <DrawerRoot
        open={isOpen}
        onOpenChange={(e) => !e.open && onClose()}
        placement="start"
        size="md"
      >
        <DrawerBackdrop />
        <DrawerContent bg="white">
          <DrawerCloseTrigger />
          <DrawerBody p={0}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    );
  }

  return (
    <Box
      w="250px"
      shadow="lg"
      position="fixed"
      h="100vh"
      overflowY="auto"
      bg="white"
    >
      <SidebarContent />
    </Box>
  );
};
