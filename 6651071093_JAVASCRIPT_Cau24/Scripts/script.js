function xuatThu() {
    let ngay = Number(document.getElementById("ngay").value);
    let thang = Number(document.getElementById("thang").value);
    let nam = Number(document.getElementById("nam").value);

    let ngayNhap = new Date(nam, thang - 1, ngay);
    let thu = ngayNhap.getDay();

    if (ngayNhap.getFullYear() != nam || ngayNhap.getMonth() != thang - 1 || ngayNhap.getDate() != ngay) {
        document.getElementById("ketqua").innerText = "Ngày không hợp lệ";
        return;
    }

    let tenThu = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    document.getElementById("ketqua").innerText =
        tenThu[thu] + " Ngày " + ngay + " tháng " + thang + " năm " + nam;
}
