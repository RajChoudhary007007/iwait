import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Registration from "./components/Registration";
import workerRegistrasion from "./components/workerRegistrasion";
import Login from "./components/Login";
import Forgate from "./components/Forgate";
import Reaset from "./components/Reaset";
import Otp from "./components/Otp";
import ResetPass from "./components/ResetPass";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Ourmission from "./components/Ourmission";
import Howbework from "./components/Howbework";
import TermConditions from "./components/TermConditions";
import Iwaitservies from "./components/Iwaitservies";
import Ichairservises from "./components/Ichairservises";
import Home2 from "./components/Home2";
import Mywalletuser from "./components/Mywalletuser";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashbord from "./components/Dashbord";
import MyJobs from "./components/MyJobs";
import BestMatches from "./components/BestMatches";
import ComplitedJobs from "./components/ComplitedJobs";
import Logout from "./components/Logout";
import DashbordAdmin from "./components/DashbordAdmin";
import WorkerAccount from "./components/WorkerAccount";
import AccountAdmin from "./components/AccountAdmin";
import WorkerAdmin from "./components/WorkerAdmin";
import UserAdmin from "./components/UserAdmin";
import JobsAdmin from "./components/JobsAdmin"; 
import LogoutAdmin from "./components/LogoutAdmin"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/worker-resgistrasion" component={workerRegistrasion}/>

      {/* // admin dashbord */}
      <ProtectedRoute exact path="/dashbord-admin" component={DashbordAdmin} />
      <ProtectedRoute exact path="/account-admin" component={AccountAdmin} />
      <ProtectedRoute exact path="/worker-admin" component={WorkerAdmin} />
      <ProtectedRoute exact path="/user-admin" component={UserAdmin} />
      <ProtectedRoute exact path="/jobs-admin" component={JobsAdmin} />
      <ProtectedRoute exact path="/logout-admin" component={LogoutAdmin} />
      
 
      {/* // worker page dashbord */}
      <ProtectedRoute exact path="/dashbord" component={Dashbord} />
      <ProtectedRoute exact path="/worker-account" component={WorkerAccount} />
      <ProtectedRoute exact path="/my-jobs" component={MyJobs} />
      <ProtectedRoute exact path="/best-matches" component={BestMatches} />
      <ProtectedRoute exact path="/complited-jobs" component={ComplitedJobs} />
      <ProtectedRoute exact path="/logout" component={Logout} />

      {/* // user section */}
      <ProtectedRoute exact path="/" component={Home2} />
      <ProtectedRoute exact path="/home" component={Howbework} />
      <ProtectedRoute exact path="/forgate" component={Forgate} />
      <ProtectedRoute exact path="/otp/:id" component={Otp} />
      <ProtectedRoute exact path="/reset-pass" component={ResetPass} />
      <ProtectedRoute exact path="/reaset" component={Reaset} />
      <ProtectedRoute exact path="/aboutus" component={Aboutus} />
      <ProtectedRoute exact path="/ourmission" component={Ourmission} />
      <ProtectedRoute exact path="/mywallet-user" component={Mywalletuser} />
      
      <ProtectedRoute
        exact
        path="/term-conditions"
        component={TermConditions}
      />
      <ProtectedRoute exact path="/iwaitservies" component={Iwaitservies} />
      <ProtectedRoute exact path="/ichairservises" component={Ichairservises} />
      <ProtectedRoute exact path="/profile" component={Profile} />
    </Switch>
    <Footer />
  </BrowserRouter>
);
export default App;
