const namaDiterima = ["Elita Evelinanda", "Bagas"]

document.getElementById("cekNamaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const namaInput = document.getElementById("namaInput").value;
    const resultElement = document.getElementById("result");

    if (namaDiterima.includes(namaInput)) {
        resultElement.textContent = "Selamat, " + namaInput + "! Anda diterima.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Maaf, " + namaInput + ". Anda tidak diterima.";
        resultElement.style.color = "red";
    }
});
