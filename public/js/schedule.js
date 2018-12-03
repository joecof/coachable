$(document).ready(() => {
  var database = firebase.database();

  // Time
  const today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // jQuery Constant
  const $calender = $('#calender');
  const $thead = $('<thead>');
  const $tbody = $('<tbody>');
  const $week = $('<tr>');
  const $month = $('#month');
  const $prev = $('#prev');
  const $today = $('#today');
  const $next = $('#next');
  const $tasks = $('#tasks');

  $calender.append($thead, $tbody);
  $thead.append($week);
  days.forEach(e => {
    $week.append($('<th>').text(e));
  });

  createCalendar(currentMonth, currentYear);
  renderTasks();

  $prev.on('click', () => {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }

    createCalendar(currentMonth, currentYear);
  });

  $today.on('click', () => {
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();

    createCalendar(currentMonth, currentYear);
  });

  $next.on('click', () => {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }

    createCalendar(currentMonth, currentYear);
  });

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
        $tr.append($('<td>').text(monthArr[i][j].getDate()).on('click', () => {
          console.log(monthArr[i][j]);
        }));
      }

      let last = monthArr.length - 1;
      if (i === last && monthArr[last].length < 7) {
        $tr.append($(`<td colspan='${7 - monthArr[last].length}'>`));
      }

      $tbody.append($tr);
    }
  }

  function renderTasks() {
    firebase.database().ref('/tasks/').on('value', (snapshot)  => {
      let tasks = snapshot.val();
      $tasks.text('');
      tasks.filter(task => new Date(task.date + " " + task.time) > new Date);
      tasks.forEach(task => {
        let date = new Date(task.date + " " + task.time);
        let day = days[date.getDay()]
        let month = months[date.getMonth()];
        let students = Object.keys(task.students).join(', ');
        let time = task.time;
        let $dt = $('<dt>').text(`${day}, ${month} ${date.getDate()}, ${date.getFullYear()}`);
        let $dd = $('<dd class="small">').text(`${time} ${task.subject} with ${students} at ${task.location}`)
        $tasks.append($dt.append($dd));
      });
    });
  }
});
