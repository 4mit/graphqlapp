import HomeScreen from "./pages/HomeScreen";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MeetingsContainer from "./pages/MeetingsContainer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="add-meeting" element={<MeetingsContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
