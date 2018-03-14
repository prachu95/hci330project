// This is a test message for git.

/*

FoIA_page.html js elements.

    */


var zChar = new Array(' ', '(', ')', '-', '.');
var maxphonelength = 13;
var phonevalue1;
var phonevalue2;
var cursorposition;

function ParseForNumber1(object) {
    phonevalue1 = ParseChar(object.value, zChar);
}

function ParseForNumber2(object) {
    phonevalue2 = ParseChar(object.value, zChar);
}

function backspacerUP(object, e) {
    if (e) {
        e = e
    } else {
        e = window.event
    }
    if (e.which) {
        var keycode = e.which
    } else {
        var keycode = e.keyCode
    }

    ParseForNumber1(object)

    if (keycode >= 48) {
        ValidatePhone(object)
    }
}

function backspacerDOWN(object, e) {
    if (e) {
        e = e
    } else {
        e = window.event
    }
    if (e.which) {
        var keycode = e.which
    } else {
        var keycode = e.keyCode
    }
    ParseForNumber2(object)
}

function GetCursorPosition() {

    var t1 = phonevalue1;
    var t2 = phonevalue2;
    var bool = false
    for (i = 0; i < t1.length; i++) {
        if (t1.substring(i, 1) != t2.substring(i, 1)) {
            if (!bool) {
                cursorposition = i
                bool = true
            }
        }
    }
}

function ValidatePhone(object) {

    var p = phonevalue1

    p = p.replace(/[^\d]*/gi, "")

    if (p.length < 3) {
        object.value = p
    } else if (p.length == 3) {
        pp = p;
        d4 = p.indexOf('(')
        d5 = p.indexOf(')')
        if (d4 == -1) {
            pp = "(" + pp;
        }
        if (d5 == -1) {
            pp = pp + ")";
        }
        object.value = pp;
    } else if (p.length > 3 && p.length < 7) {
        p = "(" + p;
        l30 = p.length;
        p30 = p.substring(0, 4);
        p30 = p30 + ")"

        p31 = p.substring(4, l30);
        pp = p30 + p31;

        object.value = pp;

    } else if (p.length >= 7) {
        p = "(" + p;
        l30 = p.length;
        p30 = p.substring(0, 4);
        p30 = p30 + ")"

        p31 = p.substring(4, l30);
        pp = p30 + p31;

        l40 = pp.length;
        p40 = pp.substring(0, 8);
        p40 = p40 + "-"

        p41 = pp.substring(8, l40);
        ppp = p40 + p41;

        object.value = ppp.substring(0, maxphonelength);
    }

    GetCursorPosition()

    if (cursorposition >= 0) {
        if (cursorposition == 0) {
            cursorposition = 2
        } else if (cursorposition <= 2) {
            cursorposition = cursorposition + 1
        } else if (cursorposition <= 5) {
            cursorposition = cursorposition + 2
        } else if (cursorposition == 6) {
            cursorposition = cursorposition + 2
        } else if (cursorposition == 7) {
            cursorposition = cursorposition + 4
            e1 = object.value.indexOf(')')
            e2 = object.value.indexOf('-')
            if (e1 > -1 && e2 > -1) {
                if (e2 - e1 == 4) {
                    cursorposition = cursorposition - 1
                }
            }
        } else if (cursorposition < 11) {
            cursorposition = cursorposition + 3
        } else if (cursorposition == 11) {
            cursorposition = cursorposition + 1
        } else if (cursorposition >= 12) {
            cursorposition = cursorposition
        }

        var txtRange = object.createTextRange();
        txtRange.moveStart("character", cursorposition);
        txtRange.moveEnd("character", cursorposition - object.value.length);
        txtRange.select();
    }

}

function ParseChar(sStr, sChar) {
    if (sChar.length == null) {
        zChar = new Array(sChar);
    } else zChar = sChar;

    for (i = 0; i < zChar.length; i++) {
        sNewStr = "";

        var iStart = 0;
        var iEnd = sStr.indexOf(sChar[i]);

        while (iEnd != -1) {
            sNewStr += sStr.substring(iStart, iEnd);
            iStart = iEnd + 1;
            iEnd = sStr.indexOf(sChar[i], iStart);
        }
        sNewStr += sStr.substring(sStr.lastIndexOf(sChar[i]) + 1, sStr.length);

        sStr = sNewStr;
    }

    return sNewStr;
}

function submitForm() {

	if (document.getElementById('name').value != "" && document.getElementById('email').value != "" &&
	 document.getElementById('address').value != "" && document.getElementById('bar').value != "" &&
	 document.getElementById('oname').value != "" && document.getElementById('badgeID').value != ""
	 ){
		window.location.replace("FoIA_page_success.html");
	}
	else {
		alert("Please enter both your information and the information of the officer")
	}
}



/*

index.html js elements.

*/





/*

    result_page.html js elements.

*/

function submitComment() {
	if (document.getElementById("new-user").value != "") {
		if (document.getElementById("new-comment").value != "Share your experience...") {
			document.getElementById("submitted-username").innerHTML = document.getElementById("new-user").value + ": ";
			document.getElementById("submitted-comment-text").innerHTML = document.getElementById("new-comment").value;

			document.getElementById("new-comment-area").remove();

		}
		else {
			alert("Please enter a comment.")
		}
	}
	else {
		alert("Please enter a name to display. This can be either your real name or an alias.")
	}
}

function resultsRowToLink(num) {
	if (num == 0) {
		location.href="result_expanded.html";
	}
	if (num == 1) {
		location.href="incident_description.html";
	}
}


function sortTable(n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("initial_results");
	switching = true;
	dir = "ascending" // set sort direction
	while (switching) {
		switching = false;
		rows = table.getElementsByTagName("TR");
		for (i = 1; i < (rows.length - 1); i++) { // loop through table rows
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[n];      // compare item in row
			y = rows[i + 1].getElementsByTagName("TD")[n];  // and item in next row

			if (dir == "ascending") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					shouldSwitch = true;  // if lower item larger, mark to switch
					break;				  // and break loop
				}
			} else if (dir == "descending") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
			switching = true;
			switchcount++;
		} else {
			if (switchcount == 0 && dir == "ascending") {
				dir = "descending";
				switching = true;
			}
		}
	}

}

function sortTableNum(n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("initial_results");
	switching = true;
	dir = "ascending" // set sort direction
	while (switching) {
		switching = false;
		rows = table.getElementsByTagName("TR");
		for (i = 1; i < (rows.length - 1); i++) { // loop through table rows
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[n];      // compare item in row
			y = rows[i + 1].getElementsByTagName("TD")[n];  // and item in next row

			if (dir == "ascending") {
				if (Number(x.innerHTML) > Number(y.innerHTML)) {
					shouldSwitch = true;  // if lower item larger, mark to switch
					break;				  // and break loop
				}
			} else if (dir == "descending") {
				if (Number(x.innerHTML) < Number(y.innerHTML)) {
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
			switching = true;
			switchcount++;
		} else {
			if (switchcount == 0 && dir == "ascending") {
				dir = "descending";
				switching = true;
			}
		}
	}

}
