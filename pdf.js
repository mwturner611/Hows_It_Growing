const PDFDocument = require('pdfkit');
const blobStream  = require('blob-stream');

//Create a document
const doc = new PDFDocument;

const info = wc;

//Pipe PDF to a blob
const stream = doc.pipe(blobStream());

// draw some text
doc.fontSize(25).text(info);

// Add different margins on each side
doc.addPage({
  margins: {
    top: 50,
    bottom: 50,
    left: 72,
    right: 72
  }
});

// get a blob when you're done
doc.end();
stream.on('finish', function() {
  // get a blob you can do whatever you like with
  const blob = stream.toBlob('application/pdf');

  // or get a blob URL for display in the browser
  const url = stream.toBlobURL('application/pdf');
  iframe.src = url;
});