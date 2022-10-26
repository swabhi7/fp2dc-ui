import { Route, Routes } from "react-router-dom";
import Navbar from "./components/features/Navbar/Navbar.component";
import AboutPage from "./components/pages/AboutPage.component";
import ChefSaysPage from "./components/pages/ChefSaysPage.component";
import ContactPage from "./components/pages/ContactPage.component";
import HomePage from "./components/pages/HomePage.component";
import NotFoundPage from "./components/pages/NotFoundPage.component";
import RecipesPage from "./components/pages/RecipesPage.component";
import SigninPage from "./components/pages/SigninPage.component";

const App = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/chefsays" element={<ChefSaysPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>
);

export default App;
