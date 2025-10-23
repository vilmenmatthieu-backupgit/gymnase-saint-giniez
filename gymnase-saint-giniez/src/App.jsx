import React, { useState } from "react";
import {
  Box, Container, Flex, Grid, GridItem, Heading, Text, Button, Badge,
  HStack, VStack, Icon, Link, useBreakpointValue, Card, CardBody, Circle
} from "@chakra-ui/react";
import { motion, LayoutGroup } from "framer-motion";
import { Dumbbell, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const BRAND = { name: "Gymnase Saint Giniez" };

const people = [
  { id: "anthony", name: "Anthony", role: "Co-gérant & Coach", initials: "AN",
    desc: "Passionné de préparation physique et de force, Anthony supervise la programmation et l'expérience globale des adhérents." },
  { id: "alicia", name: "Alicia", role: "Co-gérante & Coach", initials: "AL",
    desc: "Spécialiste bien-être et accueil, Alicia veille au suivi des membres et à la qualité du service." },
  { id: "deborah", name: "Déborah", role: "Co-gérante & Coach", initials: "DB",
    desc: "Organisation, plannings et accompagnement : Déborah s'assure que tout roule côté opérationnel et sportif." },
  { id: "anis", name: "Anis", role: "Co-gérant & Coach", initials: "AS",
    desc: "Coach diplômé et co-gérant, Anis encadre les séances techniques et les parcours de progression des adhérents." },
];

function ProfileCard({ person, activeId, setActiveId }) {
  const active = activeId === person.id;
  return (
    <MotionCard
      layout
      as="button"
      onClick={() => setActiveId(active ? null : person.id)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
      variant="outline"
      _hover={{ shadow: "md" }}
      borderRadius="2xl"
    >
      <CardBody>
        <HStack align="center" spacing={4}>
          <Circle size="64px" bg="brand.600" color="white" fontWeight="semibold">
            {person.initials}
          </Circle>
          <Box textAlign="left">
            <Heading as="h3" size="md">{person.name}</Heading>
            <Text color="gray.600">{person.role}</Text>
          </Box>
        </HStack>

        <MotionBox
          layout
          initial={false}
          animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }}
          overflow="hidden"
        >
          <Text mt={4} color="gray.700">{person.desc}</Text>
        </MotionBox>
      </CardBody>
    </MotionCard>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const cols = useBreakpointValue({ base: 1, md: 4 });

  return (
    <Box minH="100vh" bg="white" color="gray.900">
      {/* Header */}
      <Box as="header" position="sticky" top={0} zIndex={10} borderBottom="1px" borderColor="gray.200" bg="white" backdropFilter="saturate(180%) blur(6px)">
        <Container maxW="6xl" py={3}>
          <Flex align="center" justify="space-between">
            <HStack as={Link} href="#accueil" fontWeight="semibold" spacing={2}>
              <Circle size="36px" bg="brand.600" color="white">
                <Icon as={Dumbbell} boxSize={4} />
              </Circle>
              <Text>{BRAND.name}</Text>
            </HStack>
            <HStack spacing={6} display={{ base: "none", md: "flex" }}>
              <Link href="#equipe" _hover={{ color: "brand.600" }}>Équipe</Link>
              <Link href="#contact" _hover={{ color: "brand.600" }}>Contact</Link>
            </HStack>
            <Button as={Link} href="#contact" rightIcon={<Icon as={ChevronRight} />} colorScheme="blue" borderRadius="xl">
              Nous contacter
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Hero */}
      <Box as="section" id="accueil" borderBottom="1px" borderColor="gray.100" bgGradient="linear(to-b, blue.50, white)">
        <Container maxW="6xl" py={16}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Box>
              <Heading as="h1" size="2xl">
                Bienvenue au <Text as="span" color="brand.600">{BRAND.name}</Text>
              </Heading>
              <Text mt={4} color="gray.600">
                Salle de sport de quartier — esprit bleu-blanc, entraînement sérieux, ambiance conviviale.
              </Text>
              <HStack mt={6} spacing={3} wrap="wrap">
                <Badge px={3} py={1} borderRadius="full" variant="subtle">Coaching</Badge>
                <Badge px={3} py={1} borderRadius="full" variant="subtle">Préparation physique</Badge>
                <Badge px={3} py={1} borderRadius="full" variant="subtle">Remise en forme</Badge>
              </HStack>
            </Box>
            <Box border="1px" borderColor="gray.200" p={6} borderRadius="2xl" boxShadow="sm" bg="white">
              <Box w="100%" pt="75%" borderRadius="xl" bgGradient="linear(to-tr, brand.600, brand.500)" />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Équipe */}
      <Box as="section" id="equipe">
        <Container maxW="6xl" py={16}>
          <Box mb={8}>
            <Heading as="h2" size="lg">L'équipe dirigeante</Heading>
            <Text color="gray.600">Cliquez sur un profil pour afficher sa description. Les cartes s'agrandissent (zoom) et dévoilent le texte.</Text>
          </Box>

          <LayoutGroup>
            <Grid templateColumns={`repeat(${cols ?? 1}, 1fr)`} gap={6}>
              {people.map((p) => (
                <GridItem key={p.id}>
                  <ProfileCard person={p} activeId={activeId} setActiveId={setActiveId} />
                </GridItem>
              ))}
            </Grid>
          </LayoutGroup>
        </Container>
      </Box>

      {/* Contact */}
      <Box as="section" id="contact" bg="blue.50">
        <Container maxW="6xl" py={16}>
          <Heading as="h2" size="lg">Contact</Heading>
          <Grid mt={6} gap={4} templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}>
            <Button as={Link} href="tel:+33000000000" variant="outline" leftIcon={<Icon as={Phone} />}>04 00 00 00 00</Button>
            <Button as={Link} href="mailto:contact@gymnase-saint-giniez.fr" variant="outline" leftIcon={<Icon as={Mail} />}>contact@gymnase-saint-giniez.fr</Button>
            <Flex align="center" p={4} border="1px" borderColor="gray.200" borderRadius="xl" bg="white" gap={3}>
              <Icon as={MapPin} />
              <Text>13008 Marseille</Text>
            </Flex>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" borderTop="1px" borderColor="gray.100">
        <Container maxW="6xl" py={8}>
          <Text color="gray.600">© {new Date().getFullYear()} {BRAND.name} — Tous droits réservés.</Text>
        </Container>
      </Box>
    </Box>
  );
}
