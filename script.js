let total = 0;

function addHours() {
  let hours = document.getElementById("hours").value;
  total += Number(hours);
  document.getElementById("output").innerText = "Total Hours: " + total;
}
