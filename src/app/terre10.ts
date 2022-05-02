var args = process.argv.slice(2);
let datee = args[0];

function formatDatee(date: any) {
  const dateFull = date.split(":");
  const dateHour = dateFull[0];
  const dateMinute = dateFull[1];

  var hh = dateHour;
  var dd = "AM";

  var h = hh;
  if (h >= 12) {
    h = hh - 12;
    dd = "PM";
  }
  if (h == 0) {
    h = 12;
  }

  let lastFullDate = h + ":" + dateMinute + dd;
  console.log(lastFullDate)

  return lastFullDate;
}

formatDatee(datee);

