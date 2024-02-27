const baseUrl = 'https://fakestoreapi.com/products'


function singleProdct(productId) {
    return `${baseUrl}/${productId}`
}
axios.get(singleProdct(10))
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))


const categoriesUrl = 'https://fakestoreapi.com/products/category'
function categoriesData() {
    return `${categoriesUrl}/men's clothing`
}
axios.get(categoriesData())
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))

const cartsUrl = 'https://fakestoreapi.com/carts'
function cartsIDs(cartsId) {
    return `${cartsUrl}/${cartsId}`
}
axios.get(cartsIDs(3))
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))




// const categories = {
//     ele: 'electronics',
//     jewe: "jewelery",
//     men: "men's clothing",
//     women: "women's clothing"
// }

// function categoriesData(item) {
//     return `${baseUrl}/categories/${categories.ele}`
// }
// axios.get(categoriesData())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))















//GET
//GET request is to get the data from the APIs through with the HTTP links

// axios.get('https://reqres.in/api/users?page=2')
//     .then((res) => console.log(res.))
//     .catch((err) => console.log(err))



//POST
//POST request for the add the data to previous data.

// axios.post('https://reqres.in/api/users', {
//     name: "john",
//     job: "Developer"
// })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

//PUT
//PUT request for the update the previous data.

// axios.put('https://reqres.in/api/users/3', {
//     name: "mark",
//     job: "Gardener"
// })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

//DELETE
//DELETE request for the delete the existed data.

// axios.delete('https://reqres.in/api/users/3')
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))