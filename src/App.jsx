// import "./App.css";
import "./server.js";
import Home from "./Home";
import About from "./About";
import VanLife, { loader as vanloading } from "./VanLife";
import VanDetail, { loader as VanDetailloader } from "./VanDetail";
import HostLayout from "./container/HostLayout";
import Dashboard, {loader as HostDashboardLoader} from './Host/Dashboard.jsx'
import Income from "./Host/Income";
import Reviews from "./Host/Reviews";
import HostVans,{loader as HostVanLoader} from "./Host/HostVans";
import HostVansDetail, { loader as HosVanLoader } from "./Host/HostVansDetail";
import HostVanInfo from "./Host/HostVanInfo";
import HostVanPhotos from "./Host/HostVansPhotos";
import HostVanPricing from "./Host/HostVanPricing";
import NotFound from "./NotFound";
import Error from "./Error";
import Login, {
  loader as loginLoader,
  action as FormloginAction,
} from "./Login";
import { requireAuth } from "./util.jsx";

import Layout from "./container/Layout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error/>}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/login"
        element={<Login />}
        loader={loginLoader}
        action={FormloginAction}
      />
      <Route
        path="/vans"
        element={<VanLife />}
        loader={vanloading}
        errorElement={<Error />}
      />
      <Route
        path="/vans/:id"
        element={<VanDetail />}
        loader={VanDetailloader}
      />

      <Route
        path="host"
        element={<HostLayout />}
        loader={async ({request})=> await requireAuth(request)}
      >
        <Route
          index
          element={<Dashboard />}
          loader={HostDashboardLoader}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({request})=> await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({request})=> await requireAuth(request)}
        />
        <Route path="vans" element={<HostVans /> } loader={HostVanLoader} />
        <Route
          path="vans/:id"
          element={<HostVansDetail />}
          loader={HosVanLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({request})=> await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({request})=> await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({request})=> await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
