import { useEffect, useState } from 'react';
import { RecoilState, useRecoilValueLoadable } from 'recoil';

export function useClientSideRecoilValue<T>(
  recoilState: RecoilState<T>
): T | undefined {
  const [isMounted, setIsMounted] = useState(false);
  const loadable = useRecoilValueLoadable(recoilState);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return undefined;
  }

  return loadable.state === 'hasValue' ? loadable.contents : undefined;
}
