import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import router from 'next/router';
import { Signup } from '../types/Signup.d';
import { Login } from '@/types/Login';

export const useMutateAuth = () => {
  const getCsrf = async () => {
    const { data } = await axios.get<string>(
      `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/auth/csrf`
    );
    axios.defaults.headers.common['X-XSRF-TOKEN'] = data;
    return data;
  };

  const useQueryCsrf = () =>
    useQuery<string, Error>({
      queryKey: ['getCsrf'],
      queryFn: getCsrf,
      cacheTime: 10000,
      staleTime: 0,
    });

  const useQueryLogin = async () => {
    const { data } = await axios.post<Login>(
      `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/auth/login`
    );
    return data;
  };

  const useQuerySignup = useMutation(
    async (signupData: Signup) => {
      const { data } = await axios.post<Signup>(
        `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/auth/signup`,
        signupData
      );
      return data;
    },
    {
      onSuccess: (res) => {
        console.log('success', res); // eslint-disable-line no-console
        router.push('/signup/confirm');
      },
      onError: (err: any) => {
        if (err.response.status) {
          console.log('error', err.response.data.message); // eslint-disable-line no-console
        }
      },
    }
  );

  return { useQueryCsrf, useQueryLogin, useQuerySignup };
};
