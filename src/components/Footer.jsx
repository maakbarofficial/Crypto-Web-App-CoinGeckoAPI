import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box
        bgColor={"blackAlpha.900"}
        color={"whiteAlpha.700"}
        minH={"48"}
        px={"16"}
        py={["16", "8"]}
      >
        <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
          <VStack w={"full"} alignItems={["center", "flex-start"]}>
            <Text fontWeight={"bold"}>About Us</Text>
            <Text
              fontSize={"sm"}
              letterSpacing={"widest"}
              textAlign={["center", "left"]}
            >
              Automate Your Trading Strategy With Us & Earn Money While Sleeping
            </Text>
          </VStack>
          <VStack>
            <Avatar
              name="Ali Akbar"
              src="https://avatars.githubusercontent.com/u/106576398?v=4"
              boxSize={"28"}
              mt={["4", "0"]}
            />
            <Text>Our Founder</Text>
          </VStack>
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
