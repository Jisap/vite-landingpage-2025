
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="text-zinc-100 bg-black p-4">
      <Navbar />
      <div>
        <HomePage />
      </div>
    </div>
  ) 
};

export default App;
