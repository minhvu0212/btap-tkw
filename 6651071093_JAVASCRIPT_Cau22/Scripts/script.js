function nhan() {
    let so1 = Number(document.getElementById("so1").value);
    let so2 = Number(document.getElementById("so2").value);
    let ketqua = so1 * so2;
    document.getElementById("ketqua").innerText = ketqua;
}

function chia() {
    let so1 = Number(document.getElementById("so1").value);
    let so2 = Number(document.getElementById("so2").value);

    if (so2 == 0) {
        document.getElementById("ketqua").innerText = "Không thể chia cho 0";
        return;
    }

    let ketqua = so1 / so2;
    document.getElementById("ketqua").innerText = ketqua;
}
