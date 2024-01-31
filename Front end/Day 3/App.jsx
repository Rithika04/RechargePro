import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import RegistrationForm from "./pages/RegistrationForm";
import AdminLoginForm from "./pages/AdminLoginForm";
import UserTypeSelection from "./pages/UserTypeSelection";
import UserHomePage from "./pages/UserHomePage";
import AdminHomePage from "./pages/AdminHomePage";
import UserNavigation from "./pages/UserNavigation";
import AdminNavigation from "./pages/AdminNavigation";
import UserSidebar from "./pages/UserSidebar";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import RechargePlansPage from "./pages/RechargePlansPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserSupportPage from "./pages/UserSupportPage";
import UserFeedbackPage from "./pages/UserFeedbackPage";
import UserPaymentPage from "./pages/UserPaymentPage";
import UserAddOnsPage from "./pages/UserAddOnsPage";
import AdminSidebar from "./pages/AdminSidebar";
import AdminProfilePage from "./pages/AdminProfilePage";
import AdminPrepaidPlansPage from "./pages/AdminPrepaidPlansPage";
import AdminPostPaidPlans from "./pages/AdminPostPaidPlans";
import AdminAddonsPage from "./pages/AdminAddonsPage";
import AdminRechargeHistoryPage from "./pages/AdminRechargeHistoryPage";

import AdminReports from "./pages/AdminReports";
import AdminSupportPage from "./pages/AdminSupportPage";

//import RechargePlans from "./pages/RechargePlans";
//import TransactionHistory from "./pages/TransactionHistory";

//import Home from "./pages/Home";
//import About from "./pages/About";
//import Navbar from "./components/Navbar";

// import NavigationBar from "./components/NavigationBar";
//import AdminLoginForm from "./assets/pages/AdminLoginForm";
//import Dashboard from "./assets/pages/Dashboard";

function App() {
  

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<UserTypeSelection/>}/>
       
        <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
        <Route path="/AdminLoginForm" element={<AdminLoginForm/>}/>
        <Route path="/LoginForm" element={<LoginForm/>}/>
        <Route path="/UserHomePage" element={<UserHomePage/>}/>
        <Route path="/AdminHomePage" element={<AdminHomePage/>}/>
        <Route path="/UserNavigation" element={<UserNavigation/>}/>
        <Route path="/AdminNavigation" element={<AdminNavigation/>}/>
        <Route path="/UserSidebar" element={<UserSidebar/>}/>
        <Route path="/TransactionHistoryPage" element={<TransactionHistoryPage/>}/>
        <Route path="/RechargePlansPage" element={<RechargePlansPage/>}/>
        <Route path="/UserProfilePage" element={<UserProfilePage/>}/>
      
        <Route path="/UserSupportPage" element={<UserSupportPage/>}/>
        <Route path="/UserFeedbackPage" element={<UserFeedbackPage/>}/>
        <Route path="/UserPaymentPage" element={<UserPaymentPage/>}/>
        <Route path="/UserAddOnsPage" element={<UserAddOnsPage/>}/>
        <Route path="/AdminSidebar" element={<AdminSidebar/>}/>
        <Route path="/AdminProfilePage" element={<AdminProfilePage/>}/>
        <Route path="/AdminPrepaidPlansPage" element={<AdminPrepaidPlansPage/>}/>
        <Route path="/AdminPostPaidPlans" element={<AdminPostPaidPlans/>}/>
        <Route path="/AdminAddonsPage" element={<AdminAddonsPage/>}/>
        <Route path="/AdminRechargeHistoryPage" element={<AdminRechargeHistoryPage/>}/> 
        <Route path="/AdminReports" element={<AdminReports/>}/>
        <Route path="/AdminSupportPage" element={<AdminSupportPage/>}/>
        {/* <Route path="/RechargePlans" element={<RechargePlans/>}/> */}
        {/* <Route path="/TransactionHistory" element={<TransactionHistory/>}/> */}
        
      </Routes>
    </Router>
    
  )
}

export default App