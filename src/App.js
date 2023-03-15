import { UsersContextProvider } from "./context/UserListContextProvider";
import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";
import Main from "./components/main/Main";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <TopBar />
      <SideBar />
      <UsersContextProvider>
        <Main />
      </UsersContextProvider>
    </div>
  );
}

export default App;
