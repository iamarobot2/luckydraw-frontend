import QRCode from 'qrcode.react';

function DisplayQRCode() {
  return (
    <div>
      <h2>Scan this QR code:</h2>
      <QRCode value="http://localhost:4500/scan" />
    </div>
  );
}

export default DisplayQRCode;
