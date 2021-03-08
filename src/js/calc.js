window.addEventListener("load", function () {
  // CALCULATOR
  Number.prototype.format = function (n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };

  var mLoanAmt = 0;
  var nTerm = 0;
  var nInt = 0;
  var nIntP = 0;
  var tPay = 0;
  var tInt = 0;
  var emiCalc = 0;
  var chrP = 100;
  var chrI = 0;
  var chrI1 = chrI.format(1) + "% Interest";
  var chrI2 = chrI;
  var chrP1 = chrP.format(1) + "% Principal";
  var chrP2 = chrP;
  var chrT = "Total Payment: " + tPay.format(2);
  var col1 = "#e0e0e0";
  var col2 = "#e0e0e0";

  google.charts.load("current", { packages: ["corechart"] });

  google.charts.setOnLoadCallback(drawChart);

  //document.getElementById('emicalForm').onsubmit = fCalculate();

  function formatMoney(n, c, d, t) {
    var c = isNaN((c = Math.abs(c))) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
      j = (j = i.length) > 3 ? j % 3 : 0;

    return (
      s +
      (j ? i.substr(0, j) + t : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
      (c
        ? d +
          Math.abs(n - i)
            .toFixed(c)
            .slice(2)
        : "")
    );
  }

  function fCalculate() {
    mLoanAmt = document.getElementById("mLoan").value;
    nTerm = document.getElementById("nTerm").value;
    nInt = document.getElementById("nInterest").value;
    nIntP = nInt / 100;
    mLoanAmt = parseFloat(mLoanAmt);
    tInt = parseFloat(tInt);

    emiCalc = (mLoanAmt * nIntP * parseFloat(Math.pow(1 + nIntP, nTerm))) / parseFloat(Math.pow(1 + nIntP, nTerm) - 1);
    emiCalc = emiCalc.toFixed(2);

    tInt = emiCalc * nTerm - mLoanAmt;
    //tInt = tInt.toFixed(2);

    tPay = mLoanAmt + tInt;

    document.getElementById("mEMI").textContent = "$" + formatMoney(emiCalc);
    document.getElementById("mInterest").textContent = "$" + formatMoney(tInt);
    document.getElementById("mPayment").textContent = "$" + formatMoney(tPay);

    chrP = (mLoanAmt / tPay) * 100;
    chrI = (tInt / tPay) * 100;

    chrI1 = chrI.format(1) + "% Interest";
    chrI2 = chrI;

    chrP1 = chrP.format(1) + "% Principal";
    chrP2 = chrP;

    chrT = '<tspan style="color: red;">Total Payment: $</tspan> ' + formatMoney(tPay);

    col1 = "#C1C7D0";
    col2 = "#00C7E5";

    google.charts.setOnLoadCallback(drawChart);
  }

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Interest", "Principal"],
      [chrI1, chrI2],
      [chrP1, chrP2],
    ]);

    var options = {
      title: "",
      chartArea: { width: "100%", height: "100%" },
      colors: [col1, col2],
      pieHole: 0.73,
      //   fontName: "Muli",
      pieSliceBorderColor: "none",
      //   sliceVisibilityThreshold: 0.5,
      fontSize: 16,
      legend: "none",
      pieSliceText: "none",
      enableInteractivity: false,
      backgroundColor: {
        fill: "transparent",
      },
    };

    var truncatedP1 = chrP1.substring(0, 5);
    document.getElementById("principal-legend").innerHTML = truncatedP1;

    var truncatedI1 = chrI1.substring(0, 5);
    document.getElementById("interest-legend").innerHTML = truncatedI1;

    var chart = new google.visualization.PieChart(document.getElementById("donutchart"));
    chart.draw(data, options);
  }

  // Draw chart with default values
  fCalculate();

  // Radio button input assign to hidden value

  document.querySelectorAll('input[name="nInterestValue"]').forEach(function (el) {
    el.addEventListener("change", function () {
      document.querySelector("#nInterest").value = this.value;
    });
  });

  // Range Slider Background changes

  document.getElementById("mLoan").oninput = function () {
    mLoanShow2.textContent = mLoan.value;
    this.style.background =
      "linear-gradient(to right, #015CE6 0%, #015CE6 " +
      mLoan.value / 1000 +
      "%, #C1C7D0 " +
      mLoan.value / 1000 +
      "%, #C1C7D0 100%)";
  };

  // document.getElementById("mLoanShow2").oninput = function () {
  //   mLoan.value = mLoanShow2.value;
  //   mLoan.style.background =
  //     "linear-gradient(to right, #ED1C24 0%, #ED1C24 " +
  //     mLoanShow2.value / 1000 +
  //     "%, #D3D3D3 " +
  //     mLoanShow2.value / 1000 +
  //     "%, #D3D3D3 100%)";
  // };

  document.getElementById("nTerm").oninput = function () {
    nTermShow.textContent = this.value;

    function percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
    }

    // console.log(object);

    this.style.background =
      "linear-gradient(to right, #015CE6 0%, #015CE6 " +
      (percentage(this.value, 36) - 3) +
      "%, #C1C7D0 " +
      (percentage(this.value, 36) - 3) +
      "%, #C1C7D0 100%)";
  };

  // Buttons
  function plusButton(el) {
    this.previousElementSibling.children[0].dispatchEvent(new Event("input"));
  }

  function minusButton(el) {
    this.nextElementSibling.children[0].dispatchEvent(new Event("input"));
  }

  document.querySelectorAll(".calc__button-plus").forEach(function (el) {
    el.addEventListener("click", plusButton);
  });

  document.querySelectorAll(".calc__button-minus").forEach(function (el) {
    el.addEventListener("click", minusButton);
  });

  document.querySelector(".calculate").addEventListener("click", fCalculate);

  // Chart redraw when window size is changed
  window.addEventListener("resize", function () {
    drawChart();
  });
});
