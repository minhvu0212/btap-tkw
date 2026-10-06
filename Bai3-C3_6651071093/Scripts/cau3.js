$(function () {
  $('#btnInsert').on('click', function () {
    var n = $('#sampleTable tr').length + 1;
    $('#sampleTable tbody').append(
      '<tr><td>Row' + n + ' cell1</td><td>Row' + n + ' cell2</td></tr>'
    );
  });
});
