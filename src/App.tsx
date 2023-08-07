import { HomePage } from "./pages/HomePage";
import classes from './App.module.css'
import { SiteFooter } from "./components/SiteFooter";

function App() {
  return (
    <div className={classes.site}>
      <header className={`content-wrapper ${classes.siteHeader}`}>
        <h1>Brand Name </h1>     
        <nav>
          link1
          link2
          link3
        </nav>
      </header>
      <main  className={`content-wrapper ${classes.siteContent}`}>
        <HomePage />          
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
