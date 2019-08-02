
<script language="JavaScript">
// Script controla campo regiao -- Zeno 02/08/19
    let vc_regiao = "`vc-regiao`";
    if (vc_regiao != "" ) {
        console.log('block regiao')
        let regiaoSelect = document.getElementById("vc_regiao");
        regiaoSelect.classList.add("blockRegiao")
    }else{
        console.log('open regiao')
    }
    
</script>

<script language="JavaScript">
// Script valida form, verifica se o rep adicionou o redespacho -- Zeno 31/07/19
    function checkForm() {
       let cod_transp_red1 = document.forms["principal"]["cod_transp_red1"].value;
       if (cod_transp_red1 != 0) {
           alert('Campo Transp Redesp: não adicionado. (Selecione 0 para nenhum)'  );
           return false
       }    
    }
</script>

<script language="JavaScript">
//Inicio script lista Redesp.
     
     function formatSubmitData() {
        dataInput = document.getElementById("data_entrega_UI").value;
        dataInput = dataInput.split("-");
        dataInput_ano = dataInput[0];
        dataInput_mes = dataInput[1];
        dataInput_dia = dataInput[2];
        let dataOutput = dataInput_dia + '/' + dataInput_mes + '/' + dataInput_ano;
        document.getElementById("data_entrega").value = dataOutput;
        console.log('saida: ' + dataInput_dia + '/' + dataInput_mes + '/' + dataInput_ano);
     }

     console.log(data_entrega.value);
     let da_dt_entrega = "`da-dt-entrega`";
     console.log('entrada ' + da_dt_entrega);
     da_dt_entrega = da_dt_entrega.split("/");
     da_dt_dia = da_dt_entrega[0];
     da_dt_mes = da_dt_entrega[1];
     da_dt_ano = da_dt_entrega[2];
     da_dt_ano = parseInt(da_dt_ano);
     da_dt_ano = da_dt_ano + 2000;
     da_dt_ano = String(da_dt_ano);
     da_dt_entregaINPUT = da_dt_ano + '-' + da_dt_mes + '-' + da_dt_dia;
     da_dt_entregaSAIDA = da_dt_dia + '/' + da_dt_mes + '/' + da_dt_ano;
     console.log( da_dt_entregaINPUT );
     console.log( da_dt_entregaSAIDA );
     document.getElementById('data_entrega_UI').value = da_dt_entregaINPUT;

     let arrCod = [];
     let data = '';
     let codTrans = '';
     let node;
     let vcRedesp = "`vc-redesp`";
     let transp = "`c-nome-transp`";
     let inputCodTrans = document.getElementById('cod_transp').value;     
     console.log(inputCodTrans);

     if( inputCodTrans != '' ) {
         let xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function(){
             if( this.readyState == 4 && this.status == 200 ){
                 let xml = this.responseXML;
                 let xmlNome = xml.getElementsByTagName("nome");

                 let nome = xmlNome[0].childNodes[0].nodeValue;
                 console.log(nome);
                 document.getElementById("nome_transp").value = nome;
             }
         }
         xhttp.open("GET", "`c-server`wep/wex0040016.p?cod_transp=" + inputCodTrans, true);
         xhttp.send();
     }
     
     if(vcRedesp != ''){
         var redespSplit = vcRedesp.split(',');
         redespSplit.forEach(procVcRedesp);
         document.getElementById('transp_red_input').value = redespSplit;
         var verificaRespInput = document.getElementById('transp_red_input').value;
     }

     function procVcRedesp(cod_transp){
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function(){
             if( this.readyState == 4 && this.status == 200 ){
                  
                 var xml = this.responseXML;
                 var xmlNome = xml.getElementsByTagName("nome");
                 var nome = xmlNome[0].childNodes[0].nodeValue;
                 node = document.createElement("li");         
                 var text_node = document.createTextNode(cod_transp + ' - ' + nome);
                 node.appendChild(text_node);         
                 document.getElementById('ulDesp').appendChild(node);
                 arrCod.push(cod_transp);

             }
         }
         xhttp.open("GET", "`c-server`wep/wex0040016.p?cod_transp=" + cod_transp, false);
         xhttp.send();
     }

     function newElement() {
        data = document.getElementById("nome_transp_red1").value;
        codTrans = document.getElementById("cod_transp_red1").value
        node = document.createElement("li");
        if( arrCod.length >= 4 ){
            alert('Limite de transportadoras (4) excedido!');
        } else {
            if (data != '') {
            if (arrCod.includes(codTrans)) {
                alert('Transportadora já inclusa!');
                document.getElementById("cod_transp_red1").value = null;
            } else {
                var text_node = document.createTextNode(codTrans + ' - ' + data);   
                node.appendChild(text_node);
                document.getElementById('ulDesp').appendChild(node);
                
                console.log('codTrans: ' + codTrans, 'arrCod: ' + arrCod);
                arrCod.push(codTrans);
                document.getElementById('transp_red_input').value = arrCod;
                document.getElementById("cod_transp_red1").value = null;
            }    
         } else {
           alert("Selecione uma transportadora de redespacho válida.");
           document.getElementById("cod_transp_red1").value = null;
         }
        }
        console.log(arrCod);
    }

    function limpaRedesp(){
        // alert('ok');
        //document.getElementById("ulDesp").removeChild("li");
        var lista = document.getElementById("ulDesp");
        while(lista.hasChildNodes()){
            lista.removeChild(lista.firstChild);
            arrCod = [];
            data = '';
            codTrans = '';
            node = '';
            document.getElementById('transp_red_input').value = arrCod;
            console.log(arrCod);
        }
        
        
    }
//Fim script lista Redesp.                             
</script>