//import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import classes from './App.module.css'

function App() {
 

  return (
    <div className={classes.site}>
      <header className={classes.siteHeader}>
        <h1>Brand Name </h1>     

        <nav>
          link1
          link2
          link3
          link4
        </nav>
      </header>
      <main className={classes.siteContent}>
        <HomePage />
          
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
