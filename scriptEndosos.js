const formEndoso1 = document.getElementById('formEndoso1');

const Meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

formEndoso1.addEventListener('submit', (event) => {
    event.preventDefault();

    const contratanteInput =formEndoso1.elements['contratanteInput'].value;
    const polizaInput =formEndoso1.elements['polizaInput'].value;
    const endosoInput =formEndoso1.elements['endosoInput'].value;
    var vigenciaInputDia = formEndoso1.elements['vigenciaInputDia'].value;
    var vigenciaInputMes = formEndoso1.elements['vigenciaInputMes'].value;
    var vigenciaInputAño = formEndoso1.elements['vigenciaInputAño'].value;
    const checkIndefinida =formEndoso1.elements['checkIndefinida'].checked;
    var ambitoCobertura = formEndoso1.elements['selectAmbitoCobertura'].value;
    var inputFranquicia = formEndoso1.elements['inputFranquicia'].value;
    var inputCumulo = formEndoso1.elements['inputCumulo'].value;
    const checkMotocicletas =formEndoso1.elements['checkMotocicletas'].checked;
    var inputMargen = parseFloat(formEndoso1.elements['inputMargen'].value);

    const Endoso1=document.getElementById('Endoso1');
    const contratanteTitulo =document.getElementById('contratanteTitulo');
    const polizaTitulo =document.getElementById('polizaTitulo');
    const endosoTitulo =document.getElementById('endosoTitulo');
    const dateTexto =document.getElementById('dateTexto');
    const fechaHoy =document.getElementById('fechaHoy');
    const hoy = new Date(Date.now());
    const condParticularesIndefinida =document.getElementById('condParticularesIndefinida');
    const textoAmbitoCobertura =document.getElementById('textoAmbitoCobertura');
    const spanFranquicia =document.getElementById('spanFranquicia');
    const spanCumulo =document.getElementById('spanCumulo');
    const divAmplicacionCobertura =document.getElementById('divAmplicacionCobertura');

    condParticularesIndefinida
    contratanteTitulo.innerHTML='<strong>' + contratanteInput + '</strong>';
    polizaTitulo.innerHTML='<strong>' + polizaInput + '</strong>';
    endosoTitulo.innerHTML='<strong>' + endosoInput + '</strong>';
    dateTexto.innerHTML='<strong>' + vigenciaInputDia+ ' de ' + Meses[vigenciaInputMes] + ' de ' + vigenciaInputAño + '</strong>';
    fechaHoy.innerHTML='<strong>' + hoy.getDate()+ ' de ' + Meses[hoy.getMonth()] + ' de ' + hoy.getFullYear() + '</strong>';
    if(!checkIndefinida){
      condParticularesIndefinida.innerHTML = '';
    }else{
      condParticularesIndefinida.innerHTML = 'Esta póliza adquiere fuerza legal desde las cero (0) horas del día fijado como comienzo de su vigencia y se renueva en cada aniversario de la misma, por periodos anuales en forma automática.';
    }

    //AMBITO DE COBERTURA
    if(ambitoCobertura =='24hs'){
      if(checkIndefinida){
        textoAmbitoCobertura.innerHTML='Se deja constancia que las coberturas que otorga esta póliza rigen durante las 24hs, los 365 días del año.'
      }else{
        textoAmbitoCobertura.innerHTML='Se deja constancia que las coberturas que otorga esta póliza rigen durante las 24hs, durante el periodo contratado.'
      }
    }else{
      if(ambitoCobertura=='laboral'){
        textoAmbitoCobertura.innerHTML='Se deja constancia que las coberturas que otorga esta póliza, quedan limitadas al periodo de tiempo en que los asegurados se encuentran realizando sus actividades laborales habituales, e in-itínere únicamente.'
      }else{
        if(ambitoCobertura=='deportesDurante'){
          textoAmbitoCobertura.innerHTML='Contrariamente a lo establecido en la claúsula 2 de las Condiciones Generales (Riesgos Cubiertos), la presente póliza rige exclusivamente en caso que la persona designada en la misma como Asegurado sufriera un accidente durante su participación en alguno de los cursos, entrenamientos, torneos y/o competencias organizados por el Contratante de la presente póliza y relacionado con la actividad para la cual fue nominado.'
        }else{
          if(ambitoCobertura=='deportesDuranteInItinere'){
            textoAmbitoCobertura.innerHTML='Contrariamente a lo establecido en la claúsula 2 de las Condiciones Generales (Riesgos Cubiertos), la presente póliza rige exclusivamente en caso que la persona designada en la misma como Asegurado sufriera un accidente durante su participación en alguno de los cursos, entrenamientos, torneos y/o competencias organizados por el Contratante de la presente póliza y relacionado con la actividad para la cual fue nominado.<br>El presente seguro cubre todos los accidentes que puedan ocurrir al Asegurado, ya sea en el ejercicio de la actividad declarada o mientras esté circulando y/o viajando hacia o desde el lugar de evento en el cual participa.'
          }else{
            if(ambitoCobertura=='bailarines'){
              textoAmbitoCobertura.innerHTML='El presente contrato rige exclusivamente en caso que la persona designada en la misma como Asegurado sufriera un accidente durante su participación en alguna clase y/o evento organizado por el Contratante de la póliza, y relacionado con la actividad para la cual fue nominado, o mientras esté circulando y/o viajando hacia o desde el lugar de evento en el cual participa.'
            }else alert("Revise el ámbito de cobertura");
          }
        }
      }
    }
    spanFranquicia.innerHTML=`$${inputFranquicia} (${NumeroALetras(inputFranquicia, 'PESOS', 'PESO')})`;
    spanCumulo.innerHTML=`${inputCumulo} (${NumeroALetras(inputCumulo, '', '')})`;
    if(checkMotocicletas){
      divAmplicacionCobertura.innerHTML=`
      <h5><u>AMPLIACIÓN DE COBERTURA</u></h5>
      <p>
          <b>Cobertura de moto</b><br>
          Contrariamente a lo establecido en la Clausula 4 (RIESGOS NO ASEGURADOS) de las Condiciones Generales de la presente póliza, la/s coebrtura/s de este seguro se extiende a los accidentes que le pudieran ocurrir a los asegurados, como consecuencia del uso de motocicletas y vehiculos similares, durante la vigencia de la misma. 
      </p>
      `;
    }else{
      divAmplicacionCobertura.innerHTML='';
    }
  
    let opt = {
        margin:       inputMargen,
        filename:     `${polizaInput} - Endoso 01.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

    html2pdf().set(opt).from(Endoso1).save();
});

function Unidades(num){

  switch(num)
  {
      case 1: return 'UN';
      case 2: return 'DOS';
      case 3: return 'TRES';
      case 4: return 'CUATRO';
      case 5: return 'CINCO';
      case 6: return 'SEIS';
      case 7: return 'SIETE';
      case 8: return 'OCHO';
      case 9: return 'NUEVE';
  }

  return '';
}//Unidades()

function Decenas(num){

  decena = Math.floor(num/10);
  unidad = num - (decena * 10);

  switch(decena)
  {
      case 1:
          switch(unidad)
          {
              case 0: return 'DIEZ';
              case 1: return 'ONCE';
              case 2: return 'DOCE';
              case 3: return 'TRECE';
              case 4: return 'CATORCE';
              case 5: return 'QUINCE';
              default: return 'DIECI' + Unidades(unidad);
          }
      case 2:
          switch(unidad)
          {
              case 0: return 'VEINTE';
              default: return 'VEINTI' + Unidades(unidad);
          }
      case 3: return DecenasY('TREINTA', unidad);
      case 4: return DecenasY('CUARENTA', unidad);
      case 5: return DecenasY('CINCUENTA', unidad);
      case 6: return DecenasY('SESENTA', unidad);
      case 7: return DecenasY('SETENTA', unidad);
      case 8: return DecenasY('OCHENTA', unidad);
      case 9: return DecenasY('NOVENTA', unidad);
      case 0: return Unidades(unidad);
  }
}//Unidades()

function DecenasY(strSin, numUnidades) {
  if (numUnidades > 0)
  return strSin + ' Y ' + Unidades(numUnidades)

  return strSin;
}//DecenasY()

function Centenas(num) {
  centenas = Math.floor(num / 100);
  decenas = num - (centenas * 100);

  switch(centenas)
  {
      case 1:
          if (decenas > 0)
              return 'CIENTO ' + Decenas(decenas);
          return 'CIEN';
      case 2: return 'DOSCIENTOS ' + Decenas(decenas);
      case 3: return 'TRESCIENTOS ' + Decenas(decenas);
      case 4: return 'CUATROCIENTOS ' + Decenas(decenas);
      case 5: return 'QUINIENTOS ' + Decenas(decenas);
      case 6: return 'SEISCIENTOS ' + Decenas(decenas);
      case 7: return 'SETECIENTOS ' + Decenas(decenas);
      case 8: return 'OCHOCIENTOS ' + Decenas(decenas);
      case 9: return 'NOVECIENTOS ' + Decenas(decenas);
  }

  return Decenas(decenas);
}//Centenas()

function Seccion(num, divisor, strSingular, strPlural) {
  cientos = Math.floor(num / divisor)
  resto = num - (cientos * divisor)

  letras = '';

  if (cientos > 0)
      if (cientos > 1)
          letras = Centenas(cientos) + ' ' + strPlural;
      else
          letras = strSingular;

  if (resto > 0)
      letras += '';

  return letras;
}//Seccion()

function Miles(num) {
  divisor = 1000;
  cientos = Math.floor(num / divisor)
  resto = num - (cientos * divisor)

  strMiles = Seccion(num, divisor, 'MIL', 'MIL');
  strCentenas = Centenas(resto);

  if(strMiles == '')
      return strCentenas;

  return strMiles + ' ' + strCentenas;
}//Miles()

function Millones(num) {
  divisor = 1000000;
  cientos = Math.floor(num / divisor)
  resto = num - (cientos * divisor)

  strMillones = Seccion(num, divisor, 'UN MILLON DE', 'MILLONES DE');
  strMiles = Miles(resto);

  if(strMillones == '')
      return strMiles;

  return strMillones + ' ' + strMiles;
}//Millones()

function NumeroALetras(num, monedaPlu, monedaSin) {
  var data = {
      numero: num,
      enteros: Math.floor(num),
      centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
      letrasCentavos: '',
      letrasMonedaPlural: monedaPlu,//'PESOS', 'Dólares', 'Bolívares', 'etcs'
      letrasMonedaSingular: monedaSin, //'PESO', 'Dólar', 'Bolivar', 'etc'

      letrasMonedaCentavoPlural: 'CENTAVOS',
      letrasMonedaCentavoSingular: 'CENTAVO'
  };

  if (data.centavos > 0) {
      data.letrasCentavos = 'CON ' + (function (){
          if (data.centavos == 1)
              return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular;
          else
              return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;
          })();
  };

  if(data.enteros == 0)
      return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
  if (data.enteros == 1)
      return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
  else
      return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
}