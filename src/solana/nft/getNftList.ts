import assert from 'assert';

import { Metaplex } from '@solana-suite/nft';

export const getNftMetadata = async (mint: any[]) => {
  const mintArr = mint.map((obj) => obj.mint);

  const response: never[] = [];

  // TODO: loop内で await を利用するとパフォーマンス低下するので、mapやPromise.allを用いて改善する
  // https://note.com/shift_tech/n/nc00ff7e03539
  // for (let i = 0; i < mintArr.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    // const metadata = await Metaplex.findByOwner(mintArr[i].toPublicKey());

    // metadata.match(
    //   (value) => console.log('# metadata: ', value),
    //   (error) => assert(error)
    // );
    // const merged: object = { ...metadata.unwrap(), ...mint[i] };

    // response.push(merged as never);
  // }
  // console.log('arr', response);
  // return response;
};

export const displayUserMetadata = async (walletAddress: string) => {
  // const metadata = await Metaplex.findByOwner(walletAddress);

  // metadata.match(
  //   (value) => console.log('# metadata: ', value),
  //   (error) => assert(error)
  // );

  // return metadata.unwrap();
};

export const getTokenInfoOwned = async (walletAddress: string) => {
  // const response = await (await Metaplex.findByOwner(walletAddress)).unwrap();

  // console.log('owned token info', response);

  // return response;
};
