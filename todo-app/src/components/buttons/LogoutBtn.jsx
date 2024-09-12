import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";

function LogoutBtn({children, className = "", textColor = "text-gray-900" }) {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logoutAccount()
        .then(()=> dispatch(logout()))
        .catch(()=> console.log(error))
    }

  return (
    <button
      type="button"
      className={` ${className} ${textColor} py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
