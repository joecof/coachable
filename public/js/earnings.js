// function myFunction() {
//     var innerPrev = document.getElementById("innerContent");
//     innerPrev.innerHTML = "<h1> July 13 - July 28 </h1>"
//     + "<p> July 14 $25</p>"
//     + "<p> July 16 $36</p>"
//     + "<p> July 22 $19</p>";
    
//   }

function myFunction2() {

}

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
  console.log(snap.val());
  var earningDates = snap.val();
  const novDates = document.getElementById('weekDates');
  for(var key in earningDates) {
    var dateItems = document.createElement('li');
    var innerDateItems = document.createTextNode(earningDates[key])
    dateItems.appendChild(innerDateItems);
    novDates.appendChild(dateItems);
  }
}) 

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




















// dbRefList.on('child_added', snap => {
//   const li = document.createElement('li');
//   li.innerText = snap.val();
//   ulList.appendChild(li);
// });

