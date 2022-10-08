import Navbar from "./components/features/Navbar/Navbar.component";
import Recipes from "./components/features/Recipes/Recipes.component";

const App = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <Recipes />
    </main>
  </div>
);

export default App;
