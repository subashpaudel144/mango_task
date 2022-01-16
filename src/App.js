import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstHeader from "./Components/FirstHeader/FirstHeader";
import Form from "./Components/Form/Form";
import FourthHeader from "./Components/FourthHeader/FourthHeader";
import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import SecondHeader from "./Components/SecondHeader/SecondHeader";
import ThirdHeader from "./Components/ThirdHeader/ThirdHeader";
import TicketDetails from "./Components/TicketDetails/TicketDetails";
import Knowledgebase from "./Components/Knowledgebase/Knowledgebase";
import Home from "./Components/Home/Home";
import News from "./Components/News/News";
import Admin from "./Components/Admin/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <FirstHeader />
        <SecondHeader />
        <ThirdHeader />
        <FourthHeader />
        <div className="body">
          <div className="appleft">
            <Login />
          </div>
          <div className="appright">
            <Search />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/submitticket" element={<Form />} />
              <Route path="/ticketdetails" element={<TicketDetails />} />
              <Route path="/knowledgebase" element={<Knowledgebase />} />
              <Route path="/news" element={<News />} />
              <Route path="/adminpanel" element={<Admin />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
