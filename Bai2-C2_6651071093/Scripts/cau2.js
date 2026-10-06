$(function () {
  $('#form1').on('submit', function (e) {
    e.preventDefault();
    var fname = $('input[name="fname"]').val();
    var lname = $('input[name="lname"]').val();
    var full = fname + ' ' + lname;
    $('#kq').text('Họ và tên: ' + full);
    alert(full);
  });
});
