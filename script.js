/* Script.js*/

//function

function TipCalculator(){
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var totalPeople = document.getElementById("totalPeople").value;

	//validation

	if(billAmount === "" || serviceQuality === 0) {
		return window.alert("please enter the bill amount");
	}

	if(totalPeople === "" || totalPeople <= 1){
		totalPeople = 1;
		document.getElementById("each").style.display = "none";
	}
	else
	{
		document.getElementById("each").style.display = "block";
	}

	//calculation of tip math
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100)/100;
    total = total.toFixed(2);

    //display tip for each

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

//hide the tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//calling function for calculation

document.getElementById("calculate").onclick = function() { TipCalculator(); } ;