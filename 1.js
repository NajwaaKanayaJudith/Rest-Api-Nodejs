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

// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai sisi dari body

    let volume = sisi**3
    let luas_permukaan = 6 * sisi**2

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengambil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi dari body

    let volume = panjang * lebar * tinggi
    let luas_permukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let phi = Number(req.body.phi) // mengambil nilai phi dari body
    let jari2 = Number(req.body.jari2) // mengambil nilai jari-jari dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi dari body

    let volume = phi * jari2**2 * tinggi
    let luas_permukaan = 2 * phi * jari2 * (jari2 + tinggi)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        phi: phi,
        jari2: jari2,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/limas_segiempat" dengan method POST
app.post("/limas_segiempat", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai sisi dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi dari body

    let luas_sisi = sisi * tinggi / 2
    let volume = sisi**2 + tinggi / 3
    let luas_permukaan = sisi**2 + luas_sisi * 4

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        tinggi: tinggi,
        luas_sisi: luas_sisi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})