let cel = document.getElementById("celsius");
let fahr = document.getElementById("fahrenheit");

function c_to_f() {
    let ans=(parseFloat(cel.value) * 9 / 5) + 32;
    fahrenheit.value=parseFloat(ans.toFixed(2));
}

function f_to_c() {
    let ans = (parseFloat(fahr.value) - 32)* 5 / 9;
    celsius.value = parseFloat(ans.toFixed(2));
    console.log(ans);
}
