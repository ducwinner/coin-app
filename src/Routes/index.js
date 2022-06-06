import CoinDetail from "../pages/CoinDetail";
import Home from "../pages/Home";
import News from "../pages/News";

const publicRouter = [
  { path: "/", component: Home },
  { path: "/new", component: News },
  { path: "/coin", component: CoinDetail },
];

const privateRouter = [];
export { publicRouter, privateRouter };
