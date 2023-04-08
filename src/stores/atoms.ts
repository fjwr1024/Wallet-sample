import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { User } from '../types/User';

const { persistAtom } = recoilPersist();

export const userState = atom<User | undefined>({
  key: 'userState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
