import { useState } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import QRScanner from './components/QRScanner';
import Result from './components/Result';
import ScanPage from './components/ScanPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [studentData, setStudentData] = useState(null);
  const [result, setResult] = useState(null);

  const handleFormSubmit = (data) => {
    setStudentData(data);
  };

  const handleQRScan = async (scannedData) => {
    const response = await fetch('https://luckydraw-backend.onrender.com/api/scan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...studentData, qrData: scannedData }),
    });

    const resultData = await response.json();
    setResult(resultData);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={!studentData ? (
              <StudentForm onSubmit={handleFormSubmit} />
            ) : !result ? (
              <QRScanner onScan={handleQRScan} />
            ) : (
              <Result data={result} />
            )}
          />
          <Route path="/scan" element={<ScanPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
