// components/CopyText.tsx
import { useState } from "react";
import { Box, Button, Text, useClipboard, useToast } from "@chakra-ui/react";

interface CopyTextProps {
  textUp: string;
  textDown: string;
}

const CopyText: React.FC<CopyTextProps> = ({ textUp, textDown }) => {
  const { onCopy } = useClipboard(textUp);
  const toast = useToast();

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Copied!",
      description: "Text has been copied to clipboard.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box textAlign="center" p={5}>
      <Text fontFamily="Newsreader" fontWeight="600" lineHeight="0" color="#cdc1b1" fontSize="lg" mb={4}>
        {textUp}
      </Text>
      <Text fontFamily="Newsreader" fontWeight="400" fontSize="md" mb={4}>
        {textDown}
      </Text>
      <Button
        size="sm"
        border="1px solid black"
        borderRadius={0}
        backgroundColor="#F9F7F4"
        fontFamily="Newsreader"
        fontWeight="400"
        fontStyle="italic"
        onClick={handleCopy}>
        Copy
      </Button>
    </Box>
  );
};

export default CopyText;
