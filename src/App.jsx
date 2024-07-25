import { useState } from "react";
import "./App.css";
import Header from "./components/common/Header";
import ShoesLists from "./components/ShoesComponent/ShoesLists";
import Footer from "./components/common/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-50">
        <Header />
        <ShoesLists />
        <Footer />
      </div>
    </>
  );
}

export default App;
