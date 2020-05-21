const PDFDocument = require('pdfkit');
const blobStream  = require('blob-stream');

//Create a document
const doc = new PDFDocument;

//Pipe PDF to a blob
const stream = doc.pipe(blobStream());

// get a blob when you're done
doc.end();
stream.on('finish', function() {
  // get a blob you can do whatever you like with
  const blob = stream.toBlob('application/pdf');

  // or get a blob URL for display in the browser
  const url = stream.toBlobURL('application/pdf');
  iframe.src = url;
});