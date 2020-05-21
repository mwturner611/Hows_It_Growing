const PDFDocument = require('pdfkit');
const blobStream  = require('blob-stream');

//Create a document
const doc = new PDFDocument;

//Variable that holds plant data
const info = seeds.sql;

//Pipe PDF to a blob
const stream = doc.pipe(blobStream());

//Insert plant data into PDF
doc.fontSize(25).text(info);

//Add different margins on each side
doc.addPage({
  margins: {
    top: 50,
    bottom: 50,
    left: 72,
    right: 72
  }
});

//Get a blob
doc.end();
stream.on('finish', function() {

  //Display blob in browser
  const url = stream.toBlobURL('application/pdf');
  iframe.src = url;
});