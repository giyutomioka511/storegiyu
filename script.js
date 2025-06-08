
document.getElementById("jumlah").addEventListener("input", hitungHarga);
document.getElementById("platform").addEventListener("change", hitungHarga);

function hitungHarga() {
    const jumlah = parseInt(document.getElementById("jumlah").value) || 0;
    const platform = document.getElementById("platform").value;
    let hargaPerFollower = 0;

    switch(platform) {
        case "instagram_internasional":
        case "tiktok":
            hargaPerFollower = 60;
            break;
        case "instagram_indo":
            hargaPerFollower = 450;
            break;
        case "telegram":
        case "facebook":
            hargaPerFollower = 70;
            break;
        default:
            hargaPerFollower = 0;
    }

    const totalHarga = jumlah * hargaPerFollower;
    document.getElementById("totalHarga").textContent = `Rp ${totalHarga.toLocaleString("id-ID")}`;
}
