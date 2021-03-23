import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const CT = ["all", ...new Set(items.map((I) => I.category))];
console.log(CT);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(CT);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="main-section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filtered={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
