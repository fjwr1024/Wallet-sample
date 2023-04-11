import assert from 'assert';
import { Metaplex } from '@solana-suite/nft';
import { Pubkey, Secret } from '@solana-suite/shared';

// TODO: pincode 認証実装後に実装
// owner.secret を 呼び出す前に pincode から都度生成
export const pertialSign = async (
  mint: string,
  owner: { pubkey: Pubkey; secret: Secret },
  dest: { pubkey: Pubkey },
  feePayer: { pubkey: Pubkey; secret: Secret }
) => {
  const inst = await Metaplex.feePayerPartialSignTransferNft(
    mint,
    owner.pubkey,
    dest.pubkey,
    [owner.secret],
    feePayer.secret
  );

  let hex = '';
  inst.match(
    (ok) => {
      hex = ok.hexInstruction;
      console.log('# hex instruction: ', hex);
    },
    (err) => assert.fail(err.message)
  );
};
