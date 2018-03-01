
// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(demographies);
google.charts.setOnLoadCallback(categories);
google.charts.setOnLoadCallback(district);
google.charts.setOnLoadCallback(raceOfOfficers);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function demographies() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
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
  data.addColumn('number', 'Slices');
  data.addRows([
  ['01A-USE OF PROFANITY', 3157],
  ['01B-RACIAL/ETHNIC, ETC.', 1206],
  ['01C-MISCELLANEOUS', 708],
['02A-INTOXICATED ON DUTY', 68],
['02B-INTOXICATED OFF DUTY', 87],
['02C-D.U.I. - ON DUTY', 5],
['02D-D.U.I. - OFF DUTY', 123],
['02E-POSSESSION/DRINKING ALCOHOL - ON DUTY', 13],
['02G-MISCELLANEOUS', 12],
['03A-FIRST AMENDMENT', 35],
['03B-SEARCH OF PERSON WITHOUT WARRANT', 4325],
['03C-SEARCH OF PREMISE/VEHICLE WITHOUT WARRANT', 13262],
['03D-ILLEGAL ARREST', 7997],
['03E-INJURY/DEATH (UNDER COLOR OF LAW)', 1],
['03F-FAILURE TO INSURE', 7],
['03G-MISCELLANEOUS', 5913],
['03P-RACIAL PROFILING (ADVOCATE USE ON CLOSING ONLY)', 43],
['04A-BONDING/BOOKING/PROCESSING', 212],
['04B-ARREST/IMPROPER', 397],
['04C-EXCESSIVE DETENTION', 53],
['04D-SEARCH, PERSON/PROPERTY', 570],
['04E-PRISONERS PROPERTY - INVENTORY/RECEIPT', 4314],
['04F-ESCAPE', 425],
['04G-TELEPHONE - ATTORNEY/RELATIVE PRIVILEGES', 185],
['04H-PROPER CARE, INJURY/DEATH', 462],
['04J-MISCELLANEOUS', 566],
['05A-ARRESTEE - DURING ARREST', 12980],
['05B-ARRESTEE - AFTER ARREST, PRIOR TO LOCKUP', 2612],
['05C-ARRESTEE - LOCKUP/DETENTION', 356],
['05D-NO ARREST', 1872],
['05E-TRAFFIC', 318],
['05F-DOMESTIC', 110],
['05G-WEAPON, USE/DISPLAY OF', 1287],
['05H-MISCELLANEOUS', 852],
['05J-U CONVERTED TO C.R. (RECORDS KEEPING ONLY, INITIAL)', 69],
['05K-DOMESTIC ALTERCATION/INCIDENT - OFF DUTY', 1934],
['05L-UNNECESSARY PHYSICAL CONTACT - ON DUTY', 3346],
['05M-UNNECESSARY PHYSICAL CONTACT - OFF DUTY', 731],
['05N-WEAPON - UNNECESSARY DISPLAY OF', 866],
['05P-EXCESSIVE FORCE - OFF DUTY (INCLUDES NEIGHBOR, TRAFFIC, TAV)', 433],
['05Q-CIVIL SUIT - THIRD PARTY', 1481],
['05T-EXCESSIVE FORCE - TASER - USE OF', 37],
['06A-SOLICIT/ACCEPT BRIBE (NON-TRAFFIC)', 19],
['06B-SOLICIT/ACCEPT BRIBE (TRAFFIC)', 16],
['06C-EXTORTION', 17],
['06D-BRIBE, FAILURE TO REPORT', 2],
['06E-GRATUITY', 6],
['06F-RECOMMEND PROFESSIONAL SERVICE', 14],
['06G-USE OFFICIAL POSITION', 50],
['06H-AN ACT TO CIRCUMVENT CRIMINAL PROSECUTION', 7],
['06J-MISCELLANEOUS', 252],
['07A-MISCONDUCT DURING ISSUANCE OF CITATION', 1119],
['07B-IMPROPER PROCESSING/REPORTING/PROCEDURES', 843],
['07C-VIOLATION (OTHER THAN D.U.I.) - ON DUTY', 26],
['07D-PARKING COMPLAINTS', 134],
['07E-FAIL TO ENFORCE TRAFFIC REGULATIONS', 106],
['07F-MISCELLANEOUS', 962],
['07T-PREVENTABLE TRAFFIC ACCIDENT', 41],
['08A-MURDER/MANSLAUGHTER, ETC.', 2],
['08B-ASSAULT/BATTERY, ETC.', 28],
['08C-RAPE/SEX OFFENSES', 95],
['08D-BURGLARY', 2],
['08E-AUTO THEFT', 3],
['08F-THEFT', 350],
['08G-SHOPLIFTING', 1],
['08H-ROBBERY', 4],
['08J-DRUGS/CONTR. SUB., POSSESSION OR SALE', 71],
['08K-DAMAGE/TRESPASSING PROPERTY', 655],
['08L-ARSON', 2],
['08M-OTHER FELONY', 64],
['08N-MISCELLANEOUS', 547],
['08P-POLICE IMPERSONATOR - ADV SECTION USE ON CLOSING ONLY', 14],
['09A-ALTERCATION/DISTURBANCE - DOMESTIC', 156],
['09B-ALTERCATION/DISTURBANCE - NEIGHBOR', 175],
['09C-ALTERCATION/DISTURBANCE - TRAFFIC', 211],
['09D-TRAFFIC VIOLATION (OTHER THAN D.U.I.)', 53],
['09E-MISDEMEANOR ARREST', 24],
['09F-SEXUAL MISCONDUCT', 14],
['09G-ABUSE OF AUTHORITY', 94],
['09H-JUDICIAL PROCESS/DIRECTIVE - CONTEMPT', 16],
['09J-MISCELLANEOUS', 1445],
['09K-INDEBTEDNESS TO CITY', 242],
['09L-DRIVERS LICENSE REVOKED/SUSPENDED', 15],
['10A-ABSENT WITHOUT PERMISSION', 168],
['10B-MEDICAL ROLL', 445],
['10C-COMPENSATORY TIME', 35],
['10D-COMMUNICATION OPERATIONS PROCEDURES', 1152],
['10E-SECONDARY/SPECIAL EMPLOYMENT', 53],
['10F-COURT IRREGULARITIES', 134],
['10G-UNFIT FOR DUTY', 5],
['10H-LEAVING ASSIGNMENT (DISTRICT, BEAT, SECTOR, COURT)', 176],
['10J-NEGLECT OF DUTY/CONDUCT UNBECOMING - ON DUTY', 8060],
['10K-LATE - ROLL CALL/ASSIGNMENT/COURT', 12],
['10L-WEAPON/AMMUNITION/UNIFORM DEVIATION', 270],
['10M-INSUBORDINATION', 458],
['10N-LUNCH/PERSONAL VIOLATIONS', 6],
['10P-MISUSE OF DEPARTMENT EQUIPMENT/SUPPLIES', 553],
['10Q-MISUSE DEPARTMENT RECORDS', 202],
['10R-RESIDENCY', 95],
['10S-SEXUAL HARRASSMENT', 271],
['10T-REPORTS - FAILED TO SUBMIT/IMPROPER', 3271],
['10U-INADEQUATE/FAILURE TO PROVIDE SERVICE', 15149],
['10V-INVENTORY PROCEDURES', 2901],
['10W-VEHICLE LICENSING - CITY', 43],
['10X-VEHICLE LICENSING - STATE', 76],
['10Y-ACT TO CIRCUMVENT PROPER ADMINISTRATIVE ACTION', 22],
['10Z-MISCELLANEOUS', 6591],
['11A-FORWARDED TO O.E.C.', 4],
['12A-PROPER ACTION, INITIATE', 113],
['12B-PROPER DIRECTION - SUBORDINATE', 37],
['12C-PROPER ACTION REVIEW/INSPECT - SUBORDINATE', 6],
['12D-FAIL TO OBTAIN A COMPLAINT REGISTER NUMBER', 368],
['12E-IMPROPER/INADEQUATE INVESTIGATION', 72],
['12F-MISCELLANEOUS', 362],
['14A-STATE CIVIL SUIT', 423],
['14B-FEDERAL CIVIL SUIT', 530],
['15A-USE/ABUSE DRUGS/CONTR. SUBSTANCE - ON DUTY', 26],
['15B-USE/ABUSE DRUGS/CONTR. SUBSTANCE - OFF DUTY', 55],
['15C-D.U.I., DRUGS/ CONTR. SUB. - ON DUTY', 4],
['15D-D.U.I., DRUGS/ CONTR. SUB. - OFF DUTY', 6],
['15E-POSITIVE DRUG SCREEN - ORIGINATED FROM COMPLAINT', 18],
['15H-POSITIVE DRUG SCREEN - OTHER PHYSICAL EXAM', 56],
['15J-REFUSAL OF DIRECT ORDER TO PROVIDE DRUG SCREEN SPECIMEN', 3],
['15K-MISCELLANEOUS', 21],
  ]);

  // Set chart options

  // data from the file name : accused.csv
  var options = {'title':'No. of Complaints based on Categories',
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
  data.addColumn('number', 'Slices');
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
                 'width':700,
                 'height': 300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('district'));

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
  data.addColumn('number', 'Slices');
  data.addRows([
['ASIAN/PACIFIC ISLANDER',2605],
['BLACK',30980],
['HISPANIC',23824],
['WHITE',67743],

  ]);

  // Set chart options

  // data from the file name : complaints.csv
  var options = {'title':'Race distribution among accused personnel',
                 'width':700,
                 'height': 300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('raceOfOfficers'));

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