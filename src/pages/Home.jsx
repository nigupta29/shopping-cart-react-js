import ProductsList from '../components/ProductsList'
import PageLayout from '../layouts/PageLayout'

const Home = () => {
  return (
    <PageLayout title={'Trending Products'}>
      <ProductsList />
    </PageLayout>
  )
}

export default Home
