import Container from '../components/Container'
import FilterSection from '../components/FilterSection'
import ProductsList from '../components/ProductsList'

const Home = () => {
  return (
    <div className="display">
      <FilterSection />
      <main className="display-main">
        <ProductsList />
      </main>
    </div>
  )
}

export default Home
