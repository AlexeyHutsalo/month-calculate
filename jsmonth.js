    function calcSalary() {
      var sallaryTable = document.getElementById("sallaryTable");
      var TaxTable = document.getElementById("TaxTable");
      var thTable = sallaryTable.getElementsByTagName("th");
      var th1Table = TaxTable.getElementsByTagName("th");
      var year = parseInt(document.getElementById('years').value);
      var month = String(document.getElementById('monthchoose').value);
      var worktime = parseInt(document.getElementById('days').value);
      var sicktime = parseInt(document.getElementById('sickleave').value);
      var LengthOfService = parseInt(document.getElementById('workyears').value);
      var vacations = parseInt(document.getElementById('vacation').value);
      if (isNaN(year)) year = 0;
      if (year <= 1950) {
        thTable[1].innerHTML = ' ';
        th1Table[1].innerHTML = ' ';
      } else { 
        thTable[1].innerHTML = year + "." + month; 
        th1Table[1].innerHTML = year + "." + month;
    }
      if (isNaN(worktime)) worktime = 0;
      thTable[11].innerHTML = worktime;
      var hours = worktime * 12;
      if (isNaN(hours)) hours = 0;
      thTable[12].innerHTML = hours;
      var presalary = worktime * 600;
      if (isNaN(presalary)) presalary = 0;
      thTable[13].innerHTML = presalary;
      if (isNaN(sicktime)) sicktime = 0;
      thTable[15].innerHTML = sicktime;
      var sickpay = 0, countsickpay;
        if (sicktime > 0 && sicktime <= 5) {
            sickpay = 600
        countsickpay = sickpay * sicktime;
    } else if (sicktime >= 6) { 
            countsickpay = ((sicktime - 5) * 300) + 3000;
        } else {
            countsickpay = 0;
        } 
        thTable[17].innerHTML = countsickpay;
        var PremiumForWork;
switch (LengthOfService) {
  case 1:
    PremiumForWork = 0;
    break;
  case 2:
    PremiumForWork = presalary * 0.1;
    break;
  case 3:
    PremiumForWork = presalary * 0.25;
    break;
  case 4:
    PremiumForWork = presalary * 0.5;
    break;
  default:
    PremiumForWork = 0;
}
if (isNaN(PremiumForWork)) PremiumForWork = 0;
thTable[21].innerHTML = PremiumForWork;
if (isNaN(vacations)) vacations = 0;
thTable[23].innerHTML = vacations;
var CountVacation;
    if (LengthOfService == 4) {
        CountVacation = vacations * 600;
    } else CountVacation = (vacations * 600) * 0.8;
    thTable[25].innerHTML = CountVacation;
        var CountPremium = 0 
    if (document.getElementById('premium').checked) {
            CountPremium = presalary * 0.2;
        }
        thTable[29].innerHTML = CountPremium;
        var FullPay = presalary + countsickpay + PremiumForWork + CountVacation + CountPremium;
            if (isNaN(FullPay)) FullPay = 0;
            thTable[31].innerHTML = FullPay.toFixed(2) + " ₴";
    var MilitaryTax = FullPay * 0.015;
    if (isNaN(MilitaryTax)) MilitaryTax = 0;
    th1Table[6].innerHTML = MilitaryTax.toFixed(2);
    var Taxes = FullPay * 0.2;
    if (isNaN(Taxes)) Taxes = 0;
    th1Table[8].innerHTML = Taxes;
    var SumOfTax = MilitaryTax + Taxes;
    if (isNaN(SumOfTax)) SumOfTax = 0;
    th1Table[10].innerHTML = SumOfTax.toFixed(2) + " ₴";
    var prepayment = (FullPay - SumOfTax) * 0.3;
    if (isNaN(prepayment)) prepayment = 0;
    thTable[36].innerHTML = prepayment.toFixed(2) + " ₴";
    var payment = (FullPay - SumOfTax) * 0.7;
    if (isNaN(payment)) payment = 0;
    thTable[40].innerHTML = payment.toFixed(2) + " ₴";
    var FullPayment = prepayment + payment;
    if (isNaN(FullPayment)) FullPayment = 0;
    thTable[42].innerHTML = FullPayment.toFixed(2) + " ₴";
}

function navitomonth() {
  window.location = "https://alexeyhutsalo.github.io/month-calculate/"
}

function navitoyear() {
  window.location = "https://alexeyhutsalo.github.io/year-calculate/"
}