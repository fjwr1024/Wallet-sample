import { CopyIcon } from '@chakra-ui/icons';
import { Text, Box, useToast, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';

interface CopyToClipboardButtonProps {
  textToCopy: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  textToCopy,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      console.log('isCopied', isCopied); // eslint-disable-line no-console
      toast({
        title: 'Copy Completed',
        description: 'Copy Is Completed',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Copy Is Failed',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Text mb={2}>{textToCopy}</Text>
      <IconButton
        colorScheme="blue"
        size="sm"
        icon={<CopyIcon />}
        aria-label="コピー"
        onClick={handleCopy}
        isRound
      />
    </Box>
  );
};

export default CopyToClipboardButton;
