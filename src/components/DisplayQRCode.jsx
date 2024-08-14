import QRCode from 'qrcode.react';

function DisplayQRCode() {
  return (
    <div>
      <h2>Scan this QR code:</h2>
      <QRCode value="https://luckydraw-backend.onrender.com/scan" />
    </div>
  );
}

export default DisplayQRCode;
