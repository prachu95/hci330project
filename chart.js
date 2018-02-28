
      // Load the Visualization API and the piechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

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
        var options = {'title':'Distribution of Complaints based on Race',
                       'width':700,
                       'height': 300};
 
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

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

