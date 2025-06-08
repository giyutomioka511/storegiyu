
function updateHarga() {
  const platform = document.getElementById("platform").value;
  const jumlah = parseInt(document.getElementById("jumlah").value) || 0;
  let harga = 0;
  if (platform === "instagram") harga = 60;
  else if (platform === "instagram_indo") harga = 350;
  else harga = 60;
  const total = harga * jumlah;
  document.getElementById("totalHarga").textContent = "Rp " + total.toLocaleString("id-ID");
}

function orderNow() {
  const jumlah = document.getElementById("jumlah").value;
  const username = document.getElementById("username").value;
  const platform = document.getElementById("platform").value;
  const harga = document.getElementById("totalHarga").textContent;
  const url = `https://wa.me/6283138846539?text=Halo%20admin%2C%20saya%20ingin%20order%20followers%20untuk%20${platform}%20sebanyak%20${jumlah}%20ke%20${username}.%20Total%20harga%3A%20${harga}`;
  window.open(url, "_blank");
}

document.getElementById("jumlah").addEventListener("input", updateHarga);
document.getElementById("platform").addEventListener("change", updateHarga);
