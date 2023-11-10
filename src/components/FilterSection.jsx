import Button from './Button'

const FilterSection = () => {
  return (
    <aside className="sidebar">
      <h3>Filter</h3>
      <ul className="sidebar-list">
        <li>Price : Low to High</li>
        <li>Price : High to Low</li>
        <li>Price : High to Low</li>
        <li>Price : High to Low</li>
      </ul>
      <Button type="primary" large>
        Clear
      </Button>
    </aside>
  )
}

export default FilterSection
