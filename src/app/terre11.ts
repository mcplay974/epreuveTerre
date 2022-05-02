var args = process.argv.slice(2);

let dateee = args[0];

function formatDate(date: any) {
  const dateFull = date.split(":");
  const dateHour = dateFull[0];
  const dateMinute = dateFull[1];
  const aprem = dateMinute.substring(2);
  console.log(aprem)

  var hh = dateHour;

  var h = hh;
  if (aprem == "PM") {
    h = parseInt(hh) + 12;
  }
  if (h == 0 && aprem == "PM") {
    h = 12;
  }

  let lastFullDate = h + ":" + dateMinute.substring(0,2);
  console.log(lastFullDate)

  return lastFullDate;
}

formatDate(dateee);

