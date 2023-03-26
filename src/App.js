import { Button } from "react-bootstrap";

import { toast, ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  const notify = () => toast.status("Very easy");

  return (
    <div className="App">
      <Button onClick={notify}> Test</Button>

      <ToastContainer />
    </div>
  );
}

export default App;
