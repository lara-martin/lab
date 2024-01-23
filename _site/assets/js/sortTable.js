/* Adapted from https://www.w3schools.com/howto/howto_js_sort_table.asp */
function sortTable(n, tabID) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(tabID);
  var header = table.getElementsByTagName("TR")[0].getElementsByTagName("TH")[n].getElementsByTagName("DIV")[0];
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (x.querySelector("a")){
      	x = x.getElementsByTagName("A")[0];
      }
      if (y.querySelector("a")){
      	y = y.getElementsByTagName("A")[0];
      }
      var undx = false;
      var undy = false;
      	if (typeof(y) === 'undefined' || typeof(y.innerHTML) === 'undefined' )
      	{
      	  undy = true;
      	}
      	if (typeof(x) === 'undefined' || typeof(x.innerHTML) === 'undefined' )
      	{
      	  undx = true;
      	}
      if (undx === true & undy === true){continue;}
      if (dir == "asc") {
        header.classList.remove("fa-sort-down");
        header.classList.remove("fa-sort");
        header.classList.add("fa-sort-up");

        if (undx === true & undy === false){
          shouldSwitch = true;
          break;
        }
        else if (undx === false & undy === true){
          continue;
        }       
        else if (x.innerHTML.toLowerCase().trim() > y.innerHTML.toLowerCase().trim()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        header.classList.remove("fa-sort-up");
        header.classList.add("fa-sort-down");
        if (undx === false & undy === true){
          shouldSwitch = true;
          break;
        }
        else if (undx === true & undy === false){
          continue;
        }
        else if (x.innerHTML.toLowerCase().trim() < y.innerHTML.toLowerCase().trim()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

