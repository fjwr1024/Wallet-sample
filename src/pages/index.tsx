import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import axios from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useMutateAuth } from '@/hooks/useQueryAuth';
import { Signup } from '@/types/Signup';

const Page: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Signup>();

  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { useQueryCsrf, useQuerySignup } = useMutateAuth();

  // api側の設定が面倒なので一旦コメントアウト
  // useQueryCsrf();

  const onSubmit = async (data: Signup) => {
    console.log('data', data);
    try {
      await axios.post(`http://localhost:3000/auth/login`, {
        email: data.email,
        password: data.password,
      });
      router.push('/home');
    } catch (e: any) {
      console.log(e.response.data.message);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Wallet Example</title>
      </Head>
      <main>
        <Flex
          minH="100vh"
          align="center"
          justify="center"
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
            <Stack align="center">
              <Heading fontSize="3xl" textAlign="center">
                Login Solana Wallet
              </Heading>
            </Stack>
            <Box
              rounded="lg"
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow="lg"
              p={8}
            >
              <Stack spacing={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      {...register('email', { required: true })}
                    />
                    {errors.email && (
                      <Text fontSize="14" color="red" mt="2">
                        Email Is Required
                      </Text>
                    )}
                  </FormControl>
                  <FormControl id="password" pt={5}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        {...register('password', {
                          required: {
                            value: true,
                            message: 'Password is Required',
                          },
                          minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters',
                          },
                        })}
                      />
                      <InputRightElement h="full">
                        <Button
                          variant="ghost"
                          onClick={() =>
                            // eslint-disable-next-line no-shadow
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {errors.password && (
                      <Text fontSize="14" color="red" mt="2">
                        {errors.password.message}
                      </Text>
                    )}
                  </FormControl>
                  <Stack spacing={10} pt={8}>
                    <Button
                      type="submit"
                      loadingText="Submitting"
                      size="lg"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: 'blue.500',
                      }}
                    >
                      Login
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align="center">
                      Is not user? <Link color="blue.400">Signup</Link>
                    </Text>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </main>
    </Fragment>
  );
};

export default Page;
