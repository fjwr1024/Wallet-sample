import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
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
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import React from 'react';
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

  const onSubmit = (data: Signup) => {
    console.log('data', data);
    useQuerySignup.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Fragment>
      <Head>
        <title>Wallet Example</title>
      </Head>
      <main>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'3xl'} textAlign={'center'}>
                Sign up Solana Wallet
              </Heading>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
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
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={() =>
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
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                    >
                      Sign up
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={'center'}>
                      Already a user? <Link color={'blue.400'}>Login</Link>
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
