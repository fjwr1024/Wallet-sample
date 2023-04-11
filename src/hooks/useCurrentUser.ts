import { useClientSideRecoilValue } from './useClientSideRecoilValue';
import { userState } from '@/stores/atoms';

export function useCurrentUser() {
  const currentUser = useClientSideRecoilValue(userState);
  const isAuthChecking = currentUser === undefined;

  return {
    currentUser,
    isAuthChecking,
  };
}
