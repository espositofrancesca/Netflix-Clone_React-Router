import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyBody from "./components/MyBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import TvShow from "./components/TvShow";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <>
        {" "}
        <MyNavbar />
        <Routes>
          <Route path="/" element={ <MyBody />}/>
          <Route path="/tvshow" element={<TvShow/>}/>
          <Route path="/detail/:filmId" element={<MovieDetails/>}/>

         <Route path="*" element={ <NotFound />}/>
        </Routes>
        <MyFooter />
        

      </>
    </BrowserRouter>
  );
}

export default App;
