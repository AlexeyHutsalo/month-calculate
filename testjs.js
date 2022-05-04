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
      thTable[1].innerHTML = year + "." + month;
      th1Table[1].innerHTML = year + "." + month;
      thTable[11].innerHTML = worktime;
      var hours = worktime * 12;
      thTable[12].innerHTML = hours;
      var presalary = worktime * 600;
      thTable[13].innerHTML = presalary;
      thTable[15].innerHTML = sicktime;
      var sickpay = 0, sickpaytime = 0, countsickpay;
        if (sicktime > 0 && sicktime <= 5) {
            sickpay = 600
        countsickpay = sickpay * sicktime;
        } else {
            countsickpay = ((sicktime - 5) * 300) + 3000;
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
thTable[21].innerHTML = PremiumForWork;
thTable[23].innerHTML = vacations;
var CountVacation;
    if (LengthOfService == 4) {
        CountVacation = vacations * 600;
    } else CountVacation = (vacations * 600) * 0.8;
    thTable[25].innerHTML = CountVacation;
        var CountPremium = presalary * 0.2;
    if (document.getElementById('premium').checked) {
            thTable[29].innerHTML = CountPremium;
        }
        var FullPay = presalary + countsickpay + PremiumForWork + CountVacation + CountPremium;
            thTable[31].innerHTML = FullPay;
    var MilitaryTax = FullPay * 0.015;
    th1Table[6].innerHTML = MilitaryTax;
    var Taxes = FullPay * 0.2;
    th1Table[8].innerHTML = Taxes;
    var SumOfTax = MilitaryTax + Taxes;
    th1Table[10].innerHTML = SumOfTax;

}



    // function getAllParaElems() {
    //   var sallaryTable = document.getElementById("sallaryTable");
    //   var div1Paras = sallaryTable.getElementsByTagName("th");
    //   var num = div1Paras.length;
    //   alert("There are " + num + " paragraph in #sallaryTable");
    // }