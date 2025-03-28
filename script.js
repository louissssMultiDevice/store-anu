// Update tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Data Produk
const produkData = [
    { judul: "Hosting Minecraft", deskripsi: "Hosting Minecraft murah meriah", img: "mch.png", wa: "6287717274346" },
    { judul: "Minecraft Ori", deskripsi: "Minecraft original murah", img: "mc.png", opsi: [{ nama: "Minecraft Bedrock", harga: "10-20k" }, { nama: "Minecraft Java", harga: "150k" }] },
    { judul: "Jasa Create Website", deskripsi: "Jasa Membuat Website Canggih", img: "web.png", opsi: [{ nama: "Web Basic", harga: "10k" }, { nama: "Web Premium", harga: "20k" }] },
    { judul: "Keperluan Bot WhatsApp", deskripsi: "Segala keperluan bot WhatsApp", img: "w.png", opsi: [{ nama: "Fitur Fix", harga: "5-15k" }, { nama: "Tambah Fitur", harga: "5-10k" }, { nama: "Rename Script", harga: "5-20k" }] },
    { judul: "Virtual Private Server [VPS]", deskripsi: "VPS murah meriah", img: "vps.png", wa: "6287717274346" },
    { judul: "Domain", deskripsi: "Domain Murah dan Tahan 1 Tahun", img: "domain.png", wa: "6287717274346" }
];

const produkList = document.querySelector(".produk-container");

// Menampilkan Produk
produkData.forEach(prod => {
    let div = document.createElement("div");
    div.classList.add("produk-item");
    div.innerHTML = `
        <div class="left-bar"></div>
        <img src="${prod.img}" alt="${prod.judul}">
        <div class="produk-info">
            <h3>${prod.judul}</h3>
            <p>${prod.deskripsi}</p>
            ${prod.wa ? `<a href="https://wa.me/${prod.wa}" class="btn">Beli Sekarang</a>` : createDropdown(prod.opsi)}
        </div>
        <div class="right-bar"></div>
    `;
    produkList.appendChild(div);
});

// Membuat Dropdown untuk Produk dengan Opsi
function createDropdown(options) {
    let dropdownHTML = `<select class="dropdown" onchange="redirectWA(this)">`;
    dropdownHTML += `<option value="">Pilih Opsi</option>`;
    options.forEach(opt => {
        dropdownHTML += `<option value="https://wa.me/6287717274346?text=Beli+${opt.nama}+seharga+${opt.harga}">${opt.nama} - ${opt.harga}</option>`;
    });
    dropdownHTML += `</select>`;
    return dropdownHTML;
}

// Redirect ke WhatsApp sesuai opsi yang dipilih
function redirectWA(select) {
    if (select.value) {
        window.location.href = select.value;
    }
}