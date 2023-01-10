import {
  addSneakerCount,
  printAddress,
  getFirstTwoArgs,
  getBrandNames,
  getName,
  getSum,
  printUserInfo,
  convertToArray,
  totalSneakerCount,
} from '..'
import { brands } from '../data'

test('getName should return the name attribute from an object', () => {
  expect(getName({ name: 'Benny' })).toBe('Benny')
})

test('printAddress should return a formatted string', () => {
  const input = {
    name: 'Bob Smith',
    address: { street: 'Main Street', number: 123, city: 'Anytown', country: 'USA' },
  }
  expect(printAddress(input)).toBe('Bob Smith lives at 123 Main Street, Anytown, USA')
})

test('printUserInfo should return a formatted string', () => {
  const user = {
    username: 'bobloblaw',
    name: {
      first: 'Bob',
      last: 'Loblaw',
    },
    info: {
      favorites: { food: 'pizza', color: 'purple' },
      pet: { type: 'cat', name: 'Fluffy' },
      address: { street: 'Main Street', number: 123, city: 'Anytown', country: 'USA' },
    },
  }
  expect(printUserInfo(user)).toBe(`
    Username: bobloblaw,
    Full Name: Bob Loblaw,
    Favorite Color: purple,
    Favorite Food: pizza,
    Pet Name: Fluffy,
    Address: 123 Main Street, Anytown, USA
    `)
})

test('getSum should return the sum of inputs', () => {
  expect(getSum(1, 2, 3)).toBe(6)
  expect(getSum(1, 2, 3, 4, 5)).toBe(15)
})

test('getFirstTwoArgs returns the first two arguments as an array', () => {
  expect(getFirstTwoArgs(1, 2, 3, 4, 5)).toStrictEqual([1, 2, [3, 4, 5]])
  expect(getFirstTwoArgs('a', 'b', 'c', 'd')).toStrictEqual(['a', 'b', ['c', 'd']])
})

test('addSneakerCount should append the sneaker count to the object', () => {
  const nike = {
    shoes: ['Air Max', 'Air Force', 'Air Jordan', 'Air Mag', 'Pegasus', 'Kobe'],
    slogan: 'Just Do It',
    logo: 'Swoosh',
    headquarters: 'Portland',
  }
  expect(addSneakerCount(nike).sneakerCount).toBe(6)
  expect(addSneakerCount(nike)).not.toBe(nike)
})

test('getBrandNames should return an array of the names of the sneaker brands', () => {
  expect(getBrandNames(brands)).toStrictEqual(['Nike', 'Puma', 'Adidas'])
})

test('totalSneakerCount should return total number of sneakers', () => {
  expect(totalSneakerCount(brands)).toBe(14)
})

test('convertToArray should convert Object key, value pairs to arrays', () => {
  expect(convertToArray({ a: 1, b: 2, c: 3 })).toStrictEqual([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ])
})
