
       function enviarf(){
          number = document.getElementById("num").value;

          if (document.getElementById("local").value != ""){
            aux = document.getElementById("inlineRadio1").value;
          aux = aux + " para " + document.getElementById("local").value;
          console.log(aux);
          aux = aux + " dia " + document.getElementById("data").value.split('-').reverse().join('/');
          aux = aux + " as " + document.getElementById("hora").value;
            aux = aux + ". " + document.getElementById("obs").value;
          }else{
            aux = "Vamos assistir " + aux2;
          aux = aux + ", vamos comer " + document.getElementById("comida").value;
          aux = aux + " dia " + document.getElementById("data2").value.split('-').reverse().join('/');
          aux = aux + " as " + document.getElementById("hora2").value;
            aux = aux + ". " + document.getElementById("obs2").value;
          }
          window.open('https://api.whatsapp.com/send/?phone=55' + number + '&text=' + aux + '&app_absent=0');
        }

        function fs(op){
          if (op == "0"){
            aux2 = "Filme";
          }else{
            aux2 = "Serie";
          }
        }

    function opcao(id){
        if (id == "0"){
            document.getElementById('op1').style.display = 'none';
            document.getElementById('op2').style.display = 'none';
            document.getElementById('botao').style.display = 'none';
        }else if (id == "1"){
            document.getElementById('op1').style.display = 'block';
            document.getElementById('op2').style.display = 'none';
            document.getElementById('botao').style.display = 'block';



        }else {
            document.getElementById('op1').style.display = 'none';
            document.getElementById('op2').style.display = 'block';
            document.getElementById('botao').style.display = 'block';


        }
    }
