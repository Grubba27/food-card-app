var color = ["#383b44", "green"];
var color2 = ["#383b44", "green"];
var color3 = ["#383b44", "green"];
var color4 = ["#383b44", "green"];
var i = 0
var j = 0
var k = 0
var l = 0
var count = 1
var valor = 22.90
function add() {
    count += 1;
    document.getElementById("total").innerHTML = count;
    document.getElementById("valor").innerHTML = "R$" + (valor * count).toFixed(2).replace(".", ",");
    document.getElementById("cal").innerHTML = (220 * count) + " cal - "+ (250*count)+ "g" ;
}

function sub() {
    if (count > 1) {
        count -= 1;
        document.getElementById("total").innerHTML = count;
        document.getElementById("valor").innerHTML = "R$" + (valor * count).toFixed(2).replace(".", ",");
        document.getElementById("cal").innerHTML = (220 * count) + " cal - "+ (250*count)+ "g" ;
    } else {
        count == 1;
    }

}


function mudarTomate() {
    i = i + 1 < color.length ? ++i : 0;
    document.getElementById('tomate').style.backgroundColor = color[i];
    
    
}

function mudarOnion() {
    j = j + 1 < color2.length ? ++j : 0;
    document.getElementById('onion').style.backgroundColor = color2[j];
}

function mudarBroc() {
    k = k + 1 < color3.length ? ++k : 0;
    document.getElementById('broc').style.backgroundColor = color3[k];
}

function mudarFrango() {
    l = l + 1 < color4.length ? ++l : 0;
    document.getElementById('frango').style.backgroundColor = color4[l];
}
