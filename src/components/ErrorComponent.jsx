import { Alert, AlertIcon, Center, Text } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <div>
      <Alert
        status="error"
        position={"fixed"}
        w={"container.lg"}
        bottom={"4"}
        left={"50%"}
        transform={"translateX(-50%)"}
        flexWrap={"wrap"}
      >
        <AlertIcon />
        {message}
      </Alert>
    </div>
  );
};

export default ErrorComponent;
