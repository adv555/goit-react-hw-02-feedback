function Statistics({ total, percentage, options: { good, neutral, bad } }) {
  return (
    <div>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positiv Feedback: {percentage}</span>
    </div>
  );
}

export default Statistics;
