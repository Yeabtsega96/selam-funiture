import "./FilterSidebar.css";

const FilterSidebar = ({ maxPrice, price, setPrice }) => {
  return (
    <aside
      className="filter-sidebar"
      aria-label="Product filters"
    >
      <div className="filter-group">

        <h3>Price Range</h3>

        <input
          id="price-range"
          type="range"
          min={0}
          max={maxPrice}
          step={100}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          aria-label="Filter by maximum price"
        />

        <div className="price-range">
          <span>ETB 0</span>
          <span>ETB {price.toLocaleString()}</span>
        </div>

      </div>
    </aside>
  );
};

export default FilterSidebar;