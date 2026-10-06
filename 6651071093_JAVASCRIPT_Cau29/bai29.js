function getFormvalue() {
    let form = document.getElementById("form1");

    let ho = form.elements["fname"].value;
    let ten = form.elements["lname"].value;

    alert("Họ và tên: " + ho + " " + ten);
}
