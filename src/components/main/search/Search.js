import { useState, useContext, useEffect } from "react";
import { usersContext } from "../../../context/UsersContextProvider";
import User from "../users/User";
import { BiSearchAlt } from "react-icons/bi";
import classes from "./Search.module.css";

const Search = () => {
  const { usersList } = useContext(usersContext);
  const [searchList, setSearchList] = useState(null);
  const [modalText, setModalText] = useState("Enter the data");

  const changeHandler = (e) => {
    const keyword = e.target.value;

    const regExp = new RegExp(keyword, "i");
    const filtered = usersList.filter((entry) =>
      Object.values(entry).some(
        (val) => typeof val === "string" && val.match(regExp)
      )
    );
    keyword && filtered.length ? setSearchList(filtered) : setSearchList(null);

    !filtered.length
      ? setModalText("No results...")
      : setModalText("Enter the data");
  };

  return (
    <div className={classes.Search}>
      <div className={classes.inputWrapper}>
        <input
          onChange={changeHandler}
          className={classes.searchInput}
          placeholder="search"
          name="searchUser"
        ></input>
        <BiSearchAlt className={classes.inputIcon} />
      </div>
      <div className="container">
        <ul className={classes.list}>
          {searchList ? (
            searchList.map((data) => (
              <User data={data} showButtons={false} key={data.id} />
            ))
          ) : (
            <div className={classes.resultsWrapper}>
              <span className={classes.resultsText}>
                {/* {!searchList ? "Enter the data" : "No results..."} */}
                {modalText}
              </span>
              <span className={classes.resultsDivider}></span>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Search;
