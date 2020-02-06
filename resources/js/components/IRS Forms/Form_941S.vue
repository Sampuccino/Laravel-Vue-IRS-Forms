<template>
    <div class="container">


        <div class="position-fixed" style="right: 1rem; bottom:7rem;">
            <h6>Total liability for quarter</h6>
            <div class="text-right text-success font-weight-bolder">
                {{ totalLiabilityForQuarter }}
            </div>
        </div>
        <div class="position-fixed" style="right: 1rem; bottom:1rem;">
            <div>
                <button class="btn btn-danger d-inline clear">Clear</button>
            </div>

            <div>
                <button class="btn btn-primary d-inline export" @click="exportToPDF">Export</button>
            </div>
        </div>
        <div class="row justify-content-center">

            <div class="col-12 mt-3 mb-3">
                <h4 class="alert-info p-2 text-center">Form 941 Schedule B</h4>
            </div>

            <!--TOP OF FORM-->
            <div class="col-lg-10 col-12 bg-white mt-4 p-3 text-left">
                <div class="row">
                    <div class="col-8">
                        <div class="row">

                            <div class="col-5 font-weight-bold mb-2">
                                Employer identification number
                            </div>
                            <div class="col-7 my-auto">
                                <input type="text" class="form-control"
                                       :class="{'is-invalid': errors.ein, 'is-valid': (errors.ein===false)}"
                                       v-model="employerIdentificationNumber"
                                       minlength="9"
                                       maxlength="9">
                            </div>

                            <!--Name-->
                            <div class="col-5 font-weight-bold mb-2">
                                Name
                            </div>
                            <div class="col-7 my-auto">
                                <input type="text" class="form-control mb-2"
                                       :class="{'is-invalid': errors.name, 'is-valid': (errors.name===false)}"
                                       minlength="1"
                                       v-model="name">
                            </div>

                            <!--Calendar Year-->
                            <div class="col-5 font-weight-bold mb-2">
                                Calendar year
                            </div>
                            <div class="col-7 my-auto">
                                <flatpickr timeFormat="Y" v-model="calendarYear" id="sb_calendar_year_select"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-check">
                            <h6 class="font-weight-bold bg-dark p-2 text-white mb-2">Report for this quarter <small>check
                                only one box</small></h6>
                            <label class="form-check-label d-block mt-2">
                                <input type="radio" class="form-check-input" name="quarterReport"
                                       v-model="reportForThisQuarter" value="1">
                                1: January, February, March
                            </label>
                            <label class="form-check-label d-block mt-2">
                                <input type="radio" class="form-check-input" name="quarterReport"
                                       v-model="reportForThisQuarter" value="2">
                                2: April, May, June
                            </label>
                            <label class="form-check-label d-block mt-2">
                                <input type="radio" class="form-check-input" name="quarterReport"
                                       v-model="reportForThisQuarter" value="3">
                                3: July, August, September
                            </label>
                            <label class="form-check-label d-block mt-2">
                                <input type="radio" class="form-check-input" name="quarterReport"
                                       v-model="reportForThisQuarter" value="4">
                                4: October, November, December
                            </label>
                        </div>
                    </div>
                    <div class="col-12 font-weight-bold mt-3 mb-3">
                        Use this schedule to show your TAX LIABILITY for the quarter; don't use it to show your
                        deposits. When you file this form with Form 941 or Form 941-SS, don't change your tax
                        liability by adjustments reported on any Forms 941-X or 944-X. You must fill out this
                        form and attach it to Form 941 or Form 941-SS if you're a semiweekly schedule depositor
                        or became one because your accumulated tax liability on any day was $100,000 or more.
                        Write your daily tax liability on the numbered space that corresponds to the date wages
                        were paid. See Section 11 in Pub. 15 for details.
                    </div>

                    <!--Schedule Table Map Mo.1-->
                    <div class="col-12 mb-3">
                        <div class="w-50">
                            <h6 class="alert-warning p-1">Tax liability for month 1</h6>
                            <div class="display-4 text-right bg-light">
                                {{ monthOneTableSum }}
                            </div>
                        </div>
                    </div>

                    <div v-for="(month1, index) in monthOneTable" class="col-3"
                                                                  :class="(index%2 > 0) ? 'bg-light' : ''">
                        <div v-show="index !== 0" class="form-group">
                            <label>{{(index)}}</label>
                            <input type="text" class="form-control" v-model="monthOneTable[index]">
                        </div>
                    </div>

                    <!--Schedule Table Map Mo.2-->
                    <div class="col-12 mb-3">
                        <div class="w-50">
                            <h6 class="alert-warning p-1">Tax liability for month 2</h6>
                            <div class="display-4 text-right bg-light">
                                {{ monthTwoTableSum }}
                            </div>
                        </div>
                    </div>

                    <div v-for="(month2, index) in monthTwoTable" class="col-3"
                                                                  :class="(index%2 > 0) ? 'bg-light' : ''">
                        <div v-show="index !== 0" class="form-group">
                            <label>{{(index)}}</label>
                            <input type="text" class="form-control" v-model="monthTwoTable[index]">
                        </div>
                    </div>

                    <!--Schedule Table Map Mo.3-->
                    <div class="col-12 mb-3">
                        <div class="w-50">
                            <h6 class="alert-warning p-1">Tax liability for month 3</h6>
                            <div class="display-4 text-right bg-light">
                                {{ monthThreeTableSum }}
                            </div>
                        </div>
                    </div>

                    <div v-for="(month3, index) in monthThreeTable" class="col-3"
                                                                  :class="(index%2 > 0) ? 'bg-light' : ''">
                        <div v-show="index !== 0" class="form-group">
                            <label>{{(index)}}</label>
                            <input type="text" class="form-control" v-model="monthThreeTable[index]">
                        </div>
                    </div>

                </div>


            </div>

        </div>

    </div>
</template>

<script>
  import Flatpickr from "../Calendar/Flatpickr";
  import * as $ from 'jquery';
  import {degrees, PDFDocument, rgb, StandardFonts} from 'pdf-lib';
  import download from 'downloadjs';

  export default {
    name: "Form_941_Schedule_B",
    mounted() {
      console.log('Schedule B Url is ', this.formUrl )
    },
    props: {
      formUrl: String
    },
    data(){
      return {
        url: this.formUrl,
        /* Form Variables */
        employerIdentificationNumber:  null,
        name: null,
        calendarYear: '',
        reportForThisQuarter: null,
        /* Month 1 table generator/map */
        monthOneTable: [
          'filler',
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
        ],
        /* Month 2 table generator/map */
        monthTwoTable: [
          'filler',
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
        ],
        /* Month 3 table generator/map */
        monthThreeTable: [
          'filler',
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
        ],
        errors: {
          ein: null,
        }
      }
    },
    methods: {
      exportToPDF: async function () {
        /* Write all contents to Final PDF */
        const existingPdfBytes = await fetch(this.url).then(res => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const secondPage = pages[1];
        const {width, height} = firstPage.getSize();
        const COLOR = rgb(0, 0, 0);
        const baseOptions = {
          size: 10,
          font: helveticaFont,
          color: COLOR,
        };

        console.log(typeof this.calendarYear , ' has a value of ', this.calendarYear);

        /*Write EIN*/
        let ein_mutated = this.employerIdentificationNumber.split('');
        for (let i = 0; i < 9; i++) {
          let ein_XCoord = [155, 180, 220, 245, 270, 295, 320, 345, 370];

          firstPage.drawText(ein_mutated[i], {
            x: ein_XCoord[i],
            y: height / 2 + 295,
            ...baseOptions
          });
        }

        /*Write Name*/
        firstPage.drawText(this.name, {
          x: 140,
          y: height / 2 + 270,
          ...baseOptions
        });

        /*Write Calendar Year*/
        let calendarYear_mutated = $('#sb_calendar_year_select').val();
        calendarYear_mutated.split('');
        for (let i = 0; i < 4; i++) {
          let xCoord = [155, 180, 203, 230];

          firstPage.drawText(calendarYear_mutated[i], {
            x: xCoord[i],
            y: height / 2 + 245,
            ...baseOptions
          });
        }

        console.log(this.monthOneTable);

        /* Save report and Download*/
        const pdfBytes = await pdfDoc.save();
        // Trigger the browser to download the PDF document
        download(pdfBytes, `IRS-941-Schedule-B-${Date.now()}.pdf`, "application/pdf");
      },
      convertToStringAndAddDecimal(_number) {
        let formatToString = _number.toString();
        let formatToCurrency = (formatToString.includes('.')) ? formatToString : formatToString+='.00';
        return formatToCurrency.replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
    },
    computed: {
      monthOneTableSum: function() {
        let mutatedMonthOne = this.monthOneTable.slice();
        mutatedMonthOne.shift();
        return mutatedMonthOne.reduce( (a,b) => parseFloat(a)+parseFloat(b) , 0);
      },
      monthTwoTableSum: function() {
        let mutatedMonthTwo = this.monthTwoTable.slice();
        mutatedMonthTwo.shift();
        return mutatedMonthTwo.reduce( (a,b) => parseFloat(a)+parseFloat(b) , 0);
      },
      monthThreeTableSum: function() {
        let mutatedMonthThree = this.monthThreeTable.slice();
        mutatedMonthThree.shift();
        return mutatedMonthThree.reduce( (a,b) => parseFloat(a)+parseFloat(b) , 0);
      },
      totalLiabilityForQuarter: function () {
        const totals = [this.monthOneTableSum, this.monthTwoTableSum, this.monthThreeTableSum];
        return this.convertToStringAndAddDecimal(totals.reduce( (a,b) => parseFloat(a)+parseFloat(b) , 0));
      }
    }
  }
</script>

<style scoped>
    button {
        border-radius: 0;
        width: 5rem !important;
    }

    .clear {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        -moz-border-radius-topright: 1rem !important;
        -moz-border-radius-topleft: 1rem !important;
        -webkit-border-top-left-radius: 1rem !important;
    }

    .export {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        -moz-border-radius-bottomright: 1rem !important;
        -moz-border-radius-bottomleft: 1rem !important;
        -webkit-border-bottom-left-radius: 1rem !important;
    }
</style>
