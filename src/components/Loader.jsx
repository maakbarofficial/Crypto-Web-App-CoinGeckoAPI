import { Box, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <div>
      <VStack h={"90vh"} justifyContent={"center"}>
        <Box transform={"scale(3)"}>
          <Spinner size="xl" speed="0.2s" />
        </Box>
      </VStack>
    </div>
  );
};

export default Loader;
