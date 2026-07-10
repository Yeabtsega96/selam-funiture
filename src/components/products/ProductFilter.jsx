import "./ProductFilter.css";

const ProductFilter = ({
  search,
  setSearch,
  sort,
  setSort,
  filteredProducts,
}) => {
  return (
    <section className="product-filter">

      <div className="filter-controls">

        <label htmlFor="search" className="sr-only">
          Search furniture
        </label>

        <input
          id="search"
          type="search"
          placeholder="Search furniture..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
          aria-label="Search furniture"
        />

        <label htmlFor="sort" className="sr-only">
          Sort products
        </label>

        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort products"
        >
          <option value="featured">Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="best-rated">Best Rated</option>
        </select>

      </div>

      <p className="product-count">
        <strong>{filteredProducts.length}</strong> Products
      </p>

    </section>
  );
};

export default ProductFilter;