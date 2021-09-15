import Market from "views/Market.js";
import LiquidityPool from "views/LiquidityPool.js";
import Portfolio from "views/Portfolio.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Swap from "views/Swap.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/market",
    name: "Market",
    icon: "nc-icon nc-bank",
    component: Market,
    layout: "/admin",
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: "nc-icon nc-diamond",
    component: Portfolio,
    layout: "/admin",
  },
  {
    path: "/swap",
    name: "Swap",
    icon: "nc-icon nc-pin-3",
    component: Swap,
    layout: "/admin",
  },
  {
    path: "/liquidity-Pool",
    name: "Liquidity Pools",
    icon: "nc-icon nc-bell-55",
    component: LiquidityPool,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Savings",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Launchpods",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Spaceport IDO",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Innovation Hub",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin",
  },
];
export default routes;
