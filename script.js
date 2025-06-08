
document.getElementById("jumlah").addEventListener("input", function () {
  const jumlah = parseInt(this.value) || 0;
  const harga = jumlah * 50;
  document.getElementById("harga").textContent = "Rp " + harga.toLocaleString("id-ID");
});

document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const platform = document.getElementById("platform").value;
  const username = document.getElementById("username").value;
  const jumlah = document.getElementById("jumlah").value;
  const harga = jumlah * 50;
  const pembayaran = document.getElementById("pembayaran").value;
  const link = `https://wa.me/6283138846539?text=Halo admin, saya ingin top up followers.%0APlatform: ${platform}%0AUsername: ${username}%0AJumlah: ${jumlah}%0ATotal Harga: Rp ${harga.toLocaleString("id-ID")}%0AMetode Pembayaran: ${pembayaran}`;
  window.open(link, "_blank");
});
