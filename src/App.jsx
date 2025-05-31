import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Spinner from "./ui/Spinner";
import Header from "./features/Header/Header";
import Dashboard from "./features/Dashboard/Dashboard";
import { updateDashboardState } from "./features/Dashboard/dashboardSlice";

export default function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        setIsLoading(true);
        const res = await fetch("./data.json");
        const data = await res.json();
        dispatch(updateDashboardState(data.categories));
        setIsLoading(false);
      }

      fetchData();
    },
    [dispatch],
  );

  return (
    <div className="relative flex min-h-screen flex-col gap-12 overflow-hidden bg-indigo-100 p-2 sm:p-4 md:p-8">
      <Header />

      {isLoading ? <Spinner /> : <Dashboard />}
    </div>
  );
}
