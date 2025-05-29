import { useSelector } from "react-redux";
import Category from "./Category";
import { getCategories } from "./dashboardSlice";

export default function Dashboard() {
  const categories = useSelector(getCategories);

  if (!categories.length) return <p>No categories to show...</p>;

  return (
    <main className="flex flex-col gap-12">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </main>
  );
}
