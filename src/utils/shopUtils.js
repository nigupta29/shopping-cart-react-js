import { faker } from '@faker-js/faker'

export const createRandomProduct = () => {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    img_src: faker.image.urlLoremFlickr({ category: 'abstract' }),
    price: faker.commerce.price({ min: 100, max: 2000 }),
    stock: faker.number.int({ min: 1, max: 5 }),
    rating: faker.number.int({ min: 1, max: 5 })
  }
}
