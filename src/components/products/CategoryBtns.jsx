import Button from "../Button";
import "./CategoryBtns.css";

const categories = [
  { label: "All", value: "all" },
  { label: "Living Room", value: "Living Room" },
  { label: "Bedroom", value: "Bedroom" },
  { label: "Dining", value: "Dining" },
  { label: "Office", value: "Office" },
  { label: "Hotel & Restaurant", value: "Restaurant" },
];

const CategoryBtns = ({ category, setCategory }) => {
  return (
    <section
      className="filter-btns"
      aria-label="Product Categories"
    >
      {categories.map((item) => (
        <Button
          key={item.value}
          size="sm"
          variant={category === item.value ? "primary" : "white"}
          onClick={() => setCategory(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </section>
  );
};

export default CategoryBtns;