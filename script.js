const form = document.getElementById('formkontak');

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Nomor WhatsApp tujuan
    const nomorWhatsApp = "6281337616672";

    // Mengambil data dari form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
    const minat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;

    // Membuat isi pesan
    const isiPesan = `Halo, saya menghubungi melalui website CV.

Nama Lengkap : ${nama}
Email        : ${email}
No. Telepon  : ${telepon}
Bidang Minat : ${minat}

Pesan:
${pesan}`;

    // Encode pesan
    const pesanEncoded = encodeURIComponent(isiPesan);

    // Membuat URL WhatsApp
    const urlWhatsApp =
        `https://web.whatsapp.com/send?phone=${nomorWhatsApp}&text=${pesanEncoded}`;

    // Membuka WhatsApp
    window.open(urlWhatsApp, "_blank");
});
