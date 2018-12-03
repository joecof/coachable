$(document).ready(() => {
  const database = firebase.database();

  database.ref().child('month_totals/nov').on('value',function(snap) {
    let total = snap.val();
    $('#monthTotal').text(`${total}`);
  });

  database.ref().child('weekID/1').on('value', snap => {
    let thisWeek = snap.val();
    $('#weekHeader').text('').text(thisWeek.week);
    $('#weekDates').text('');
    for(let date in thisWeek.dates1) {
      $('#weekDates').append($('<li>').text(thisWeek.dates1[date]));
    }
    $('#dailyAmount').text('');
    for(let amount in thisWeek.daily_earning) {
      $('#dailyAmount').append($('<li>').text(`$${thisWeek.daily_earning[amount]}`));
    }
    $('#weeklyTotal').text(`Total: $${thisWeek.total}`);
    $('#current_week_earning').text(`$${thisWeek.total}`);
  });

  database.ref().child('statsID/1').on('value', snap => {
    let currentWeek = snap.val();
    $('#days_worked').text(currentWeek.days);
    $('#hours_worked').text(currentWeek.hours);
    $('#average_earnings').text(currentWeek.average);
  });

  $('#previous_week_earning').text('---');
  $('#previous_days_worked').text('---');
  $('#previous_hours_worked').text('---');
  $('#previous_average_earning').text('---');


  $('#currentWeek').on('click', () => {
    database.ref().child('weekID/1').on('value', snap => {
      let thisWeek = snap.val();
      $('#weekHeader').text('').text(thisWeek.week);
      $('#weekDates').text('');
      for(let date in thisWeek.dates1) {
        $('#weekDates').append($('<li>').text(thisWeek.dates1[date]));
      }
      $('#dailyAmount').text('');
      for(let amount in thisWeek.daily_earning) {
        $('#dailyAmount').append($('<li>').text(`$${thisWeek.daily_earning[amount]}`));
      }
      $('#weeklyTotal').text(`Total: $${thisWeek.total}`);
      $('#current_week_earning').text(`$${thisWeek.total}`);
    });

    database.ref().child('statsID/1').on('value', snap => {
      let currentWeek = snap.val();
      $('#days_worked').text(currentWeek.days);
      $('#hours_worked').text(currentWeek.hours);
      $('#average_earnings').text(currentWeek.average);
    });

    $('#previous_week_earning').text('---');
    $('#previous_days_worked').text('---');
    $('#previous_hours_worked').text('---');
    $('#previous_average_earning').text('---');
  });

  $('#nextWeek').on('click', () => {
    database.ref().child('weekID/2').on('value', snap => {
      let thisWeek = snap.val();
      $('#weekHeader').text(thisWeek.week);
      $('#weekDates').text('');
      for(let date in thisWeek.dates1) {
        $('#weekDates').append($('<li>').text(thisWeek.dates1[date]));
      }
      $('#dailyAmount').text('');
      for(let amount in thisWeek.daily_earning) {
        $('#dailyAmount').append($('<li>').text(`$${thisWeek.daily_earning[amount]}`));
      }
      $('#weeklyTotal').text(`Total: $${thisWeek.total}`);
      $('#current_week_earning').text(`$${thisWeek.total}`);
    });

    database.ref().child('statsID/2').on('value', snap => {
      let currentWeek = snap.val();
      $('#days_worked').text(currentWeek.days);
      $('#hours_worked').text(currentWeek.hours);
      $('#average_earnings').text(currentWeek.average);
    });

    database.ref().child('weekID/1').on('value', snap => {
      let previousWeek = snap.val();
      $('#previous_week_earning').text(previousWeek.total);
    });

    database.ref().child('statsID/1').on('value', snap => {
      let previousWeek = snap.val();
      $('#previous_days_worked').text(previousWeek.days);
      $('#previous_hours_worked').text(previousWeek.hours);
      $('#previous_average_earning').text(previousWeek.average);
    });

  });

  $('#followingWeek').on('click', () => {
    database.ref().child('weekID/3').on('value', snap => {
      let thisWeek = snap.val();
      $('#weekHeader').text('').text(thisWeek.week);
      $('#weekDates').text('');
      for(let date in thisWeek.dates1) {
        $('#weekDates').append($('<li>').text(thisWeek.dates1[date]));
      }
      $('#dailyAmount').text('');
      for(let amount in thisWeek.daily_earning) {
        $('#dailyAmount').append($('<li>').text(`$${thisWeek.daily_earning[amount]}`));
      }
      $('#weeklyTotal').text(`Total: $${thisWeek.total}`);
      $('#current_week_earning').text(`$${thisWeek.total}`);
    });

    database.ref().child('statsID/3').on('value', snap => {
      let currentWeek = snap.val();
      $('#days_worked').text(currentWeek.days);
      $('#hours_worked').text(currentWeek.hours);
      $('#average_earnings').text(currentWeek.average);
    });

    database.ref().child('weekID/2').on('value', snap => {
      let previousWeek = snap.val();
      $('#previous_week_earning').text(previousWeek.total);
    });

    database.ref().child('statsID/2').on('value', snap => {
      let previousWeek = snap.val();
      $('#previous_days_worked').text(previousWeek.days);
      $('#previous_hours_worked').text(previousWeek.hours);
      $('#previous_average_earning').text(previousWeek.average);
    });

  });
});
