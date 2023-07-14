import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { theme } from '@/styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  axios.defaults.withCredentials = true;

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
