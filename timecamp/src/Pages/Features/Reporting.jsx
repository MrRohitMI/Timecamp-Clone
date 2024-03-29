import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    IconButton,
    Input,
    HStack,
    SimpleGrid,
    Center,
  } from "@chakra-ui/react";
import React from 'react'
import { AiOutlineGoogle,AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const Reporting = () => {
  return (
    <>
    <Navbar/>
    <Container maxW={"7xl"} my={10}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} fontSize={"5xl"}>
                Insightful reports
                </Text>
              </Heading>
              <Text color={"gray.500"}>
              Get essential information about your projects and teams. Stay in the know thanks to TimeCamp's reporting.
              </Text>
              <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
                <Input
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  fontSize={["sm", "md", "lg"]}
                  px={6}
                  bg={"white"}
                  placeholder={"Add your email"}
                  boxShadow={"lg"}
                />
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontSize={"sm"}
                  px={10}
                  w={60}
                  color={"white"}
                  bg={"#37c266"}
                  _hover={"#42f87f"}
                >
                  Start tracking time
                </Button>
              </Stack>
              <HStack spacing={8}>
                <Flex gap={2} w={"45%"}>
                  <Text color={"gray.500"} justifyContent={"center"}>
                    Or sign up with:
                  </Text>
                  <IconButton
                    icon={<AiOutlineGoogle />}
                    bg={"#37c266"}
                    color={"white"}
                    rounded={"full"}
                    w={4}
                    _hover={"#42f87f"}
                  />
                </Flex>
                <Text w={"55%"} fontSize={12} color={"gray.500"}>
                  By signing up you agree to our
                  <Text as={"span"} color="#37c266">
                    {" "}
                    Terms and Conditions{" "}
                  </Text>{" "}
                  and
                  <Text as={"span"} color="#37c266">
                    {" "}
                    Privacy Policy{" "}
                  </Text>
                  .
                </Text>
              </HStack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                // boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/insightful-reports-header.svg"
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <Stack bg={"#37c266"} m={0} p={4} spacing={8}>
          <Text
            fontWeight={"semibold"}
            fontSize={"lg"}
            color={"white"}
            textAlign={"center"}
          >
            Trusted by 18,000 teams from all over the world (and still growing!)
          </Text>
          <SimpleGrid
            px={[10, 20, 40]}
            justifyContent={"center"}
            columns={[2, 3, 3, 6]}
            spacing={6}
          >
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png" />
          </SimpleGrid>
        </Stack>
        <Container maxW={"7xl"} my={8}>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallSkewCircle.svg"
            mx={[20, 40, 60, 80]}
            mb={-8}
          />
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/redSmallCircle.svg"
            mx={[200, 400, 600, 800]}
            mb={-2}
          />
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            bg={"gray.100"}
            p={10}
            rounded={10}
          >
            <Flex
              flexDirection={["column", "column", "row"]}
              justifyContent={"space-between"}
            >
              <Stack spacing={4} textAlign={"left"}>
                <Heading fontWeight={600} fontSize={["md", "lg", "xl"]}>
                  Schedule a demo and learn more about TimeCamp
                </Heading>
                <Text color={"gray.500"} fontSize={["sm", "md", "lg"]}>
                  Hop on a call with TimeCamp's top minds to get the best possible
                  introduction to our product.
                </Text>
              </Stack>
              <Stack align={"center"}>
                <Button
                  color={"white"}
                  bg={"#F7B801"}
                  rounded={"full"}
                  px={6}
                  height={[8, 12, 16]}
                  w={[40, 80, 160, 200]}
                  fontSize={[10, 20, 24]}
                  fontWeight={"semibold"}
                  _hover={"#ffbf00"}
                >
                  Book a Demo
                </Button>
              </Stack>
            </Flex>
          </Stack>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/blueSmallCircle.svg"
            mx={[20, 40]}
            mt={-8}
          />
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallCircle.svg"
            mx={[200, 400, 600, 800]}
            mt={-2}
          />
        </Container>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                {/* <Text as={"span"} color={"blue.400"} fontSize={"sm"}>
                  Automatic time tracking app
                </Text> */}
                <Heading
                  lineHeight={1.1}
                  fontWeight={700}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text as={"span"} fontSize={"4xl"}>
                  10+ build-in report types
                  </Text>
                </Heading>
                <Text color={"black"} textAlign={"center"} ml={"50%"}>
                Regardless of what your use case for time tracking is, you’ll probably find a report that meets your needs! Need to check the time spent on a given project? There you go! Want to see how your team allocates their time? Not a problem! Need to run the payroll? Check! Holiday and leave reporting? We’ve got you covered.
                </Text>
              </Stack>
  
              
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                // boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/PeopleByTask.png"
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                // boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/ownReports.png"
                  }
                />
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                {/* <Text as={"span"} color={"blue.400"} fontSize={"sm"}>
                  Custom billing rates
                </Text> */}
                <Heading
                  lineHeight={1.1}
                  fontWeight={700}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text as={"span"} fontSize={"4xl"}>
                  Don't see a default report that matches your needs? Create one!
                  </Text>
                </Heading>
                <Text color={"black"}>
                TimeCamp allows you to define and set up your own custom reports.
                </Text>
                
              </Stack>
  
            </Stack>
          </Stack>
        </Container>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                {/* <Text as={"span"} color={"blue.400"} fontSize={"sm"}>
                  Automatic time tracking app
                </Text> */}
                <Heading
                  lineHeight={1.1}
                  fontWeight={700}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text as={"span"} fontSize={"4xl"}>
                  Easy sharing
                  </Text>
                </Heading>
                <Text color={"black"} textAlign={"center"} ml={"50%"}>
                TimeCamp lets you export and share reports in any shape or form. PDFs, Excel spreadsheets or automated e-mails - choose your go-to method.
                </Text>
              </Stack>
  
              
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                // boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/easyExport.png"
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                // boxShadow={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/features/guestRole.png"
                  }
                />
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={"2"} w={"90%"}>
                {/* <Text as={"span"} color={"blue.400"} fontSize={"sm"}>
                  Custom billing rates
                </Text> */}
                <Heading
                  lineHeight={1.1}
                  fontWeight={700}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text as={"span"} fontSize={"4xl"}>
                  Invite guests
                  </Text>
                </Heading>
                <Text color={"black"}>
                With the guest role, you can invite your clients to their project reports in TimeCamp so they can check the current status of work when they want.
                </Text>
              </Stack>
  
            </Stack>
          </Stack>
        </Container>
        <Container maxW={"7xl"} my={8} p={[4,8,16]}>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallSkewCircle.svg"
            mx={[0,20, 40, 60, 80]}
            mb={-8}
          />
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/redSmallCircle.svg"
            mx={[100,200, 400, 600, 800]}
            mb={-2}
          />
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            bg={"gray.100"}
            p={10}
            rounded={16}
          >
  
              <Stack spacing={4} textAlign={"center"} px={[2,4,8,16,32]}>
                <Heading fontWeight={[400,600,700]} fontSize={['2xl','4xl']}>
                One simple tool to measure everything your business needs.
                </Heading>
                <Text color={"gray.500"} fontSize={["sm", "md", "lg"]} >
                Remember, you can't improve something if you're not measuring it! If you're tired of the constant guessing, give TimeCamp a go!
                </Text>
              </Stack>
              <Flex justifyContent={"center"} direction={["column","row","row"]} my={2} gap={4}>
                <Button
                  color={"black"}
                  bg={"#F7B801"}
                  rounded={"full"}
                  px={6}
                  height={[8, 12]}
                  w={[40, 80, 160, 200,400]}
                  fontSize={[10, 16]}
                  fontWeight={"semibold"}
                  _hover={"#ffbf00"}
                >
                  Try Timecamp for free
                </Button>
                <Button
                  color={"black"}
                  borderColor={"#F7B801"}
                  rounded={"full"}
                  variant={'outline'}
                  px={6}
                  height={[8, 12]}
                  w={[40, 80, 160, 200,400]}
                  fontSize={[10, 16]}
                  fontWeight={"semibold"}
                  _hover={"#ffbf00"}
                >
                  Contact Sales
                </Button>
              </Flex>
          
          </Stack>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/blueSmallCircle.svg"
            mx={[20, 40]}
            mt={-8}
          />
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallCircle.svg"
            mx={[200, 400, 600, 800]}
            mt={-2}
          />
        </Container>
        <Footer/>
    </>
  )
}

export default Reporting