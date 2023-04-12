import NodeRSA from 'node-rsa';

export const crypt = () => {
  const encryptRsaText = (text: string) => {
    const key = new NodeRSA({ b: 512 });
    // send server side key
    const clientKey = key.exportKey('pkcs1-public-pem');
    const clintPrivateKey = key.exportKey('pkcs1-private-pem');

    const encryptedText = key.encrypt(text, 'base64');
    console.log('encryptedTargetKey ', encryptedText);

    return encryptedText;
  };

  const decryptRsaText = (
    rsaPrivateKey: string,
    encryptedText1: string,
    encryptedText2: string
  ) => {
    try {
      const decryptKey = new NodeRSA(rsaPrivateKey, 'pkcs1-private-pem');
      const decryptedText1 = decryptKey.decrypt(encryptedText1, 'utf8');
      const decryptedText2 = decryptKey.decrypt(encryptedText2, 'utf8');
      return {
        decryptedText1,
        decryptedText2,
      };
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };
  return { encryptRsaText, decryptRsaText };
};
