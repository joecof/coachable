$(document).ready(() => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const shortenDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // Time
  const today = new Date();
  const day = days[today.getDay()];
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  var taskCount = 0;

  $('#heading').text(`${day}, ${month} ${today.getDate()}, ${year}`);

  firebase.database().ref('/tasks/').on('value', (snapshot)  => {
    let tasks = snapshot.val();
    taskCount = tasks.length;
    $('#tasks').text('');
    tasks = tasks.filter(task => new Date(task.date + " " + task.time) > new Date);
    tasks.forEach(task => {
      let date = new Date(task.date + " " + task.time);
      let day = days[date.getDay()]
      let month = months[date.getMonth()];
      let students = task.student;
      let time = task.time;
      let $dt = $('<dt>').text(`${day}, ${month} ${date.getDate()}, ${date.getFullYear()}`);
      let $dd = $('<dd class="small">').text(`${time} ${task.subject} with ${students} at ${task.location}`)

      let isDate = date.getDate() == today.getDate();
      let isMonth = date.getMonth() == today.getMonth();
      let isYear = date.getFullYear() == today.getFullYear();
      isDate && isMonth && isYear ? $('#today').append($dt.append($dd)) : $('#tasks').append($dt.append($dd));
    });
  });

  firebase.database().ref('/students/').on('value', (snapshot)  => {
    let students = snapshot.val();
    $('#studentList').text('');
    students.forEach(student => {
      $tr = $('<tr>');
      $name = $('<td>').text(student.name);
      $subject = $('<td>').text(student.subject);
      $availablity = $('<td>');
      $addBtn = $('<button data-toggle="modal" data-target="#addStudent">').addClass('btn btn-info mt-1').text('Add');
      for (var day in student.availability) {
        student.availability[day] ? $availablity.text(`${$availablity.text()} ${shortenDays[day]}`) : null;
      }

      $addBtn.on('click', () => {
        $('#studentName').val(student.name);
        $('#subject').val(student.subject);

        let thisDate = today.getDate() > 10 ? today.getDate() : '0' + today.getDate();
        $('#date').attr('min', `${today.getFullYear()}-${today.getMonth() + 1}-${thisDate}`);
      })
      $('#studentList').append($tr.append($name, $subject, $availablity, $addBtn));
    });
  });

  $('#add').on('click', () => {
    name = $('#studentName').val();
    subject = $('#subject').val();
    date = $('#date').val();
    time = $('#time').val();
    duration = $('#duration').val();
    place = $('#place').val();

    firebase.database().ref("tasks/" + taskCount).update({
        'date' : date,
        'duration' : duration,
        'location' : place,
        'student' : name,
        'subject' : subject,
        'time' : time
    });

    $('#date').val('');
    $('#time').val('');
    $('#duration').val('');
    $('#place').val('');

    $('#addStudent').modal('hide');
  });
});
