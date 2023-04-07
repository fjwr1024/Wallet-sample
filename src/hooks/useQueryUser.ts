import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../types/User';

const getUser = async () => {
  const { data } = await axios.get<User[]>(
    `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/users/user-info/me`
  );
  return data;
};

export const useQueryUsers = () =>
  useQuery<User[], Error>({
    queryKey: ['user'],
    queryFn: getUser,
    cacheTime: 10000,
    staleTime: 0,
  });
