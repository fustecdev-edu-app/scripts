 var h2 = document.querySelector(".h2")

    var dia = 0
    var hor = 0
    var minu = 0
    var segundo = 0

    var cont = 0
    setInterval(() => {
        var dat = new Date();
        dia = dat.getDate();
        hor = dat.getHours();
        minu = dat.getMinutes();
        segundo = dat.getSeconds();
        var subsegund = 60-segundo
        var subminu = 60-minu
        cont= subminu
        var diasf = 1-dia
        var horasf = diasf*24
        var horaRegress = horasf = horasf-hor
        if (horaRegress <=48) {
           diasf=diasf-1 
        }
        if (horaRegress <=24) {
           diasf=0 
        }
        if (subsegund==60) {
         subsegund = 0
        }
        if (subminu== 60) {
         subminu = 0
         
        }
        
     h2.textContent="Falta, "+ diasf+"  Dias"+"  e  "+horaRegress+" : Horas"+"   e "+subminu+"    Minutos"+"  e "+ subsegund+"   segundos"
     cont++
        
    }, 1000);