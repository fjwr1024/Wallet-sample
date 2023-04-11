import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { User } from '../types/User';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : localStorage,
});

export const userState = atom<User | undefined | null>({
  key: 'userState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
