function myFunction() {
  const nov4_10 = firebase.database().ref().child('weekID/1/Week1/')
  nov4_10.on('value',function(snap) {
    var weekHeader = snap.val();
    for(var key in weekHeader) {
      var dates = document.getElementById('weekHeader');
      document.createTextNode(weekHeader[key]);
      dates.innerText = weekHeader[key];
    }
  }); 
  
  const dates1 = firebase.database().ref().child('weekID/1/dates1/');
  dates1.on('value', function(snap) {
    var earningDates = snap.val();
    const novDates = document.getElementById('weekDates');
    novDates.innerHTML = '';
    for(var key in earningDates) {
      var dateItems = document.createElement('li');
      var innerDateItems = document.createTextNode(earningDates[key])
      dateItems.appendChild(innerDateItems);
      novDates.appendChild(dateItems);
    }
  }); 

  const dailyAmountRef = firebase.database().ref().child('weekID/1/daily_earning/');
  dailyAmountRef.on('value', function(snap) {
    var list = snap.val();
    const dailyAmount = document.getElementById('dailyAmount');
    dailyAmount.innerHTML = '';
    for(var key in list) {
      var listItems = document.createElement('li');
      var innerListItems = document.createTextNode('$' + list[key])
      listItems.appendChild(innerListItems);
      dailyAmount.appendChild(listItems);
    }
  }); 
  
  
  const weeklyTotal = firebase.database().ref().child('weekID/1/weeklyTotal/');
  weeklyTotal.on('value', function(snap){
    var list=snap.val();
    for(var key in list) {
      var week_total = document.getElementById('weeklyTotal');
      var innerWeekTotal = document.createTextNode("Total: " + "$" + list[key]);
      week_total.innerText = "Total: " + "$" + list[key];
    }
  });

  const currentWeekEarningRef = firebase.database().ref().child('weekID/1/weeklyTotal/');
  currentWeekEarningRef.on('value', function(snap){
    var list=snap.val();
    var current_week_earning = document.getElementById('current_week_earning');
    current_week_earning.innerHTML = '';
    for(var key in list) {
      var innerCurrentWeekTotal = document.createTextNode(" $" + list[key]);
      current_week_earning.appendChild(innerCurrentWeekTotal);
    }
  });

  const daysWorkedRef = firebase.database().ref().child('statsID/1/days_worked/');
  daysWorkedRef.on('value', function(snap){
    var list=snap.val();
    var days_worked = document.getElementById('days_worked');
    days_worked.innerHTML = '';
    for(var key in list) {
      var innerCurrentDaysWorked = document.createTextNode(list[key]);
      days_worked.appendChild(innerCurrentDaysWorked);
    }
  });

  const hoursWorkedRef = firebase.database().ref().child('statsID/1/hours_worked/');
  hoursWorkedRef.on('value', function(snap){
    var list=snap.val();
    var hours_worked = document.getElementById('hours_worked');
    hours_worked.innerHTML = '';
    for(var key in list) {
      var innerCurrentHoursWorked = document.createTextNode(list[key]);
      hours_worked.appendChild(innerCurrentHoursWorked);
    }
  });

  const avgEarningsRef = firebase.database().ref().child('statsID/1/average_earnings/');
  avgEarningsRef.on('value', function(snap){
    var list=snap.val();
    var average_earnings = document.getElementById('average_earnings');
    average_earnings.innerHTML = '';
    for(var key in list) {
      var innerAverageEarnings = document.createTextNode(" $" +list[key]);
      average_earnings.appendChild(innerAverageEarnings);
    }
  });

  const previousWeekEarningRef = firebase.database().ref().child('weekID/2/weeklyTotal/');
  previousWeekEarningRef.on('value', function(snap){
    var list=snap.val();
    var previous_week_earning = document.getElementById('previous_week_earning');
    previous_week_earning.innerHTML = '';
    for(var key in list) {
      var innerPreviousWeekTotal = document.createTextNode('---');
      previous_week_earning.appendChild(innerPreviousWeekTotal);
    }
  });

  const previousDaysWorkedRef = firebase.database().ref().child('statsID/2/days_worked/');
  previousDaysWorkedRef.on('value', function(snap){
    var list=snap.val();
    var previous_days_worked = document.getElementById('previous_days_worked');
    previous_days_worked.innerHTML = '';
    for(var key in list) {
      var innerPreviousDaysWorked = document.createTextNode('---');
      previous_days_worked.appendChild(innerPreviousDaysWorked);
    }
  });

  const previousHoursWorkedRef = firebase.database().ref().child('statsID/2/hours_worked/');
  previousHoursWorkedRef.on('value', function(snap){
    var list=snap.val();
    var previous_hours_worked = document.getElementById('previous_hours_worked');
    previous_hours_worked.innerHTML = '';
    for(var key in list) {
      var innerPreviousHoursWorked = document.createTextNode('---');
      previous_hours_worked.appendChild(innerPreviousHoursWorked);
    }
  });

  const previousAvgEarningsRef = firebase.database().ref().child('statsID/2/average_earnings/');
  previousAvgEarningsRef.on('value', function(snap){
    var list=snap.val();
    var previous_average_earning = document.getElementById('previous_average_earning');
    previous_average_earning.innerHTML = '';
    for(var key in list) {
      var innerPreviousAverageEarnings = document.createTextNode('---');
      previous_average_earning.appendChild(innerPreviousAverageEarnings);
    }
  });

  }

function myFunction2() {
  
  const nov4_10 = firebase.database().ref().child('weekID/2/Week1/')
  nov4_10.on('value',function(snap) {
    var weekHeader = snap.val();
    for(var key in weekHeader) {
      var dates = document.getElementById('weekHeader');
      document.createTextNode(weekHeader[key]);
      // console.log(innerWeekHeader)
      dates.innerText = weekHeader[key];
    }
  }); 
  
  const dates1 = firebase.database().ref().child('weekID/2/dates1/');
  dates1.on('value', function(snap) {
    var earningDates = snap.val();
    const novDates = document.getElementById('weekDates');
    novDates.innerHTML = '';
    for(var key in earningDates) {
      var dateItems = document.createElement('li');
      var innerDateItems = document.createTextNode(earningDates[key])
      dateItems.appendChild(innerDateItems);
      novDates.appendChild(dateItems);
    }
  }); 

  const dailyAmountRef = firebase.database().ref().child('weekID/2/daily_earning/');
  dailyAmountRef.on('value', function(snap) {
    var list = snap.val();
    const dailyAmount = document.getElementById('dailyAmount');
    dailyAmount.innerHTML = '';
    for(var key in list) {
      var listItems = document.createElement('li');
      var innerListItems = document.createTextNode('$' + list[key])
      listItems.appendChild(innerListItems);
      dailyAmount.appendChild(listItems);
    }
  }); 
  
  
  const weeklyTotal = firebase.database().ref().child('weekID/2/weeklyTotal/');
  weeklyTotal.on('value', function(snap){
    var list=snap.val();
    var week_total = document.getElementById('weeklyTotal');
    week_total.innerHTML = '';
    for(var key in list) {
      var innerWeekTotal = document.createTextNode("Total: " + "$" + list[key]);
      week_total.appendChild(innerWeekTotal);
    }
  });

  const currentWeekEarningRef = firebase.database().ref().child('weekID/2/weeklyTotal/');
  currentWeekEarningRef.on('value', function(snap){
    var list=snap.val();
    var current_week_earning = document.getElementById('current_week_earning');
    current_week_earning.innerHTML = '';
    for(var key in list) {
      var innerCurrentWeekTotal = document.createTextNode(" $" + list[key]);
      current_week_earning.appendChild(innerCurrentWeekTotal);
    }
  });

  const daysWorkedRef = firebase.database().ref().child('statsID/2/days_worked/');
  daysWorkedRef.on('value', function(snap){
    var list=snap.val();
    var days_worked = document.getElementById('days_worked');
    days_worked.innerHTML = '';
    for(var key in list) {
      var innerCurrentDaysWorked = document.createTextNode(list[key]);
      days_worked.appendChild(innerCurrentDaysWorked);
    }
  });

  const hoursWorkedRef = firebase.database().ref().child('statsID/2/hours_worked/');
  hoursWorkedRef.on('value', function(snap){
    var list=snap.val();
    var hours_worked = document.getElementById('hours_worked');
    hours_worked.innerHTML = '';
    for(var key in list) {
      var innerCurrentHoursWorked = document.createTextNode(list[key]);
      hours_worked.appendChild(innerCurrentHoursWorked);
    }
  });

  const avgEarningsRef = firebase.database().ref().child('statsID/2/average_earnings/');
  avgEarningsRef.on('value', function(snap){
    var list=snap.val();
    var average_earnings = document.getElementById('average_earnings');
    average_earnings.innerHTML = '';
    for(var key in list) {
      var innerAverageEarnings = document.createTextNode(" $" +list[key]);
      average_earnings.appendChild(innerAverageEarnings);
    }
  });

  const previousWeekEarningRef = firebase.database().ref().child('weekID/1/weeklyTotal/');
  previousWeekEarningRef.on('value', function(snap){
    var list=snap.val();
    var previous_week_earning = document.getElementById('previous_week_earning');
    previous_week_earning.innerHTML = '';
    for(var key in list) {
      var innerPreviousWeekTotal = document.createTextNode(" $" + list[key]);
      previous_week_earning.appendChild(innerPreviousWeekTotal);
    }
  });

  const previousDaysWorkedRef = firebase.database().ref().child('statsID/1/days_worked/');
  previousDaysWorkedRef.on('value', function(snap){
    var list=snap.val();
    var previous_days_worked = document.getElementById('previous_days_worked');
    previous_days_worked.innerHTML = '';
    for(var key in list) {
      var innerPreviousDaysWorked = document.createTextNode(list[key]);
      previous_days_worked.appendChild(innerPreviousDaysWorked);
    }
  });

  const previousHoursWorkedRef = firebase.database().ref().child('statsID/1/hours_worked/');
  previousHoursWorkedRef.on('value', function(snap){
    var list=snap.val();
    var previous_hours_worked = document.getElementById('previous_hours_worked');
    previous_hours_worked.innerHTML = '';
    for(var key in list) {
      var innerPreviousHoursWorked = document.createTextNode(list[key]);
      previous_hours_worked.appendChild(innerPreviousHoursWorked);
    }
  });

  const previousAvgEarningsRef = firebase.database().ref().child('statsID/1/average_earnings/');
  previousAvgEarningsRef.on('value', function(snap){
    var list=snap.val();
    var previous_average_earning = document.getElementById('previous_average_earning');
    previous_average_earning.innerHTML = '';
    for(var key in list) {
      var innerPreviousAverageEarnings = document.createTextNode(" $" + list[key]);
      previous_average_earning.appendChild(innerPreviousAverageEarnings);
    }
  });

}

function myFunction3() {


  const nov4_10 = firebase.database().ref().child('weekID/3/Week1/')
  nov4_10.on('value',function(snap) {
    var weekHeader = snap.val();
    for(var key in weekHeader) {
      var dates = document.getElementById('weekHeader');
      document.createTextNode(weekHeader[key]);
      // console.log(innerWeekHeader)
      dates.innerText = weekHeader[key];
    }
  }); 
  
  const dates1 = firebase.database().ref().child('weekID/3/dates1/');
  dates1.on('value', function(snap) {
    var earningDates = snap.val();
    const novDates = document.getElementById('weekDates');
    novDates.innerHTML = '';
    for(var key in earningDates) {
      var dateItems = document.createElement('li');
      var innerDateItems = document.createTextNode(earningDates[key])
      dateItems.appendChild(innerDateItems);
      novDates.appendChild(dateItems);
    }
  }); 

  const dailyAmountRef = firebase.database().ref().child('weekID/3/daily_earning/');
  dailyAmountRef.on('value', function(snap) {
    var list = snap.val();
    const dailyAmount = document.getElementById('dailyAmount');
    dailyAmount.innerHTML = '';
    for(var key in list) {
      var listItems = document.createElement('li');
      var innerListItems = document.createTextNode('$' + list[key])
      listItems.appendChild(innerListItems);
      dailyAmount.appendChild(listItems);
    }
  }); 
  
  
  const weeklyTotal = firebase.database().ref().child('weekID/3/weeklyTotal/');
  weeklyTotal.on('value', function(snap){
    var list=snap.val();
    var week_total = document.getElementById('weeklyTotal');
    week_total.innerHTML = '';
    for(var key in list) {
      var innerWeekTotal = document.createTextNode("Total: " + "$" + list[key]);
      week_total.appendChild(innerWeekTotal);
      // week_total.innerText = "Total: " + "$" + list[key];
    }
  });

  const currentWeekEarningRef = firebase.database().ref().child('weekID/3/weeklyTotal/');
  currentWeekEarningRef.on('value', function(snap){
    var list=snap.val();
    var current_week_earning = document.getElementById('current_week_earning');
    current_week_earning.innerHTML = '';
    for(var key in list) {
      var innerCurrentWeekTotal = document.createTextNode(" $" + list[key]);
      current_week_earning.appendChild(innerCurrentWeekTotal);
    }
  });

  const daysWorkedRef = firebase.database().ref().child('statsID/3/days_worked/');
  daysWorkedRef.on('value', function(snap){
    var list=snap.val();
    var days_worked = document.getElementById('days_worked');
    days_worked.innerHTML = '';
    for(var key in list) {
      var innerCurrentDaysWorked = document.createTextNode(list[key]);
      days_worked.appendChild(innerCurrentDaysWorked);
    }
  });

  const hoursWorkedRef = firebase.database().ref().child('statsID/3/hours_worked/');
  hoursWorkedRef.on('value', function(snap){
    var list=snap.val();
    var hours_worked = document.getElementById('hours_worked');
    hours_worked.innerHTML = '';
    for(var key in list) {
      var innerCurrentHoursWorked = document.createTextNode(list[key]);
      hours_worked.appendChild(innerCurrentHoursWorked);
    }
  });

  const avgEarningsRef = firebase.database().ref().child('statsID/3/average_earnings/');
  avgEarningsRef.on('value', function(snap){
    var list=snap.val();
    var average_earnings = document.getElementById('average_earnings');
    average_earnings.innerHTML = '';
    for(var key in list) {
      var innerAverageEarnings = document.createTextNode(" $" +list[key]);
      average_earnings.appendChild(innerAverageEarnings);
    }
  });

  const previousWeekEarningRef = firebase.database().ref().child('weekID/2/weeklyTotal/');
  previousWeekEarningRef.on('value', function(snap){
    var list=snap.val();
    var previous_week_earning = document.getElementById('previous_week_earning');
    previous_week_earning.innerHTML = '';
    for(var key in list) {
      var innerPreviousWeekTotal = document.createTextNode(" $" + list[key]);
      previous_week_earning.appendChild(innerPreviousWeekTotal);
    }
  });

  const previousDaysWorkedRef = firebase.database().ref().child('statsID/2/days_worked/');
  previousDaysWorkedRef.on('value', function(snap){
    var list=snap.val();
    var previous_days_worked = document.getElementById('previous_days_worked');
    previous_days_worked.innerHTML = '';
    for(var key in list) {
      var innerPreviousDaysWorked = document.createTextNode(list[key]);
      previous_days_worked.appendChild(innerPreviousDaysWorked);
    }
  });

  const previousHoursWorkedRef = firebase.database().ref().child('statsID/2/hours_worked/');
  previousHoursWorkedRef.on('value', function(snap){
    var list=snap.val();
    var previous_hours_worked = document.getElementById('previous_hours_worked');
    previous_hours_worked.innerHTML = '';
    for(var key in list) {
      var innerPreviousHoursWorked = document.createTextNode(list[key]);
      previous_hours_worked.appendChild(innerPreviousHoursWorked);
    }
  });

  const previousAvgEarningsRef = firebase.database().ref().child('statsID/2/average_earnings/');
  previousAvgEarningsRef.on('value', function(snap){
    var list=snap.val();
    var previous_average_earning = document.getElementById('previous_average_earning');
    previous_average_earning.innerHTML = '';
    for(var key in list) {
      var innerPreviousAverageEarnings = document.createTextNode(" $" +list[key]);
      previous_average_earning.appendChild(innerPreviousAverageEarnings);
    }
  });


}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


const month_total = firebase.database().ref().child('month_totals/')
month_total.on('value',function(snap) {
  var list = snap.val();
  for(var key in list) { 
    var monthTotal = document.getElementById('monthTotal');
    var innerMonthTotal = document.createTextNode("$" + list[key]);
    monthTotal.appendChild(innerMonthTotal);
  }
}); 

const nov4_10 = firebase.database().ref().child('weekID/1/Week1/')
nov4_10.on('value',function(snap) {
  var weekHeader = snap.val();
  for(var key in weekHeader) {
    var dates = document.getElementById('weekHeader');
    var innerWeekHeader = document.createTextNode(weekHeader[key]);
    dates.appendChild(innerWeekHeader);
  }
}); 

dates1 = firebase.database().ref().child('weekID/1/dates1/');
dates1.on('value', function(snap) {
  var earningDates = snap.val();
  const novDates = document.getElementById('weekDates');
  for(var key in earningDates) {
    var dateItems = document.createElement('li');
    var innerDateItems = document.createTextNode(earningDates[key])
    dateItems.appendChild(innerDateItems);
    novDates.appendChild(dateItems);
  }
}); 

const dailyEarnings = firebase.database().ref().child('weekID/1/daily_earning/');
dailyEarnings.on('value',function(snap){
  var list=snap.val();
  for(var key in list) {
      var listItems = document.createElement("li");
      var textInListItems = document.createTextNode('$' + list[key]);
      listItems.appendChild(textInListItems);
      document.getElementById("dailyAmount").appendChild(listItems);
  } 
});

const weeklyTotal = firebase.database().ref().child('weekID/1/weeklyTotal/');
weeklyTotal.on('value', function(snap){
  var list=snap.val();
  for(var key in list) {
    var week_total = document.getElementById('weeklyTotal');
    var innerWeekTotal = document.createTextNode("Total: " + "$" + list[key]);
    week_total.appendChild(innerWeekTotal);
  }
});

const currentWeekEarningRef = firebase.database().ref().child('weekID/1/weeklyTotal/');
  currentWeekEarningRef.on('value', function(snap){
    var list=snap.val();
    var current_week_earning = document.getElementById('current_week_earning');
    current_week_earning.innerHTML = '';
    for(var key in list) {
      console.log(list[key]);
      var innerCurrentWeekTotal = document.createTextNode(" $" + list[key]);
      current_week_earning.appendChild(innerCurrentWeekTotal);
    }
  });

  const daysWorkedRef = firebase.database().ref().child('statsID/1/days_worked/');
  daysWorkedRef.on('value', function(snap){
    var list=snap.val();
    var days_worked = document.getElementById('days_worked');
    days_worked.innerHTML = '';
    for(var key in list) {
      console.log(list[key]);
      var innerCurrentDaysWorked = document.createTextNode(list[key]);
      days_worked.appendChild(innerCurrentDaysWorked);
    }
  });

  const hoursWorkedRef = firebase.database().ref().child('statsID/1/hours_worked/');
  hoursWorkedRef.on('value', function(snap){
    var list=snap.val();
    var hours_worked = document.getElementById('hours_worked');
    hours_worked.innerHTML = '';
    for(var key in list) {
      console.log(list[key]);
      var innerCurrentHoursWorked = document.createTextNode(list[key]);
      hours_worked.appendChild(innerCurrentHoursWorked);
    }
  });

  const avgEarningsRef = firebase.database().ref().child('statsID/1/average_earnings/');
  avgEarningsRef.on('value', function(snap){
    var list=snap.val();
    var average_earnings = document.getElementById('average_earnings');
    average_earnings.innerHTML = '';
    for(var key in list) {
      console.log(list[key]);
      var innerAverageEarnings = document.createTextNode(" $" +list[key]);
      average_earnings.appendChild(innerAverageEarnings);
    }
  });

  const previousWeekEarningRef = firebase.database().ref().child('weekID/2/weeklyTotal/');
  previousWeekEarningRef.on('value', function(snap){
    var list=snap.val();
    var previous_week_earning = document.getElementById('previous_week_earning');
    previous_week_earning.innerHTML = '';
    for(var key in list) {
      var innerPreviousWeekTotal = document.createTextNode('---');
      previous_week_earning.appendChild(innerPreviousWeekTotal);
    }
  });

  const previousDaysWorkedRef = firebase.database().ref().child('statsID/2/days_worked/');
  previousDaysWorkedRef.on('value', function(snap){
    var list=snap.val();
    var previous_days_worked = document.getElementById('previous_days_worked');
    previous_days_worked.innerHTML = '';
    for(var key in list) {
      var innerPreviousDaysWorked = document.createTextNode('---');
      previous_days_worked.appendChild(innerPreviousDaysWorked);
    }
  });

  const previousHoursWorkedRef = firebase.database().ref().child('statsID/2/hours_worked/');
  previousHoursWorkedRef.on('value', function(snap){
    var list=snap.val();
    var previous_hours_worked = document.getElementById('previous_hours_worked');
    previous_hours_worked.innerHTML = '';
    for(var key in list) {
      var innerPreviousHoursWorked = document.createTextNode('---');
      previous_hours_worked.appendChild(innerPreviousHoursWorked);
    }
  });

  const previousAvgEarningsRef = firebase.database().ref().child('statsID/2/average_earnings/');
  previousAvgEarningsRef.on('value', function(snap){
    var list=snap.val();
    var previous_average_earning = document.getElementById('previous_average_earning');
    previous_average_earning.innerHTML = '';
    for(var key in list) {
      var innerPreviousAverageEarnings = document.createTextNode('---');
      previous_average_earning.appendChild(innerPreviousAverageEarnings);
    }
  });




















// dbRefList.on('child_added', snap => {
//   const li = document.createElement('li');
//   li.innerText = snap.val();
//   ulList.appendChild(li);
// });

