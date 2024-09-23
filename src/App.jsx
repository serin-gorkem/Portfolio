import Landing from "./Landing";
import { BrowserRouter } from "react-router-dom";
function App() {
  /* I plan to add two main page (Landing and Showcase), three sections (Home Work WhatIDo ) and two component(navbar and footer) */
  return (
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
}

export default App;
