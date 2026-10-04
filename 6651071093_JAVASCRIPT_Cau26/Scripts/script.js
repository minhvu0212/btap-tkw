function tinhCanChi() {
    let nam = document.getElementById("nam").value.trim();
    let thongbao = document.getElementById("thongbao");

    if (nam == "" || !/^\d+$/.test(nam) || Number(nam) <= 0) {
        thongbao.innerText = "Vui lòng nhập năm dương lịch là số nguyên dương!";
        document.getElementById("canChi").value = "";
        return;
    }

    nam = Number(nam);

    let can = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
    let chi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

    let ketqua = can[nam % 10] + " " + chi[nam % 12];
    document.getElementById("canChi").value = ketqua;
    thongbao.innerText = "";
}

tinhCanChi();
