import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };

  const handleFour = () => {
    const updateRuns = runs + 4;
    setRuns(updateRuns);
  };

  const handleSix = () => {
    const updateRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(updateRuns);
  };

  return (
    <div>
      <h3>Player: Kaka</h3>
      <p><small>Six: {sixes}</small></p>
      {runs > 50 && <p>Hurray!!! Half Century</p>}
      <h3>Score: {runs}</h3>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
