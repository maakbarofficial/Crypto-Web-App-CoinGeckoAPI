import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/Crypto.png";

const Home = () => {
  return (
    <div>
      <Box bgColor={"blackAlpha.900"} w={"full"} h={"80vh"}>
        <motion.div
          style={{
            height: "80vh",
          }}
          animate={{
            translateY: "20px",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            w={"full"}
            h={"full"}
            objectFit={"contain"}
            src={HeroImg}
            filter={"grayscale(1)"}
          />
        </motion.div>

        <Text
          fontSize={"5xl"}
          textAlign={"center"}
          fontWeight={"thin"}
          color={"whiteAlpha.700"}
          mt={"-10"}
          mb={"10"}
        >
          Crypto Web App
        </Text>
      </Box>
    </div>
  );
};

export default Home;
