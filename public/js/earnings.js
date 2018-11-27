// function myFunction() {
//     var innerPrev = document.getElementById("innerContent");
//     innerPrev.innerHTML = "<h1> July 13 - July 28 </h1>"
//     + "<p> July 14 $25</p>"
//     + "<p> July 16 $36</p>"
//     + "<p> July 22 $19</p>";
    
//   }

function myFunction2() {

  
  
}

// var insideContent = document.getElementById('innerContent');
// var insideContent2 = document.createElement('div');
// insideContent.appendChild(insideContent2);

// insideContent2.style.width = '200';
// insideContent2.style.height = '200';
// insideContent2.style.backgroundColor = 'pink';





const dbRefObject = firebase.database().ref().child('earnings/');

dbRefObject.on('value',function(snap){
  console.log(snap.val());
  var list=snap.val();
  //document.getElementById("data1").innerText = list["coffee"];

  const data1 = document.getElementById("data1");

  for(var key in list) {
      console.log(list[key]);
      var listItems = document.createElement("li");
      // listItems = document.innerHTML('November 12');
      
      var textInListItems = document.createTextNode(list[key])
    
      listItems.appendChild(textInListItems);
      document.getElementById("myList").appendChild(listItems);

      var unorderedList = document.getElementById("myList");
      unorderedList.style.listStyleType = 'none';
      listItems.style.margin = "0 0 14px 0";
      
      //data1.innerText = list[key];
  }
});

const dbRefObject1 = firebase.database().ref().child('total/'); 

dbRefObject1.on('value', function(snap) {
  console.log(snap.val());
  var total = snap.val();

  for(var key in total) {
    console.log(total[key]);
    var totalAmount = document.getElementById('total');
    var textInTotal = document.createTextNode(total[key]);
    totalAmount.appendChild(textInTotal);
  
    // console.log(total["$265"]);
  }

})

dbRefObject2 = firebase.database().ref().child('dates1/');

dbRefObject2.on('value', function(snap) {
  console.log(snap.val());
  var earningDates = snap.val();

  const novDates = document.getElementById('novDates');

  for(var key in earningDates) {
    var dateItems = document.createElement('li');
    var innerDateItems = document.createTextNode(earningDates[key])

    dateItems.appendChild(innerDateItems);
    novDates.appendChild(dateItems);

  }
}) 
















// dbRefList.on('child_added', snap => {
//   const li = document.createElement('li');
//   li.innerText = snap.val();
//   ulList.appendChild(li);
// });

