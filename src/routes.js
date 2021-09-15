import Market from "views/Market.js";
import LiquidityPool from "views/LiquidityPool.js";
import Portfolio from "views/Portfolio.js";
import SpaceportPage from "views/SpaceportPage.js";
import LaunchPodsPage from "views/LaunchPodsPage.js";
import Swap from "views/Swap.js";
import Savings from "views/Savings.js";
import InnovationHubPage from "views/InnovationHubPage.js";

var routes = [
  {
    path: "/market",
    name: "Market",
    icon: "nc-icon nc-bank",
    component: Market,
    layout: "/a",
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: "nc-icon nc-diamond",
    component: Portfolio,
    layout: "/a",
  },
  {
    path: "/swap",
    name: "Swap",
    icon: "nc-icon nc-pin-3",
    component: Swap,
    layout: "/a",
  },
  {
    path: "/liquidity-Pool",
    name: "Liquidity Pools",
    icon: "nc-icon nc-bell-55",
    component: LiquidityPool,
    layout: "/a",
  },
  {
    path: "/savings",
    name: "Savings",
    icon: "nc-icon nc-single-02",
    component: Savings,
    layout: "/a",
  },
  {
    path: "/launchpods",
    name: "Launchpods",
    icon: "nc-icon nc-tile-56",
    component: LaunchPodsPage,
    layout: "/a",
  },
  {
    path: "/spaceport-ido",
    name: "Spaceport IDO",
    icon: "nc-icon nc-caps-small",
    component: SpaceportPage,
    layout: "/a",
  },
  {
    path: "/innovation-Hub",
    name: "Innovation Hub",
    icon: "nc-icon nc-spaceship",
    component: InnovationHubPage,
    layout: "/a",
  },
];
export default routes;
