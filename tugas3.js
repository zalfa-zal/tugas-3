let header = document.getElementById('header-utama');
header.textContent = "Seleksi ID Berhasil";

const produk = document.getElementsByClassName('produk-item');
console.log('HTMLCollection:', produk);
Array.from(produk).forEach(produkItem => {
    produkItem.innerText = '[PENTING] ' + produkItem.innerText;
    produkItem.classList.add('produk-bold');
});

const Status = document.querySelector('[data-status="pending"]');
Status.style.backgroundColor = 'yellow';
console.log('Data Status yang di-highlight:', Status);

const Item = document.querySelectorAll('ul li');
Item.forEach(list => {
    list.innerHTML = "<span>Konten Baru dari JS</span>";
});