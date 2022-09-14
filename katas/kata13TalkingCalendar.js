const talkingCalendar = function (date) {
  let result = "";
  const dateArr = date.split("/");
  switch (dateArr[1]) {
    case "01":
      result += "January ";
      break;
    case "02":
      result += "February ";
      break;
    case "03":
      result += "March ";
      break;
    case "04":
      result += "April ";
      break;
    case "05":
      result += "May ";
      break;
    case "06":
      result += "June ";
      break;
    case "07":
      result += "July ";
      break;
    case "08":
      result += "August ";
      break;
    case "09":
      result += "September ";
      break;
    case "10":
      result += "October ";
      break;
    case "11":
      result += "November ";
      break;
    case "12":
      result += "December ";
      break;
    default:
      return "Choose a correct date";
  }
  if (dateArr[2][0] === "0") {
    result += dateArr[2][1];
  } else {
    result += dateArr[2];
  }
  switch (dateArr[2][1]) {
    case "1":
      result += "st, ";
      break;
    case "2":
      result += "nd, ";
      break;
    case "3":
      result += "rd, ";
      break;
    default:
      result += "th, ";
      break;
  }
  result += dateArr[0];
  return result;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
