const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true})
  .then(()=>{
    console.log('mongo connection open')
  })
  .catch(err =>{
    console.log('mongo connection error')
    console.log(err)
  })

const p = new Product({
  name: 'Ruby Grapefruit',
  price: 1.99,
  category: 'fruit'
})
p.save().then(()=>{
  console.log(p)
})
.catch(err => {
  console.log(err)
})

const seedProducts = [
  {
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
  },
  {
    name: 'Apple',
    price: 1.00,
    category: 'fruit'
  },
  {
    name: 'Celery',
    price: 0.50,
    category: 'vegetable'
  },
  {
    name: 'Chocolate milk',
    price: 5.00,
    category: 'dairy'
  }
]

Product.insertMany(seedProducts)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})