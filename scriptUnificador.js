function readFileAsync(file) {
    return new Promise((resolve, reject) => {
       let reader = new FileReader();
       reader.onload = () => {
          resolve(reader.result);
       };
       reader.onerror = reject;
       reader.readAsArrayBuffer(file);
    })
 }

 function download(file, filename, type) {
    const link = document.getElementById('link');
    link.download = filename;
    let binaryData = [];
    binaryData.push(file);
    link.href = URL.createObjectURL(new Blob(binaryData, {type: type}))
 }
 async function merge() {
    let PDFDocument = PDFLib.PDFDocument;

    const in1 = document.getElementById('file1').files[0];
    const in2 = document.getElementById('file2').files[0];
    const in3 = document.getElementById('file3').files[0];
    const in4 = document.getElementById('file4').files[0];
    const in5 = document.getElementById('file5').files[0];
    const in6 = document.getElementById('file6').files[0];
    const in7 = document.getElementById('file7').files[0];
    const in8 = document.getElementById('file8').files[0];
    const in9 = document.getElementById('file9').files[0];
    const in10 = document.getElementById('file10').files[0];
    const in11 = document.getElementById('file11').files[0];

    let bytes1 = in1===undefined? undefined :await readFileAsync(in1);
    let bytes2 = in2===undefined? undefined : await readFileAsync(in2);
    let bytes3 = in3===undefined? undefined : await readFileAsync(in3);
    let bytes4 = in4===undefined? undefined : await readFileAsync(in4);
    let bytes5 = in5===undefined? undefined : await readFileAsync(in5);
    let bytes6 = in6===undefined? undefined : await readFileAsync(in6);
    let bytes7 = in7===undefined? undefined : await readFileAsync(in7);
    let bytes8 = in8===undefined? undefined : await readFileAsync(in8);
    let bytes9 = in9===undefined? undefined : await readFileAsync(in9);
    let bytes10 = in10===undefined? undefined : await readFileAsync(in10);
    let bytes11 = in11===undefined? undefined : await readFileAsync(in11);

    const pdf1 = in1===undefined? undefined : await PDFDocument.load(bytes1);
    const pdf2 = in2===undefined? undefined : await PDFDocument.load(bytes2);
    const pdf3 = in3===undefined? undefined : await PDFDocument.load(bytes3);
    const pdf4 = in4===undefined? undefined : await PDFDocument.load(bytes4);
    const pdf5 = in5===undefined? undefined : await PDFDocument.load(bytes5);
    const pdf6 = in6===undefined? undefined : await PDFDocument.load(bytes6);
    const pdf7 = in7===undefined? undefined : await PDFDocument.load(bytes7);
    const pdf8 = in8===undefined? undefined : await PDFDocument.load(bytes8);
    const pdf9 = in9===undefined? undefined : await PDFDocument.load(bytes9);
    const pdf10 = in10===undefined? undefined : await PDFDocument.load(bytes10);
    const pdf11 = in11===undefined? undefined : await PDFDocument.load(bytes11);

    const mergedPdf = await PDFDocument.create();
    if(in1!== undefined){
        const copiedPagesA = await mergedPdf.copyPages(pdf1, pdf1.getPageIndices());
        copiedPagesA.forEach((page) => mergedPdf.addPage(page));
    }
    if(in2!== undefined){
        const copiedPagesB = await mergedPdf.copyPages(pdf2, pdf2.getPageIndices());
        copiedPagesB.forEach((page) => mergedPdf.addPage(page));
    }
    if(in3!== undefined){
        const copiedPagesC = await mergedPdf.copyPages(pdf3, pdf3.getPageIndices());
        copiedPagesC.forEach((page) => mergedPdf.addPage(page));
    }
    if(in4!== undefined){
        const copiedPagesD = await mergedPdf.copyPages(pdf4, pdf4.getPageIndices());
        copiedPagesD.forEach((page) => mergedPdf.addPage(page));
    }
    if(in5!== undefined){
        const copiedPagesE = await mergedPdf.copyPages(pdf5, pdf5.getPageIndices());
        copiedPagesE.forEach((page) => mergedPdf.addPage(page));
    }
    if(in6!== undefined){
        const copiedPagesF = await mergedPdf.copyPages(pdf6, pdf6.getPageIndices());
        copiedPagesF.forEach((page) => mergedPdf.addPage(page));
    }
    if(in7!== undefined){
        const copiedPagesF = await mergedPdf.copyPages(pdf7, pdf7.getPageIndices());
        copiedPagesF.forEach((page) => mergedPdf.addPage(page));
    }
    if(in8!== undefined){
        const copiedPagesF = await mergedPdf.copyPages(pdf8, pdf8.getPageIndices());
        copiedPagesF.forEach((page) => mergedPdf.addPage(page));
    }
    if(in9!== undefined){
        const copiedPagesF = await mergedPdf.copyPages(pdf9, pdf9.getPageIndices());
        copiedPagesF.forEach((page) => mergedPdf.addPage(page));
    }
    if(in10!== undefined){
        const copiedPagesF = await mergedPdf.copyPages(pdf10, pdf10.getPageIndices());
        copiedPagesF.forEach((page) => mergedPdf.addPage(page));
    }
    if(in11!== undefined){
        const copiedPagesF = await mergedPdf.copyPages(pdf11, pdf11.getPageIndices());
        copiedPagesF.forEach((page) => mergedPdf.addPage(page));
    }
    const mergedPdfFile = await mergedPdf.save();

    download(mergedPdfFile, 'pdf-lib_page_copying_example.pdf', 'application/pdf')
 }