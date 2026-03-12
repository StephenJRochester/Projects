import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");    // state for hello
  const [message2, setMessage2] = useState("");  // state for goodbye

  // Fetch hello message on mount
  useEffect(() => {
    fetch("http://127.0.0.1:8000/hello/")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  // Function to fetch goodbye message on button click
  const fetchGoodbye = () => {
    fetch("http://127.0.0.1:8000/bye/")
      .then(res => res.json())
      .then(data => setMessage2(data.message2)) // ✅ update state here
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>{message}</h1>
      <p>This is a full stack application with React and Django!</p>

      <button onClick={fetchGoodbye}>Say Goodbye</button>

      {/* Only show goodbye message if it exists */}
      {message2 && <h2>{message2}</h2>}
    </div>
  );
}

export default App;