$(document).ready(() => {

  // Time constant
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  // jQuery Constant
  const $calender = $('#calender');
  const $thead = $('<thead>');
  const $tbody = $('<tbody>');
  $calender.append($thead, $tbody);

  const $week = $('<tr>');

  // name of days
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  days.forEach(e => {
    $week.append($('<th>').text(e));
  });

  $thead.append($week);

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  function createCalendar() {

    var daysInAMonth = daysInMonth(month, year);
    var dateArr = [];
    var monthArr = [];
    for (let i = 1; i < daysInAMonth + 1; i++) {
      let newDate = new Date(year, month - 1, i);
      dateArr.push(newDate);
      if (newDate.getDay() == 6) {
        monthArr.push(dateArr);
        dateArr = [];
      } else if (i === daysInAMonth - 1) {
        monthArr.push(dateArr);
      }
    }

    for (let i = 0; i < monthArr.length; i++) {
      let $tr = $('<tr>');
      if (i === 0) {
        for (let j = 0; j < 7 - monthArr[0].length; j++) {
          $tr.append($('<td>'));
        }
      }

      for (let j  = 0; j < monthArr[i].length; j++) {
        $tr.append($('<td>').text(monthArr[i][j].getDate()));
      }

      if (i === monthArr.length - 1) {
        let last = monthArr.length - 1;
        for (let j = 0; j < 7 - monthArr[last].length; j++) {
          $tr.append($('<td>'));
        }
      }

      $tbody.append($tr);
    }
  }

  createCalendar();

});
