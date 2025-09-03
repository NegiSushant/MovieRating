import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarRating from "./StarRating";
import App1 from "./App1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App1 />
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["first", "second", "third", "fourth", "fifth"]}
    />
    <StarRating size={24} color="green" className="test" defaultRating={3} /> */}
  </StrictMode>
);
