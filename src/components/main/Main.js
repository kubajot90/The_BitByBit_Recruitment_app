import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Search from "./search/Search";
import Users from "./users/Users";
import Charts from "./charts/Charts";

import classes from "./Main.module.css";

function Main() {
  return (
    <div className={classes.Main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/users" element={<Users />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </div>
  );
}

export default Main;
