import { HomePage } from "./pages/HomePage";
import classes from './App.module.css'
import { NavbarLink } from "./components/nav";
import { SiteFooter } from "./components/SiteFooter";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  // @todo implement auth required routes https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
  // @todo extract site header to component
  const MainPageLayout = () => (
    <div className={classes.site}>
      <header className={`content-wrapper ${classes.siteHeader}`}>
        <h1 className={classes.navTitle}> Brand Name </h1>
        <NavbarLink />
      </header>
      <main className={`content-wrapper ${classes.siteContent}`}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
