import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { User } from '../types/User';
import { userState } from '@/stores/atoms';

export const useQueryUser = () => {
  const setUser = useSetRecoilState(userState);

  const getUser = async () => {
    const { data } = await axios.get<User>(
      `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/users/user-info/me`
    );
    console.log('data', data);
    return data;
  };

  const useQueryUserData = () =>
    useQuery<User, Error>({
      queryKey: ['user'],
      queryFn: getUser,
      cacheTime: 10000,
      staleTime: 0,
      onSuccess: (data) => {
        setUser(data);
      },
    });

  const useQueryGetSol = useMutation(
    async (walletAddress: string) => {
      const { data } = await axios.post<string>(
        `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/users/get-sol`,
        { walletAddress }
      );
      return data;
    },
    {
      onSuccess: (res) => {
        console.log('success', res);
      },
      onError: (err: any) => {
        if (err.response.status) {
          console.log('error', err.response.data.message);
        }
      },
    }
  );

  const useQueryGetNFT = useMutation(
    async (walletAddress: string) => {
      const { data } = await axios.post<string>(
        `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/nft/get-list`,
        { walletAddress }
      );
      return data;
    },
    {
      // onSuccess: (res) => {
      //   console.log('success', res);
      // },
      onError: (err: any) => {
        if (err.response.status) {
          console.log('error', err.response.data.message);
        }
      },
    }
  );

  return { useQueryUserData, useQueryGetSol, useQueryGetNFT };
};
