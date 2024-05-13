import React from "react";
import {
  Box,
  Flex,
  Link,
  chakra,
  HStack,
  VStack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import TypeWritter from "./Typewritter";
import Resume from "../Resume/Sanjeet_Kumar_Resume.pdf";
import Photo from "../Resume/photo.jpg";

export default function App() {
  return (
    <Flex
      // bg="#edf3f8"
      // _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="90%"
      alignItems="center"
      justifyContent="center"
      id="home"
      margin = "auto"
      // border = "1px solid black"
    >
      <Box
        //bg="white"
        // _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        w={{ lg: "7xl" }}
        //shadow={{ lg: "lg" }}
        //rounded={{ lg: "lg" }}
        // border = "1px solid black"
      >
        <Box
          py={12}
          px={6}
          maxW={{ base: "xl", lg: "5xl" }}
          w={{ lg: "70%", base: "100%" }}
          margin="auto"
        >
          <chakra.h2
            id="user-detail-name"
            fontSize={{ base: "xl", md: "5xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
            textAlign="left"
          >
            I'm{" "}
            <chakra.span color="gray" _dark={{ color: "brand.400" }}>
              Anish👋
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mt={4}
           fontSize={{base: "xl" , md:"2xl"}}
            color="black"
            _dark={{ color: "gray.400" }}
            id="user-detail-intro"
            textAlign="left"
          >
            UI/UX Designer , Front-End Developer & Thinker
            <br />
            Based in India.
          </chakra.p>
          <br />
          {/* <Text
            color={"red"}
            fontWeight={"bold"}
            fontFamily="sans-serif"
            _dark={{ color: "white" }}
            fontSize="4xl"
          >
            <TypeWritter />
          </Text> */}

          <Box mt={8}>
            <Link
              href="#projects"
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.800" }}
              
            >
              Projects
            </Link>
          </Box>

    
        </Box>
        <Box w={{ lg: "30%" }} margin={"auto"}>
  <Box>
    <svg class="home_blob" width="500" height="500" viewBox="0 0 820 813" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <path
                            d="M561.872 624.221C628.65 553.158 578.435 586.173 638.185 421.667C697.935 257.16 548.85 139.9 428.561 118.908C308.273 97.9151 278.585 158.192 212.397 220.855C162.532 278.876 96.7766 327.746 141.562 444.545C168.364 514.445 245.768 595.018 322.835 615.679C399.902 636.34 495.094 695.284 561.872 624.221Z"
                            fill="yellow" />
                        <image class="home_blob-img" x='130.5' y='102.5' href="https://sinhaanishkumar.github.io/assets/images/Image.png"/>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0" y="0.000244141" width="819.449" height="812.418"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="25" />
                            <feGaussianBlur stdDeviation="25" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                        </filter>
                    </defs>
                </svg>
  </Box>
</Box>

      </Box>
    </Flex>
  );
}
