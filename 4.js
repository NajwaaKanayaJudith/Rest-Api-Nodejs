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

// end-point "/BMI" dengan method POST
app.post("/BMI", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let berat = Number(req.body.berat) // mengambil nilai berat dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi dari body

    let hasil = berat / tinggi**2
    if (hasil < 18.5){
        status = "Kekurangan berat badan"
    }else if(hasil >= 18.5 && hasil <= 24.9){
        status = "Normal (ideal)"
    }else if(hasil >= 25.0 && hasil <= 29.9){
        status = "Kelebihan berat badan"
    }else{
        status = "Kegemukan (obesitas)"
    }

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        berat: berat,
        hasil: hasil,
        status: status
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})