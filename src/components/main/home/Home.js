import Card from "./card/Card";
import { FcBusinesswoman } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { FcPieChart } from "react-icons/fc";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.Home}>
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
        />
        <Card
          navigatePath="charts"
          icon={<FcPieChart className={classes.userIcon} />}
          title="Charts"
          subtitle="Check your user charts"
        />
      </div>
    </div>
  );
}

export default Home;
