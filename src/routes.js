import P2PPage from "views/P2PPage.js";
import PoolsPage from "views/PoolsPage.js";
import Portfolio from "views/Portfolio.js";

import Swap from "views/Swap.js";
import Savings from "views/Savings.js";
import InnovationHubPage from "views/InnovationHubPage.js";

var routes = [
  {
    path: "/p2p",
    name: "P2P Lend/Borrow",
    icon: "nc-icon nc-bank",
    component: P2PPage,
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
    path: "/Pools",
    name: "Lend/Borrow Pools",
    icon: "nc-icon nc-bell-55",
    component: PoolsPage,
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
    path: "/innovation-Hub",
    name: "Innovation Hub",
    icon: "nc-icon nc-spaceship",
    component: InnovationHubPage,
    layout: "/a",
  },
];
export default routes;
