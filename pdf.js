const PDFDocument = require('pdfkit');

//Create a document
const doc = new PDFDocument;

doc.pipe(fs.createWriteStream('output.pdf'));
