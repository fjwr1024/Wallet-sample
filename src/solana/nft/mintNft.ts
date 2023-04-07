/* eslint-disable no-return-await */
import assert from 'assert';
import { Metaplex } from '@solana-suite/nft';
import { Pubkey, Node } from '@solana-suite/shared';
import { NftStorage } from '@solana-suite/storage';

export const uploadContents = async (
  name: string,
  description: string,
  filePath: ArrayBuffer
) => {
  const asset = {
    name,
    description,
    filePath,
  };

  const url = await NftStorage.uploadMetadata(asset);

  if (url.isErr) {
    assert(url.error);
  }

  console.log('url', url.unwrap());

  return url.unwrap();
};

export const mintNft = async (
  file: ArrayBuffer,
  name: string,
  description: string,
  walletAddress: string,
  feePayer: string
) => {
  const inst1 = await Metaplex.mint(walletAddress, feePayer, {
    filePath: file,
    name,
    symbol: 'NFT',
    royalty: 0,
    storageType: 'nftStorage',
    description,
  });

  (await inst1.submit()).match(
    async (value) => await Node.confirmedSig(value, 'finalized'),
    (error) => console.log(error)
  );

  const mint = inst1.unwrap().data as Pubkey;
  console.log('mint', mint);
  return { message: 'mint completed' };
};
