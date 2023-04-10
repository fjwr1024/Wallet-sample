/* eslint-disable react/prop-types */
import QRCode from 'qrcode.react';
import React from 'react';

type QRCodeGeneratorProps = {
  qrText: string;
};

export const QRCodeGenerator = ({ qrText }: QRCodeGeneratorProps) => (
  <div>
    <QRCode value={qrText} />
  </div>
);

export default QRCodeGenerator;
