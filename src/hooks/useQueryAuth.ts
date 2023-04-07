import { Signup } from './../types/Signup.d';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Login } from '@/types/Login';

const getCsrf = async () => {
  const { data } = await axios.get<string>(
    `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/auth/csrf`
  );
  return data;
};

export const useQueryCsrf = () =>
  useQuery<string, Error>({
    queryKey: ['getCsrf'],
    queryFn: getCsrf,
    cacheTime: 10000,
    staleTime: 0,
  });

const login = async () => {
  const { data } = await axios.post<Login>(
    `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/auth/login`
  );
  return data;
};

export const useQueryLogin = () =>
  useQuery<Login, Error>({
    queryKey: ['login'],
    queryFn: login,
    cacheTime: 10000,
    staleTime: 0,
  });

const signup = async () => {
  const { data } = await axios.post<Signup>(
    `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/auth/signup`
  );
  return data;
};

export const useQuerySignup = () =>
  useQuery<Signup, Error>({
    queryKey: ['signup'],
    queryFn: signup,
    cacheTime: 10000,
    staleTime: 0,
  });
