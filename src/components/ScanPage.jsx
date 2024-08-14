import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ScanPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Generate a random number between 1 and 300
    const randomNumber = Math.floor(Math.random() * 300) + 1;

    // Function to send the random number to the backend
    const sendRandomNumber = async () => {
      try {
        const response = await fetch('https://luckydraw-backend.onrender.com/api/scan', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ qrData: randomNumber.toString() }),
        });

        const resultData = await response.json();
        if (resultData.winner) {
          alert('Congratulations! You have won a 100 rupees food coupon.');
        } else {
          alert('Sorry! You did not win this time.');
        }

        // Redirect back to the home page
        navigate('/');
      } catch (error) {
        console.error('Error scanning QR code:', error);
      }
    };

    sendRandomNumber();
  }, [navigate]);

  return (
    <div>
      <h2>Processing your scan...</h2>
    </div>
  );
}

export default ScanPage;
