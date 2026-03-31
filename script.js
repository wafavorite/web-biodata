function simpan() {
    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;
    let alamat = document.getElementById("alamat").value;
    let lahir = document.getElementById("lahir").value;

    let umur = new Date().getFullYear() - new Date(lahir).getFullYear();

    document.getElementById("hasil").innerHTML = `
        <div class="result-box">
            <p><b>Nama:</b> ${nama}</p>
            <p><b>Kelas:</b> ${kelas}</p>
            <p><b>Alamat:</b> ${alamat}</p>
            <p><b>Umur:</b> ${umur} tahun</p>
        </div>
    `;
}