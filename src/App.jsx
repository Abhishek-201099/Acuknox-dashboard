import { useEffect, useState } from "react";
import Dashboard from "./features/Dashboard/Dashboard";
import Header from "./features/Header/Header";
import { useDispatch } from "react-redux";
import { updateDashboardState } from "./features/Dashboard/dashboardSlice";
import Spinner from "./ui/Spinner";

export default function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        setIsLoading(true);
        // await new Promise((resolve) => setTimeout(resolve, 3000));
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
    <div className="relative flex min-h-screen flex-col gap-12 overflow-hidden bg-gray-300 p-2 sm:p-4 md:p-8">
      <Header />

      {isLoading ? <Spinner /> : <Dashboard />}
    </div>
  );
}
