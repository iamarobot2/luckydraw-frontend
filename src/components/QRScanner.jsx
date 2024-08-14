import QrScanner from 'react-qr-scanner';

export default function QRScanner({ onScan }) {
  const handleScan = (data) => {
    if (data) {
      onScan(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: '100%',
  };

  return (
    <div className="qr-scanner">
      <h2>Scan QR Code</h2>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  );
}
