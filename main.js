function calcular(){
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var salida = document.getElementById("salida");
    
    var numa = a.value;
    var numb = b.value;
    
    if (numa>0 && numb>0){
        salida.innerHTML = "0";
    }else{
        salida.innerHTML = "1";
    }
}