const PDFDocument = require('pdfkit');
const blobStream  = require('blob-stream');

//Create a document
const doc = new PDFDocument;

// pipe the document to a blob
const stream = doc.pipe(blobStream());

doc.end();
