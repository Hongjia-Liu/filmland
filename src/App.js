import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Movies, MovieInformation, Actors, Profile, Error } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <CssBaseline />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
