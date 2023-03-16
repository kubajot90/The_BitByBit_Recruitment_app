import { useNavigate } from "react-router-dom";
import Card from "./card/Card";
import { FcBusinesswoman } from "react-icons/fc";
// import { MdScreenSearchDesktop } from "react-icons/md";
// import { AiOutlineLineChart } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import { FcPieChart } from "react-icons/fc";
import classes from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={classes.Home}>
      {/* <div className={`container ${classes.userCard}`}>
        <div className={classes.titleWrapper}>
          <span className={classes.title}>Manage your users!</span>
          <span className={classes.subtitle}>
            Manage your users, add and remove them. Edit their personal details.
          </span>
          <button onClick={() => navigate("users")} className={classes.button}>
            More
          </button>
        </div>
        <FcBusinesswoman className={classes.userIcon} />
      </div> */}
      <Card
        navigatePath="users"
        icon={<FcBusinesswoman className={classes.userIcon} />}
        title="Manage your users!"
        subtitle="Manage your users, add and remove them. Edit their personal details"
        backgroundImage="linear-gradient(109.6deg, rgb(253, 254, 167) 11.2%, rgb(23, 180, 191) 91.1%)"
      />
      <div className={classes.cardsWrapper}>
        <Card
          navigatePath="search"
          icon={<FcSearch className={classes.userIcon} />}
          title="Search"
          subtitle="Enter data and find the user"
          width="50%"
        />
        <Card
          navigatePath="charts"
          icon={<FcPieChart className={classes.userIcon} />}
          title="Charts"
          subtitle="Check your user charts"
          width="50%"
        />
      </div>
    </div>
  );
}

export default Home;
