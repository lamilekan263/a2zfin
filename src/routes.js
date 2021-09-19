//import P2PPage from "views/P2PPage.js";
import PoolsPage from "views/PoolsPage.js";
import Portfolio from "views/Portfolio.js";

import Swap from "views/Swap.js";
import Savings from "views/Savings.js";
import BridgePage from "views/BridgePage.js";

var routes = [
  {
    path: "https://a2zfindev.netlify.app/",
    name: "P2P Lend/Borrow",
    icon: "people-outline",
    isExternal: true,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: "briefcase-outline",
    component: Portfolio,
    layout: "/a",
  },
  {
    path: "/swap",
    name: "Swap",
    icon: "swap-vertical-outline",
    component: Swap,
    layout: "/a",
  },
  {
    path: "/Pools",
    name: "Lend/Borrow Pools",
    icon: "business-outline",
    component: PoolsPage,
    layout: "/a",
  },
  {
    path: "/savings",
    name: "Savings",
    icon: "wallet-outline",
    component: Savings,
    layout: "/a",
  },

  {
    path: "/bridge",
    name: "Bridge",
    icon: "rocket-outline",
    component: BridgePage,
    layout: "/a",
  },
];
export default routes;
