<template>
    <div class="container">
        <p>Modify component</p>
        <img :src="url" alt=""/>
<!--        <button class="btn btn-primary" :onclick="modifyPdf()" >Save Pdf</button>-->
    </div>
</template>

<script>
  import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
  import download from 'downloadjs';
  export default {
    data: function () {
      return {
        // url: 'https://shiftdownbucket.s3-us-west-1.amazonaws.com/Filliable-Form-8974.pdf'
        url: 'https://irsforms.dev/Filliable-Form-8974.pdf'
      }
    },
    methods: {
      modifyPdf: async function () {
        console.log('modifyPdf');
        const existingPdfBytes = await fetch(this.url).then(res => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const { width, height } = firstPage.getSize();
        firstPage.drawText('This text was added with JavaScript!', {
          x: 5,
          y: height / 2 + 300,
          size: 10,
          font: helveticaFont,
          color: rgb(0.95, 0.1, 0.1),
          rotate: degrees(-45),
        });

        const pdfBytes = await pdfDoc.save();
        // Trigger the browser to download the PDF document
        download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");
      }
    }
  }
</script>

<!--<style scoped>-->

<!--</style>-->
