function CalculoTotal()
{


//defino valor de entrada
var valorticket=200;

//captura info desde input
nombre=document.getElementById("nombre");
apellido=document.getElementById("apellido");
mail=document.getElementById("mail");
cantidad=document.getElementById("cant").value;

select= document.getElementById("cate");
select_activa=select.options[select.selectedIndex].value;

result=0

    //switch o if elseif

    switch (select_activa=parseInt(select_activa)) 
    {
        case 1:
          result=valorticket*cantidad;
          break;
        case 2:
            result=(valorticket-(valorticket* 80/100))*cantidad;
            break;
        case 3:
            result=(valorticket-(valorticket* 50/100))*cantidad;
            break;
        case 4:
            result=(valorticket-(valorticket* 15/100))*cantidad;
            break;
    }

    document.getElementById("resultado").value= result;

}

