const express = require("express") //memanggil library express js
const bodyParser = require("body-parser") //memanggil library body-parser
const cors = require("cors") //memanggil library cors
const app = express()

//penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

//penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

//penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// end-point "/celcius" dengan method POST
app.get("/convert/celcius/:celcius", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let celcius = Number(req.body.celcius) // mengambil nilai celcius dari body

    let reamur = 4 / 5 * celcius
    let fahrenheit = (9 / 5 * celcius) + 32
    let kelvin = celcius + 273

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        celcius: celcius,
        reamur: reamur,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

// end-point "/reamur" dengan method POST
app.get("/convert/reamur/:reamur", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let reamur = Number(req.body.reamur) // mengambil nilai reamur dari body

    let celcius = 5 / 4 * reamur
    let fahrenheit = 9 / 4 * reamur + 32
    let kelvin = 5 / 4 * reamur + 273

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        reamur: reamur,
        celcius: celcius,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/kelvin" dengan method POST
app.get("/convert/kelvin/:kelvin", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let kelvin = Number(req.body.kelvin) // mengambil nilai kelvin dari body

    let celcius = kelvin - 273
    let fahrenheit = (kelvin - 273) * 9 / 5 + 32
    let reamur = 4 / 5 * (kelvin - 273)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        kelvin: kelvin,
        celcius: celcius,
        fahrenheit: fahrenheit,
        reamur: reamur
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/fahrenheit" dengan method POST
app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let fahrenheit = Number(req.body.fahrenheit) // mengambil nilai fahrenheit dari body

    let celcius = 5 / 9 * (fahrenheit - 32)
    let kelvin = ((fahrenheit - 32) * 5 / 9) + 273
    let reamur = 4 / 9 * (fahrenheit - 32)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        fahrenheit: fahrenheit,
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})