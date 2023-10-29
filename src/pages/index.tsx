import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Divider,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';

import { useForm } from 'react-hook-form';
// import { useMutateAuth } from '@/hooks/useQueryAuth';
import { Login } from '@/types/Login';

const Page: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // const { useQueryCsrf, useQuerySignup } = useMutateAuth();

  // api側の設定が面倒なので一旦コメントアウト
  // useQueryCsrf();

  const onSubmit = async (data: Login) => {
    console.log('data', data); // eslint-disable-line no-console
    router.push('/home');
    // try {
    //   await axios.post(`http://localhost:3000/auth/login`, {
    //     email: data.email,
    //     password: data.password,
    //   });
    //   router.push('/home');
    // } catch (e: any) {
    //   console.log(e.response);
    // }
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
          bgGradient="linear(to-b, #151b20, #3bcfdc)"
        >
          <Stack spacing={8} mx="auto" maxW="lg">
            <Stack align="center">
              <Heading fontSize="4xl" textAlign="center" color="white">
                Solana Wallet
              </Heading>
            </Stack>
            <Box rounded="lg" bg="transparent">
              <Stack>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl id="email">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      color="#FFFFFF"
                      _placeholder={{ color: '#FFFFFF' }}
                      {...register('email', { required: true })}
                    />
                    {errors.email && (
                      <Text fontSize="14" color="red" mt="2">
                        Email Is Required
                      </Text>
                    )}
                  </FormControl>
                  <FormControl id="password" pt={5}>
                    <InputGroup>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        color="#FFFFFF"
                        _placeholder={{ color: '#FFFFFF' }}
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
                          {showPassword ? (
                            <ViewIcon color="#FFFFFF" />
                          ) : (
                            <ViewOffIcon color="#FFFFFF" />
                          )}
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
                      bg="#fdb937"
                      color="white"
                      _hover={{
                        bg: '#f7ae1b',
                      }}
                    >
                      Login
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Box>
            <Box position="relative" rounded="lg" bg="transparent">
              <Divider />
              <Stack pt={6}>
                <Text align="center" color="#FFFFFF">
                  Don't have an account ?
                </Text>
                <Text align="center" as="b">
                  <Link color="#FFFFFF" as="b">
                    SIGN UP
                  </Link>
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </main>
    </Fragment>
  );
};

export default Page;
