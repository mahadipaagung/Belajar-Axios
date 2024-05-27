// DEFINE AREA
const axios = require('axios')
console.log("Mencoba koneksi ke dummyjson API...")

// GET
axios.get('https://dummyjson.com/comments/')
    .then((response) => {
        const komen = response.data
        console.log("Informasi komen: ")
        console.log(komen)
        console.log(`Isi comment: ${komen.body}`)
    })
    .catch(error => console.error("Error", error.message))

// POST
const dataPost = {
    id: 31,
    body: 'Mantap coy!',
    postId: 515,
    likes: 5,
    user: { id: 501, username: 'callista', fullName: 'Sharon Callista'},
}
axios.post('https://dummyjson.com/comments/add', dataPost)
    .then((response) => {
        const komen = response.data
        console.log("Informasi Komen: ", komen)
    })
    .catch(error => console.error("Error: ", error.message))

// PUT
const dataPut = {
    id: 1,
    body: "Nice Body!",
    likes: 5000,
}
axios.put('https://dummyjson.com/comments/1', dataPut)
    .then(response => console.log(response.data))
    .catch(error => console.error("Error: ", error.message))

// DELETE
axios.delete('https://dummyjson.com/comments/1')
    .then(response => console.log(response.data))
    .catch(error => console.log("Error: ", error.message))

// TOKEN
axios.post('https://dummyjson.com/auth/login', {
    username: 'emilys',
    password: 'emilyspass',
}).then(console.log)

// get auth by earned token
const token = axios.create({
    baseURL: 'https://dummyjson.com/auth/me',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MTY3Nzk0MjgsImV4cCI6MTcxNjc4MzAyOH0.-2kqes0Cup-MoHyY4W0tziDHezM7mVhvOlEVh49g7Ws'
    }
})

token.get().then(response => console.log(response.data)).catch(error => console.log(error.message))