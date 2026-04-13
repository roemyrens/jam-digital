function updateJam() {
    const sekarang = new Date();

    let jam = sekarang.getHours();
    let menit = sekarang.getMinutes();
    let detik = sekarang.getSeconds();

    if (jam < 10) jam = "0" + jam;
    if (menit < 10) menit = "0" + menit;
    if (detik < 10) detik = "0" + detik;

    document.getElementById("jam").textContent = jam;
    document.getElementById("menit").textContent = menit;
    document.getElementById("detik").textContent = detik;

    // ===== TANGGAL BIASA =====
    const hariList = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    const bulanList = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

    let hari = hariList[sekarang.getDay()];
    let tanggal = sekarang.getDate();
    let bulan = bulanList[sekarang.getMonth()];
    let tahun = sekarang.getFullYear();

    // ===== WETON JAWA =====
    const pasaran = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];

    // patokan: 1 Januari 2024 = Senin Legi
    const baseDate = new Date("2024-01-01");
    const selisihHari = Math.floor((sekarang - baseDate) / (1000 * 60 * 60 * 24));

    const pasaranIndex = selisihHari % 5;
    const weton = pasaran[pasaranIndex];

    // tampilkan gabungan
    document.getElementById("tanggal").textContent =
        `${hari} ${weton}, ${tanggal} ${bulan} ${tahun}`;
}

// efek warna
function efekWarna() {
    const clock = document.querySelector(".clock");
    const warna = ["#333", "#444", "#555", "#666565"];
    const random = Math.floor(Math.random() * warna.length);
    clock.style.color = warna[random];
}

setInterval(() => {
    updateJam();
    efekWarna();
}, 1000);

updateJam();
