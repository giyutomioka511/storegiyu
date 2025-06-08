
function updateHarga() {
  const jumlah = parseInt(document.getElementById("jumlah").value) || 0;
  const platform = document.getElementById("platform").value;
  let hargaPerFollower = 0;
  if (platform === "instagram") hargaPerFollower = 60;
  else if (platform === "instagram_indo") hargaPerFollower = 350;
  else hargaPerFollower = 60;
  const total = jumlah * hargaPerFollower;
  document.getElementById("totalHarga").textContent = "Rp " + total.toLocaleString("id-ID");
}
