import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  axios.defaults.withCredentials = true;

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
