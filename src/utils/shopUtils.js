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

// {
//   "id": "e69f2297-4fc0-4050-93f7-8027edb27288",
//   "title": "Oriental Concrete Sausages",
//   "img_src": "https://loremflickr.com/640/480/abstract?lock=5109053539745792",
//   "price": "642.00",
//   "stock": 4,
//   "quantity": 1
// }
