var data_mentah = {
    "Arabica": [
        {
            "foto": "images/produk/product_capuchino.jpg",
            "nama": "Cappuccino",
            "size": "250 Ml",
            "harga": "25.000",
            "link": "https://tokopedia.com/produk/cappucciono1"
        },
        {
            "foto": "images/produk/product_espresso.jpg",
            "nama": "Espresso",
            "size": "100 Ml",
            "harga": "15.000",
            "link": "https://tokopedia.com/produk/espresso"
        },
        {
            "foto": "images/produk/product_kopi_susu.jpg",
            "nama": "Kopi Susu",
            "size": "200 Ml",
            "harga": "20.000",
            "link": "https://tokopedia.com/produk/kopisusu"
        }
    ],
    "Robusta": [
        {
            foto: "images/produk/product_latte.jpg",
            nama: "Latte",
            size: "200 Ml",
            harga: "20.000",
            link: "https://tokopedia.com/produk/latte"
        }
    ],
    "Non Kopi": [
        {
            foto: "https://www.sasa.co.id/medias/page_medias/es_cendol_nangka.jpg",
            nama: "Es Cendol Nangka",
            size: "200 Ml",
            harga: "15.000",
            link: "https://tokopedia.com/produk/escendol+nangka"
        }
    ],
    "Susu": [
        {
            foto: "https://www.sasa.co.id/medias/page_medias/es_cendol_nangka.jpg",
            nama: "Susu",
            size: "200 Ml",
            harga: "15.000",
            link: "https://tokopedia.com/produk/escendol+nangka"
        }
    ]
}

console.log("Isi Data mentah:", data_mentah)

function updateSelect() {
    select_kopi.innerHTML = `<option selected disabled>-</option>`
    Object.keys(data_mentah).forEach(kategori => {
        select_kopi.innerHTML += `<option value="${kategori}">${kategori}</option>`
    })
    console.log("Select berhasil Update")
}
updateSelect()

var data_kopi = []

select_kopi.onchange = function () {
    var pilihan = select_kopi.value
    console.log("Isi Pilihannya :", pilihan)

    data_kopi = data_mentah[pilihan]
    console.log("Isi Data yang dipilih :", data_kopi)
    updateTampilan()
}

baris_produk.innerHTML = ''
function updateTampilan() {
    baris_produk.innerHTML = ''
    data_kopi.forEach(kopi => {
        baris_produk.innerHTML += `<!--awal copy kolom produk-->
<div class="col mb-4">
    <div class="card">
        <img src="${kopi.foto}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${kopi.nama}</h5>
            <div class="row hargasize my-4">
                <div class="col">
                    <i class="bi bi"></i> ${kopi.size}x
                </div>

                <div class="col fw-bold text-primary">
                    ${kopi.harga}
                </div>
            </div>
            <a target="_blank" href="${kopi.link}" class="btn btn-primary w-100"><i class="bi bi-cart2"></i> Beli</a>
        </div>
    </div>
</div>
<!-- akhir copy kolom produk -->`
    })

}
var sumber = "https://rikikurnia.com/prakerja/api/kopi"
var sumber2 = "data.json?v-3"

$.getJSON(sumber2).then(data => {
    data_mentah = data
    updateSelect()
})