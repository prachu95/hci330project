// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(demographies);
google.charts.setOnLoadCallback(categories);
google.charts.setOnLoadCallback(district);
google.charts.setOnLoadCallback(raceOfOfficers);
google.charts.setOnLoadCallback(penalty);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function demographies() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Count');
  data.addRows([
    ['AMER IND/ALASKAN NATIVE', 38],
    ['ASIAN/PACIFIC ISLANDER', 427],
    ['BLACK', 28297],
    ['BLACK HISPANIC', 209],
    ['HISPANIC', 848],
    ['UNKNOWN', 2880],
    ['WHITE', 10323],
    ['WHITE HISPANIC', 4562]
  ]);

  // Set chart options
  

  // data from the file name : complainants.csv
  var options = {'title':'Distribution of Complaints based on Race', 
				'backgroundColor': 'transparent',
                animation:{
        "startup": true,
        duration: 1000,
        easing: 'out',
      },
                'width':700,
                'height': 300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('demographies'));

  function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var topping = data.getValue(selectedItem.row, 0);
      alert('The user selected ' + topping);
    }
  }

  google.visualization.events.addListener(chart, 'select', selectHandler);    
  chart.draw(data, options);
}

function categories() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Count');

  data.addRows([
['03B-SEARCH WITHOUT WARRANT', 4325],
['03C-SEARCH OF PREMISE/VEHICLE WITHOUT WARRANT', 13262],
['03D-ILLEGAL ARREST', 7997],
['03G-MISCELLANEOUS', 5913],
['04E-PRISONERS PROPERTY - INVENTORY/RECEIPT', 4314],
['05A-ARRESTEE - DURING ARREST', 12980],
['05L-UNNECESSARY PHYSICAL CONTACT - ON DUTY', 3346],
['10J-NEGLECT OF DUTY/CONDUCT UNBECOMING - ON DUTY', 8060],
['10U-INADEQUATE/FAILURE TO PROVIDE SERVICE', 15149],
['10Z-MISCELLANEOUS', 6591],
  ]);

  // Set chart options

  // data from the file name : accused.csv
  var options = {'title':'No. of Complaints based on Categories', 
				'legend': 'none',
				'colors':['#157E8A'],
				'backgroundColor': 'transparent',
        animation:{
        startup: true,
        duration: 1000,
        easing: 'out',
      },
                'width':700,
                'height': 300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('categories'));

  function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var topping = data.getValue(selectedItem.row, 0);
      alert('The user selected ' + topping);
    }
  }

  google.visualization.events.addListener(chart, 'select', selectHandler);    
  chart.draw(data, options);
}




function district() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Count');
  data.addRows([
                ['District 1',92],
                ['District 2',62],
                ['District 3',153],
                ['District 4',908],
                ['District 5',161],
                ['District 6',7],
                ['District 7',3],
                ['District 8',121],
                ['District 9',98],
                ['District 10',34],
                ['District 11',36],
                ['District 12',65],
                ['District 13',37],
                ['District 14',288],
                ['District 15',241],
                ['District 16',30],
                ['District 17',3980],
                ['District 18',8],
                ['District 19',1568],
                ['District 20',26],

  ]);

  // Set chart options

  // data from the file name : complaints.csv
  var options = {'title':'District-wise complaints registered',
				'legend': 'none',
				'colors':['#157E8A'],
				'backgroundColor': 'transparent',
                'width':700,
                'height': 300,
                      animation:{
        startup: true,
        duration: 1000,
        easing: 'out',
      }};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('district'));

  function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var topping = data.getValue(selectedItem.row, 0);
      alert('The user selected ' + topping);
    }
  }

  google.visualization.events.addListener(chart, 'select', selectHandler);    
  chart.draw(data, options);
}


function raceOfOfficers() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Count');
  data.addRows([
['ASIAN/PACIFIC ISLANDER',2605],
['BLACK',30980],
['HISPANIC',23824],
['WHITE',67743],

  ]);

  // Set chart options

  // data from the file name : accused.csv
  var options = {'title':'Race distribution among accused personnel',
				'backgroundColor': 'transparent',
                animation:{
        startup: true,
        duration: 1000,
        easing: 'out',
      },
                'width':700,
                'height': 300,};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('raceOfOfficers'));

  function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var topping = data.getValue(selectedItem.row, 0);
      alert('The user selected ' + topping);
    }
  }

  google.visualization.events.addListener(chart, 'select', selectHandler);    
  chart.draw(data, options);
}


function penalty() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
['VIOLATION NOTED',831],
['DAY SUSPENSION',3919],
['OTHERS',99],
['REPRIMAND',2178],
['SUSPENDED OVER 30 DAYS',64],
['ADMINISTRATIVE TERMINATION',58],
['SEPARATION',137],
['REINSTATED',34],
['NO ACTION TAKEN',109722],
['RESIGNED - NOT SERVED',644],
['PENALTY NOT SERVED',283],
  ]);

  // Set chart options

  // data from the file name : accused.csv
  var options = {'title':'Final Actions Taken against accused',
  'backgroundColor': 'transparent',
                 'width':700,
                         animation:{
        startup: true,
        duration: 1000,
        easing: 'out',
      },
                 'height': 300
               };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('penalty'));

  function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var topping = data.getValue(selectedItem.row, 0);
      alert('The user selected ' + topping);
    }
  }

  google.visualization.events.addListener(chart, 'select', selectHandler);    
  chart.draw(data, options);
}