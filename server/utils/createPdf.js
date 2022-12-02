const html_to_pdf = require('html-pdf-node')
const { options } = require('../app')

const createQuotationPdf = async({}) => {
    let options = {
        format: "A4"
    }
    let styles = `
    <style>
    </style>`

    let htmlDoc = `${styles}
    <body>
    </body>`;

    let file = {
        content : htmlDoc,
    }

    try {
        let pdfBuffer = await html_to_pdf.generatePdf(file,options)
    }catch(err){
        throw err
    }
} 
module.exports = createQuotationPdf