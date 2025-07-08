import { useState } from 'react';

function Analyze() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (text.includes('happy')) setResult('😊 Positive');
    else if (text.includes('sad')) setResult('😢 Negative');
    else setResult('😐 Neutral');
  };

  return (
    <div>
      <h2>Analyze Your Text</h2>
      <textarea
        rows="5"
        cols="60"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      />
      <br />
      <button onClick={handleAnalyze}>Analyze</button>
      {result && <p>Sentiment: {result}</p>}
    </div>
  );
}
export default Analyze;
