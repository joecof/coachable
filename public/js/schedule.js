$(document).ready(() => {

  // Time
  const today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();

  // name of days
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // jQuery Constant
  const $calender = $('#calender');
  const $thead = $('<thead>');
  const $tbody = $('<tbody>');
  $calender.append($thead, $tbody);

  const $week = $('<tr>');
  $thead.append($week);
  days.forEach(e => {
    $week.append($('<th>').text(e));
  });

  const $month = $('#month');

  const $prev = $('#prev');
  $prev.on('click', () => {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }

    createCalendar(currentMonth, currentYear);
  });

  const $today = $('#today');
  $today.on('click', () => {
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();

    createCalendar(currentMonth, currentYear);
  });

  const $next = $('#next');
  $next.on('click', () => {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }

    createCalendar(currentMonth, currentYear);
  });

  createCalendar(currentMonth, currentYear);

  function createCalendar(month, year) {
    $month.text(`${months[month]} ${year}`);
    $tbody.text('');
    var daysInAMonth = new Date(year, month + 1, 0).getDate();
    var dateArr = [];
    var monthArr = [];
    for (let i = 1; i <= daysInAMonth; i++) {
      let newDate = new Date(year, month, i);
      dateArr.push(newDate);
      if (newDate.getDay() == 6) {
        monthArr.push(dateArr);
        dateArr = [];
      } else if (i === daysInAMonth) {
        monthArr.push(dateArr);
      }
    }

    for (let i = 0; i < monthArr.length; i++) {
      let $tr = $('<tr>');
      if (i === 0 && monthArr[0].length < 7) {
        $tr.append($(`<td colspan='${7 - monthArr[0].length}'>`));
      }

      for (let j  = 0; j < monthArr[i].length; j++) {
        $tr.append($('<td>').text(monthArr[i][j].getDate()));
      }

      let last = monthArr.length - 1;
      if (i === monthArr.length - 1 && monthArr[last].length < 7) {
        $tr.append($(`<td colspan='${7 - monthArr[last].length}'>`));
      }

      $tbody.append($tr);
    }
  }
});
