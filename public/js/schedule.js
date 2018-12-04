$(document).ready(() => {
  // Date
  const today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();

  // date related array
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // jQuery Constant
  const $thead = $('<thead>').addClass('thead-dark');
  const $tbody = $('<tbody>');
  const $week = $('<tr>');

  // append thead and tbody to calender
  $('#calender').append($thead, $tbody);
  $thead.append($week);

  // Render Week
  renderWeek();

  // Render tbody of calender
  createCalendar(currentMonth, currentYear);

  // Re-render calender of previous month
  $('#prev').on('click', () => {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }

    createCalendar(currentMonth, currentYear);
  });

  // Re-render calender of today's month
  $('#today').on('click', () => {
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();

    createCalendar(currentMonth, currentYear);
  });

  // Re-render calender of next month
  $('#next').on('click', () => {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }

    createCalendar(currentMonth, currentYear);
  });

  // Render week thead
  function renderWeek() {
    days.forEach(e => {
      $week.append($('<th>').text(e));
    });
  }
  // To render calender
  function createCalendar(month, year) {
    // Render month and year heading
    $('#month').text(`${months[month]} ${year}`);
    $tbody.text('');
    var daysInAMonth = new Date(year, month + 1, 0).getDate();
    var dateArr = [];
    var monthArr = [];

    // render tasks to the corresponding month
    renderTasks(month, year);

    // create array of dates to corresponding month
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

    // render dates to document
    for (let i = 0; i < monthArr.length; i++) {
      let $tr = $('<tr>');

      // create empty cell if month starts in the middle of the week
      if (i === 0 && monthArr[0].length < 7) {
        $tr.append($(`<td colspan='${7 - monthArr[0].length}'>`));
      }

      // render each date
      for (let j  = 0; j < monthArr[i].length; j++) {
        let $td = $('<td>');

        // Highlight cell if there is matching task to date
        firebase.database().ref('/tasks/').on('value', (snapshot)  => {
          let tasks = snapshot.val();
          tasks.forEach(task => {
            let taskDate = new Date(task.date + " " + task.time);
            let sameDate = monthArr[i][j].getDate() == taskDate.getDate();
            let sameMonth = monthArr[i][j].getMonth() == taskDate.getMonth();
            let sameYear = monthArr[i][j].getFullYear() == taskDate.getFullYear();
            sameDate && sameMonth && sameYear ? $td.addClass('bg-warning text-white') : null;
          });
        });

        // Highlight today cell
        let isDate = monthArr[i][j].getDate() == today.getDate();
        let isMonth = monthArr[i][j].getMonth() == today.getMonth();
        let isYear = monthArr[i][j].getFullYear() == today.getFullYear();
        isDate && isMonth && isYear ? $td.addClass('bg-info text-white') : null;

        // TODO task of date popup when click on cell
        $tr.append($td.text(monthArr[i][j].getDate()).on('click', () => {
          console.log(monthArr[i][j]);
        }));
      }

      // create empty cell if month ends in the middle of the week
      let last = monthArr.length - 1;
      if (i === last && monthArr[last].length < 7) {
        $tr.append($(`<td colspan='${7 - monthArr[last].length}'>`));
      }

      $tbody.append($tr);
    }
  }

  // render tasks
  function renderTasks(month, year) {
    firebase.database().ref('/tasks/').on('value', (snapshot)  => {
      let tasks = snapshot.val();
      $('#tasks').text('');
      // Filter this month tasks
      tasks = tasks.filter(task => {
        let taskDate = new Date(task.date + " " + task.time);
        return taskDate.getFullYear() === year && taskDate.getMonth() === month;
      });
      tasks.forEach(task => {
        let date = new Date(task.date + " " + task.time);
        let day = days[date.getDay()]
        let month = months[date.getMonth()];
        let students = task.student;
        let time = task.time;
        let $dt = $('<dt>').text(`${day}, ${month} ${date.getDate()}, ${date.getFullYear()}`);
        let $dd = $('<dd class="small">').text(`${time} ${task.subject} with ${students} at ${task.location}`)
        $('#tasks').append($dt.append($dd));
      });
    });
  }
});
