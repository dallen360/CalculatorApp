
var controller = (function()
{

    //-------Strings---------

    var DOM = 
    {
        hourly: "#pay-hour",
        dayly: "#pay-day",
        weekly: "#pay-weekly",
        monthly: "#pay-month",
        yearly: "#pay-yearly",
        //
        paycheck: "#paycheck",
        taxes: "#paycheck-taxes",
        savings: "#paycheck-savings",
        total: "#total",
        totalSpend: "#total-amount",
        //
        savingsBtn: "#savings-input",
        paycheckInp: "#paycheck-amount",
        //
        daysWorked: "#days-worked-amount",
        hoursWorked: "#hours-day-amount",
        //


        
    //------Return-Strings-----
    };

    return{
        returnDOM: function(){
            return DOM;
        }
    }

})();

var payController = (function()
{
    var DOMS = controller.returnDOM();
    var btn1,btn2,btn3,btn4,btn5,taxPer;

    btn1 = document.querySelector("#btn-1");
    btn2 = document.querySelector("#btn-2");
    btn3 = document.querySelector("#btn-3");
    btn4 = document.querySelector("#btn-4");
    btn5 = document.querySelector("#btn-5");

    taxPer = document.querySelector("#tax-percent");


    document.querySelector("#btn-1").addEventListener("click", function(){
        taxPer.innerHTML = "10" + "%";
        btn1.style.backgroundColor = "#37b6f1";
        btn2.style.backgroundColor = 'white';
        btn3.style.backgroundColor = 'white';
        btn4.style.backgroundColor = 'white';
        btn5.style.backgroundColor = 'white';
        document.querySelector(DOMS.taxes).innerHTML = "$" + (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") * ("." + taxPer.innerHTML.replace("%",""))).toFixed(2);
        document.querySelector(DOMS.total).innerHTML = "$" + (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") - (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") * ("." + taxPer.innerHTML.replace("%","")))).toFixed(2);
    });
    document.querySelector("#btn-2").addEventListener("click", function(){
        taxPer.innerHTML = "15" + "%";
        btn2.style.backgroundColor = "#37b6f1";
        btn1.style.backgroundColor = "white";
        btn3.style.backgroundColor = 'white';
        btn4.style.backgroundColor = 'white';
        btn5.style.backgroundColor = 'white';
        document.querySelector(DOMS.taxes).innerHTML = "$" + (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") * ("." + taxPer.innerHTML.replace("%",""))).toFixed(2);
        document.querySelector(DOMS.total).innerHTML = "$" + (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") - (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") * ("." + taxPer.innerHTML.replace("%","")))).toFixed(2);
    });
    document.querySelector("#btn-3").addEventListener("click", function(){
        taxPer.innerHTML = "20" + "%";
        btn3.style.backgroundColor = "#37b6f1";
        btn2.style.backgroundColor = 'white';
        btn2.style.backgroundColor = 'white';
        btn4.style.backgroundColor = 'white';
        btn5.style.backgroundColor = 'white';
        document.querySelector(DOMS.taxes).innerHTML = "$" + (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") * ("." + taxPer.innerHTML.replace("%",""))).toFixed(2);
        document.querySelector(DOMS.total).innerHTML = "$" + (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") - (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") * ("." + taxPer.innerHTML.replace("%","")))).toFixed(2);
    });
    document.querySelector("#btn-4").addEventListener("click", function(){
        taxPer.innerHTML = "25" + "%";
        btn4.style.backgroundColor = "#37b6f1";
        btn3.style.backgroundColor = 'white';
        btn2.style.backgroundColor = 'white';
        btn1.style.backgroundColor = 'white';
        btn5.style.backgroundColor = 'white';
        document.querySelector(DOMS.taxes).innerHTML = "$" + (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") * ("." + taxPer.innerHTML.replace("%",""))).toFixed(2);
        document.querySelector(DOMS.total).innerHTML = "$" + (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") - (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") * ("." + taxPer.innerHTML.replace("%","")))).toFixed(2);
    });
    document.querySelector("#btn-5").addEventListener("click", function(){
        taxPer.innerHTML = "30" + "%";
        btn5.style.backgroundColor = "#37b6f1";
        btn4.style.backgroundColor = 'white';
        btn3.style.backgroundColor = 'white';
        btn2.style.backgroundColor = 'white';
        btn1.style.backgroundColor = 'white';
        document.querySelector(DOMS.taxes).innerHTML = "$" + (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") * ("." + taxPer.innerHTML.replace("%",""))).toFixed(2);
        document.querySelector(DOMS.total).innerHTML = "$" + (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") - (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") * ("." + taxPer.innerHTML.replace("%","")))).toFixed(2);
    });


//---------Paycheck-Input-------
    document.querySelector(DOMS.paycheckInp).addEventListener("input", function(inp){
        var input = inp;
            document.querySelector(DOMS.paycheck).innerHTML = "$" + input.target.value;
            document.querySelector(DOMS.taxes).innerHTML = "$" + (inp.target.value * ("." + taxPer.innerHTML.replace("%",""))).toFixed(2);
            document.querySelector(DOMS.total).innerHTML = "$" + (input.target.value - (inp.target.value * ("." + taxPer.innerHTML.replace("%","")))).toFixed(2);
    });

//---------Savings-Input--------
    document.querySelector(DOMS.savingsBtn).addEventListener("input", function(inp)
    {
        var input = inp;
            document.querySelector(DOMS.savings).innerHTML = "$" + input.target.value;
    });

})();

var timeController = (function(cont)
{
    var DOMS = controller.returnDOM();

    document.querySelector("#btn1").addEventListener("click", function()
    {
        var hourly = (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") / document.querySelector(DOMS.daysWorked).value / document.querySelector(DOMS.hoursWorked).value).toFixed(2);

        //---------Rates------------
        if(!document.querySelector(DOMS.daysWorked).value == "" && !document.querySelector(DOMS.hoursWorked).value == "" && !document.querySelector(DOMS.paycheckInp).value == "")
        {
            // ------Hourly--------
            document.querySelector(DOMS.hourly).innerHTML = "$" + (hourly - (hourly * ("." + document.querySelector("#tax-percent").innerHTML.replace("%","")))).toFixed(2);
            //------Dayly---------
            document.querySelector(DOMS.dayly).innerHTML = "$" + (document.querySelector(DOMS.hourly).innerHTML.replace("$","") * document.querySelector(DOMS.hoursWorked).value).toFixed(2);
            //------Weekly--------
            document.querySelector(DOMS.weekly).innerHTML = "$" + ((document.querySelector(DOMS.daysWorked).value / 2) * document.querySelector(DOMS.dayly).innerHTML.replace("$","")).toFixed(2);
            //------Monthly-------
            document.querySelector(DOMS.monthly).innerHTML = "$" + (document.querySelector(DOMS.weekly).innerHTML.replace("$","") * 4).toFixed(2);
            //------Yearly--------
            document.querySelector(DOMS.yearly).innerHTML = "$" + (document.querySelector(DOMS.monthly).innerHTML.replace("$","") * 12).toFixed(2);

            //---------------------

            //-----Total----------
            document.querySelector(DOMS.total).innerHTML = "$"+ (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") - document.querySelector(DOMS.savings).innerHTML.replace("$","") - document.querySelector(DOMS.taxes).innerHTML.replace("$","")).toFixed(2);
            document.querySelector(DOMS.totalSpend).innerHTML = "$"+ (document.querySelector(DOMS.paycheck).innerHTML.replace("$","") - document.querySelector(DOMS.savings).innerHTML.replace("$","") - document.querySelector(DOMS.taxes).innerHTML.replace("$","")).toFixed(2);
        };
    });
})(payController);