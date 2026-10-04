function tinhTien() {
    let thucAn = document.getElementById("thucAn");
    let nuocUong = document.getElementById("nuocUong");
    let tbody = document.querySelector("#ketqua tbody");

    tbody.innerHTML = "";
    let tongTien = 0;

    for (let i = 0; i < thucAn.options.length; i++) {
        if (thucAn.options[i].selected) {
            themDong(tbody, thucAn.options[i].text, Number(thucAn.options[i].value));
            tongTien += Number(thucAn.options[i].value);
        }
    }

    for (let i = 0; i < nuocUong.options.length; i++) {
        if (nuocUong.options[i].selected) {
            themDong(tbody, nuocUong.options[i].text, Number(nuocUong.options[i].value));
            tongTien += Number(nuocUong.options[i].value);
        }
    }

    let banDem = document.querySelector('input[name="thoiDiem"]:checked').value == "dem";
    if (banDem) {
        tongTien = tongTien * 1.10;
    }

    let dongTong = tbody.insertRow();
    dongTong.insertCell(0).innerText = "Tổng tiền";
    dongTong.insertCell(1).innerText = tongTien.toLocaleString("vi-VN") + " đồng";
}

function themDong(tbody, tenMon, gia) {
    let dong = tbody.insertRow();
    dong.insertCell(0).innerText = tenMon;
    dong.insertCell(1).innerText = gia.toLocaleString("vi-VN");
}
