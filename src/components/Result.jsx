
function Result({ data }) {
  return (
    <div className="result">
      {data.winner ? (
        <div className="result-message success">
          <h2>Congratulations!</h2>
          <p>You have won a 100 rupees food coupon.</p>
        </div>
      ) : (
        <div className="result-message failure">
          <h2>Sorry!</h2>
          <p>You did not win this time.</p>
        </div>
      )}
    </div>
  );
}

export default Result;
