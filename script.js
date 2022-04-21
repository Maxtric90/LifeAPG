const formCNR = document.getElementById('formCNR');

const Meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

formCNR.addEventListener('submit', (event) => {
    event.preventDefault();

    const tomadorInput =formCNR.elements['tomadorInput'].value;
    const polizaInput =formCNR.elements['polizaInput'].value;
    const empresaInput =formCNR.elements['empresaInput'].value;
    
    const element = document.getElementById('CNR');
    const tomadorTextoTitulo =document.getElementById('tomadorTextoTitulo');
    const tomadorTextoCuerpo =document.getElementById('tomadorTextoCuerpo');
    const polizaTexto =document.getElementById('polizaTexto');
    const empresaTexto =document.getElementById('empresaTexto');
    const fechaHoy =document.getElementById('fechaHoy');
    const hoy = new Date(Date.now());

    tomadorTextoTitulo.innerHTML='<strong>' + tomadorInput + '</strong>';
    tomadorTextoCuerpo.innerHTML='<strong>' + tomadorInput + '</strong>';
    polizaTexto.innerHTML='<strong>' + polizaInput + '</strong>';
    empresaTexto.innerHTML='<strong>' + empresaInput + '</strong>';
    fechaHoy.innerHTML='<strong>' + hoy.getDate()+ ' de ' + Meses[hoy.getMonth()] + ' de ' + hoy.getFullYear() + '</strong>';
    let opt = {
        margin:       1,
        filename:     `${polizaInput} - CNR.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

    html2pdf().set(opt).from(element).save();
});