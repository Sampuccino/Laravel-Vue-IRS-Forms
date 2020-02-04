<template>
    <div class="container">
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
                <h4 class="alert-info p-2 text-center">Form 941</h4>
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

                            <!--Trade Name-->
                            <div class="col-5 font-weight-bold mb-2">
                                Trade Name
                            </div>
                            <div class="col-7 my-auto">
                                <input type="text" class="form-control mb-2"
                                       :class="{'is-invalid': errors.tradeName, 'is-valid': (errors.tradeName===false)}"
                                       minlength="1"
                                       v-model="tradeName">
                            </div>

                            <!--Address-->
                            <div class="col-5 font-weight-bold mb-2">
                                Address
                            </div>
                            <div class="col-7 my-auto">

                                <div class="row">
                                    <div class="col-12">
                                        <input type="text" placeholder="Number     Street"
                                               class="form-control mb-2"
                                               :class="{'is-invalid': errors.address, 'is-valid': (errors.address===false)}"
                                               minlength="1"
                                               v-model="address">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="City"
                                               class="form-control mb-2"
                                               :class="{'is-invalid': errors.city, 'is-valid': (errors.city===false)}"
                                               v-model="city">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="State"
                                               class="form-control mb-2 text-uppercase"
                                               :class="{'is-invalid': errors.state, 'is-valid': (errors.state===false)}"
                                               minlength="2" maxlength="2"
                                               v-model="state">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="ZIP"
                                               class="form-control mb-2"
                                               :class="{'is-invalid': errors.zip, 'is-valid': (errors.zip===false)}"
                                               minlength="5" maxlength="5"
                                               v-model="zip">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="Foreign country name" class="form-control mb-2" v-model="f_countryName">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="Foreign province/country" class="form-control mb-2" v-model="f_countryProvince">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="Foreign postal code"
                                               class="form-control mb-2" minlength="5" maxlength="5"
                                               v-model="f_countryZIP">
                                    </div>
                                </div>

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

                </div>
            </div>

            <!--Part 1 OF FORM-->
            <div class="col-lg-10 col-12 bg-white mt-4 p-3">
                <div class="bg-dark p-2 text-white mb-3">Part 1 <span class="bg-white text-dark p-1 ml-2">Answer these questions for this quarter</span></div>


                <!--###########-->
                <!--1 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[0].id}}</b>{{partTwoFieldInfo[0].description}}
                    </div>
                    <div class="col-4 my-auto">
                        <input type="text" placeholder="Fill in"
                               class="form-control"
                               :class="{'is-invalid': errors.numberOfEmployees, 'is-valid': (errors.numberOfEmployees===false)}"
                               v-model="numberOfEmployees">
                    </div>
                </div>

                <!--###########-->
                <!--2 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[1].id}}</b>{{partTwoFieldInfo[1].description}}
                    </div>
                    <div class="col-4 my-auto">
                        <input type="text" placeholder="Fill in"
                               class="form-control"
                               :class="{'is-invalid': errors.totalWages, 'is-valid': (errors.totalWages===false)}"
                               v-model="totalWages">
                    </div>
                </div>

                <!--###########-->
                <!--3 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[2].id}}</b>{{partTwoFieldInfo[2].description}}
                    </div>
                    <div class="col-4 my-auto">
                        <input type="text" placeholder="Fill in"
                               class="form-control"
                               :class="{'is-invalid': errors.withheldTax, 'is-valid': (errors.withheldTax===false)}"
                               v-model="withheldTax">
                    </div>
                </div>

                <!--###########-->
                <!--4 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[3].id}}</b>{{partTwoFieldInfo[3].description}}
                    </div>
                    <div class="col-4 my-auto">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="" id="" value="1" v-model="noWages">
                                Check and go to line 6
                            </label>
                        </div>
                    </div>
                </div>

                <!--###########-->
                <!--5a #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[4].id}}</b>{{partTwoFieldInfo[4].description}}
                    </div>
                    <div class="col-4 my-auto">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" class="form-control" v-model="taxableSSWages">
                            </div>
                            <div class="col-6 my-auto">{{taxable5A}}</div>
                        </div>
                    </div>
                </div>

                <!--###########-->
                <!--5b #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[5].id}}</b>{{partTwoFieldInfo[5].description}}
                    </div>
                    <div class="col-4 my-auto">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" class="form-control" v-model="taxableSSTips">
                            </div>
                            <div class="col-6 my-auto">{{taxable5B}}</div>
                        </div>
                    </div>
                </div>

                <!--###########-->
                <!--5c #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[6].id}}</b>{{partTwoFieldInfo[6].description}}
                    </div>
                    <div class="col-4 my-auto">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" class="form-control" v-model="taxableMedicalWages">
                            </div>
                            <div class="col-6 my-auto">{{taxable5C}}</div>
                        </div>
                    </div>
                </div>

                <!--###########-->
                <!--5d #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[7].id}}</b>{{partTwoFieldInfo[7].description}}
                    </div>
                    <div class="col-4 my-auto">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" class="form-control" v-model="taxableAMTWithholding">
                            </div>
                            <div class="col-6 my-auto">{{taxable5D}}</div>
                        </div>
                    </div>
                </div>

                <!--###########-->
                <!--5e #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[8].id}}</b>{{partTwoFieldInfo[8].description}}
                    </div>
                    <div class="col-4 my-auto text-center"
                         :class="{'alert-danger': errors.line5E, 'alert-success': (errors.line5E===false)}"
                    >{{ line5E }}</div>
                </div>

                <!--###########-->
                <!--5f #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[9].id}}</b>{{partTwoFieldInfo[9].description}}
                    </div>
                    <div class="col-4 my-auto text-center">
                        <input type="text" class="form-control" placeholder="Fill in" v-model="section3121">
                    </div>
                </div>

                <!--###########-->
                <!--6 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[10].id}}</b>{{partTwoFieldInfo[10].description}}
                    </div>
                    <div class="col-4 my-auto text-center"
                         :class="{'alert-danger': errors.totalTaxesBeforeAdjustments, 'alert-success': (errors.totalTaxesBeforeAdjustments===false)}">
                        {{totalTaxesBeforeAdjustments}}</div>
                </div>

                <!--###########-->
                <!--7 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[11].id}}</b>{{partTwoFieldInfo[11].description}}
                    </div>
                    <div class="col-4 my-auto text-center">
                        <input type="text" class="form-control" placeholder="Fill in" v-model="currentFractionsOfCents">
                    </div>
                </div>

                <!--###########-->
                <!--8 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[12].id}}</b>{{partTwoFieldInfo[12].description}}
                    </div>
                    <div class="col-4 my-auto text-center">
                        <input type="text" class="form-control" placeholder="Fill in" v-model="currentSickPay">
                    </div>
                </div>

                <!--###########-->
                <!--9 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[13].id}}</b>{{partTwoFieldInfo[13].description}}
                    </div>
                    <div class="col-4 my-auto text-center">
                        <input type="text" class="form-control" placeholder="Fill in" v-model="currentTipAndGroupTerm">
                    </div>
                </div>

                <!--###########-->
                <!--10 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[14].id}}</b>{{partTwoFieldInfo[14].description}}
                    </div>
                    <div class="col-4 my-auto text-center">{{line10Sum}}</div>
                </div>

                <!--###########-->
                <!--11 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[15].id}}</b>{{partTwoFieldInfo[15].description}}
                    </div>
                    <div class="col-4 my-auto text-center">
                        <input type="text" class="form-control" placeholder="Fill in" v-model="qualifiedSmallBusinessPayroll">
                    </div>
                </div>

                <!--###########-->
                <!--12 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[16].id}}</b>{{partTwoFieldInfo[16].description}}
                    </div>
                    <div class="col-4 my-auto text-center">{{ line12TotalTaxesAfterAdjustments }}</div>
                </div>

                <!--###########-->
                <!--13 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[17].id}}</b>{{partTwoFieldInfo[17].description}}
                    </div>
                    <div class="col-4 my-auto text-center">
                        <input type="text" class="form-control" placeholder="Fill in" v-model="totalQuarterDeposits">
                    </div>
                </div>

                <!--###########-->
                <!--14 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[18].id}}</b>{{partTwoFieldInfo[18].description}}
                    </div>
                    <div class="col-4 my-auto text-center">{{ line14BalanceDue }}</div>
                </div>

                <!--###########-->
                <!--15 #########-->
                <!--###########-->
                <div class="row mb-2 bg-light">
                    <div class="col-8">
                        <b class="mr-3">{{partTwoFieldInfo[19].id}}</b>{{partTwoFieldInfo[19].description}}
                    </div>
                    <div class="col-4 text-center"
                         :class="{'alert-danger': errors.overpaymentOption, 'alert-success': (errors.overpaymentOption===false)}">
                        <div class="row">
                            <div class="col-12 mb-2">{{line15Overpayment}}</div>
                            <div class="col-6">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="OverpaymentOption" v-model="overpaymentOption" value="1">
                                        Apply to next return
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="OverpaymentOption"
                                               v-model="overpaymentOption" value="2" checked>
                                        Send a refund
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!--Part 2 OF FORM-->
            <div class="col-lg-10 col-12 bg-white mt-4">
                <div class="bg-dark p-2 text-white">Part 2 <span class="bg-white text-dark p-1 ml-2">Tell us about your deposit schedule and tax liability for this quarter</span></div>
            </div>

        </div>

    </div>
</template>

<script>
  import {degrees, PDFDocument, rgb, StandardFonts} from 'pdf-lib';
  import download from 'downloadjs';

  export default {
    name: "Form_941",
    props: {
      formUrl: String
    },
    mounted(){
      this.url = this.formUrl;
    },
    data(){
      return {
        url: null,
        partTwoFieldInfo: [
          { id: '1', model: 'f5f', description: 'Number of employees who received wages, tips, or other compensation for the pay period including: Mar. 12 (Quarter 1), June 12 (Quarter 2), Sept. 12 (Quarter 3), or Dec. 12 (Quarter 4)' },
          { id: '2', model: 'f5f', description: 'Wages, tips, and other compensation' },
          { id: '3', model: 'f5f', description: 'Federal income tax withheld from wages, tips, and other compensation ' },
          { id: '4', model: 'f5f', description: 'If no wages, tips, and other compensation are subject to social security or Medicare tax' },
          { id: '5a', model: 'f5f', description: 'Taxable social security wages' },
          { id: '5b', model: 'f5f', description: 'Taxable social security tips .' },
          { id: '5c', model: 'f5f', description: 'Taxable Medicare wages & tips' },
          { id: '5d', model: 'f5f', description: 'Taxable wages & tips subject to Additional Medicare Tax withholding' },
          { id: '5e', model: 'f5f', description: 'Add Column 2 from lines 5a, 5b, 5c, and 5d' },
          { id: '5f', model: 'f5f', description: 'Section 3121(q) Notice and Demand—Tax due on unreported tips (see instructions)' },
          { id: '6', model: 'f5f', description: 'Total taxes before adjustments. Add lines 3, 5e, and 5f' },
          { id: '7', model: 'f5f', description: 'Current quarter’s adjustment for fractions of cents' },
          { id: '8', model: 'f5f', description: 'Current quarter’s adjustment for sick pay' },
          { id: '9', model: 'f5f', description: 'Current quarter’s adjustments for tips and group-term life insurance' },
          { id: '10', model: 'f5f', description: 'Total taxes after adjustments. Combine lines 6 through 9' },
          { id: '11', model: 'f5f', description: 'Qualified small business payroll tax credit for increasing research activities. Attach Form 8974' },
          { id: '12', model: 'f5f', description: 'Total taxes after adjustments and credits. Subtract line 11 from line 10' },
          { id: '13', model: 'f5f', description: 'Total deposits for this quarter, including overpayment applied from a prior quarter and overpayments applied from Form 941-X, 941-X (PR), 944-X, or 944-X (SP) filed in the current quarter' },
          { id: '14', model: 'f5f', description: 'Balance due. If line 12 is more than line 13, enter the difference and see instructions' },
          { id: '15', model: 'f5f', description: 'Overpayment. If line 13 is more than line 12, enter the difference' }
        ],
        /* Form Variables */
        employerIdentificationNumber:  null,
        name: null,
        tradeName: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        f_countryName: null,
        f_countryProvince: null,
        f_countryZIP: null,
        reportForThisQuarter: null,
        /* Field ID for generated fields in Part1 */
        numberOfEmployees: null,
        totalWages: null,
        withheldTax: 0,
        noWages: null,
        taxableSSWages: null,
        taxableSSTips: null,
        taxableMedicalWages: null,
        taxableAMTWithholding: null,
        section3121: 0,
        currentFractionsOfCents: 0,
        currentSickPay: 0,
        currentTipAndGroupTerm: 0,
        qualifiedSmallBusinessPayroll: 0,
        totalQuarterDeposits: 0,
        overpaymentOption: null,
        errors: {
          ein: null,
          name: null,
          address: null,
          city: null,
          state: null,
          zip: null,
          numberOfEmployees: null,
          totalWages: null,
          withheldTax: null,
          taxableSSWages: null,
          taxableSSTips: null,
          taxableMedicalWages: null,
          taxableAMTWithholding: null,
          line5E: null,
          totalTaxesBeforeAdjustments: null,
          line10Sum: null,
          line12TotalTaxesAfterAdjustments: null,
          totalQuarterDeposits: null,
          line15Overpayment: null,
          overpaymentOption: null
        }
      }
    },
    computed: {
      taxable5A: function () {
       return Number((this.taxableSSWages * 0.124).toFixed(2))
      },
      taxable5B: function () {
       return Number((this.taxableSSTips * 0.124).toFixed(2))
      },
      taxable5C: function () {
       return Number((this.taxableMedicalWages * 0.029).toFixed(2))
      },
      taxable5D: function () {
       return Number((this.taxableAMTWithholding * 0.009).toFixed(2))
      },
      line5E: function () {
        const sums = [this.taxable5A, this.taxable5B, this.taxable5C, this.taxable5D];
        return parseFloat((sums.reduce((a,b) => a+b,0)))
      },
      totalTaxesBeforeAdjustments: function () {
        const amounts = [parseFloat(this.withheldTax), this.line5E, parseFloat(this.section3121)];
        return (amounts.reduce((a,b) => a+b,0)).toFixed(2)
      },
      line10Sum: function() {
        const amounts = [parseFloat(this.totalTaxesBeforeAdjustments), parseFloat(this.currentFractionsOfCents), parseFloat(this.currentSickPay), parseFloat(this.currentTipAndGroupTerm)];
        const total = (amounts.reduce((a,b) => a+b,0)).toFixed(2);
        this.totalQuarterDeposits = total;
        return total;
      },
      line12TotalTaxesAfterAdjustments: function() {
        return (parseFloat(this.line10Sum) - parseFloat(this.qualifiedSmallBusinessPayroll)).toFixed(2)
      },
      line14BalanceDue: function () {
        // console.log()
        if(parseFloat(this.line12TotalTaxesAfterAdjustments) > parseFloat(this.totalQuarterDeposits)) {
          return (parseFloat(this.line12TotalTaxesAfterAdjustments) - parseFloat(this.totalQuarterDeposits)).toFixed(2)
        } else return 0
      },
      line15Overpayment: function () {
        if(parseFloat(this.totalQuarterDeposits) > parseFloat(this.line12TotalTaxesAfterAdjustments)) {
          return (parseFloat(this.totalQuarterDeposits) - parseFloat(this.line12TotalTaxesAfterAdjustments)).toFixed(2)
        } else return 0
      }
    },
    methods: {
      validateFormFields: function(){

        if (this.employerIdentificationNumber === null || this.employerIdentificationNumber.trim().length < 9) {
          this.errors.ein = true;
          return false
        } else this.errors.ein = false;

        if (this.name === null || this.name.trim().length < 1) {
          this.errors.name = true;
          return false
        } else this.errors.name = false;

        if (this.address === null || this.address.trim().length < 1) {
          this.errors.address = true;
          return false
        } else this.errors.address = false;

        if (this.city === null || this.city.trim().length < 1) {
          this.errors.city = true;
          return false
        } else this.errors.city = false;

        if (this.state === null || this.state.trim().length < 1) {
          this.errors.state = true;
          return false
        } else this.errors.state = false;

        if (this.zip === null || this.zip.trim().length < 1) {
          this.errors.zip = true;
          return false
        } else this.errors.zip = false;

        if (parseFloat(this.numberOfEmployees) < 0 || this.numberOfEmployees === null) {
          this.errors.numberOfEmployees = true;
          return false
        } else this.errors.numberOfEmployees = false;

        if (parseFloat(this.totalWages) < 0 || this.totalWages === null) {
          this.errors.totalWages = true;
          return false
        } else this.errors.totalWages = false;

        if (parseFloat(this.withheldTax) < 0) {
          this.errors.withheldTax = true;
          return false
        } else this.errors.withheldTax = false;

        /*5E*/
        if (parseFloat(this.line5E) <= 0) {
          this.errors.line5E = true;
          return false
        } else this.errors.line5E = false;

        /*6*/
        if (parseFloat(this.totalTaxesBeforeAdjustments) <= 0) {
          this.errors.totalTaxesBeforeAdjustments = true;
          return false
        } else this.errors.totalTaxesBeforeAdjustments = false;

        /*10*/
        if (parseFloat(this.line10Sum) <= 0) {
          this.errors.line10Sum = true;
          return false
        } else this.errors.line10Sum = false;

        /*12*/
        if (parseFloat(this.line12TotalTaxesAfterAdjustments) <= 0) {
          this.errors.line12TotalTaxesAfterAdjustments = true;
          return false
        } else this.errors.line12TotalTaxesAfterAdjustments = false;

        /*13*/
        if (parseFloat(this.totalQuarterDeposits) <= 0) {
          this.errors.totalQuarterDeposits = true;
          return false
        } else this.errors.totalQuarterDeposits = false;

        /*15*/
        if (parseFloat(this.line15Overpayment) < 0) {
          this.errors.line15Overpayment = true;
          return false
        } else this.errors.line15Overpayment = false;

        /* Overpayment Option */
        switch (parseInt(this.overpaymentOption)) {
          case 1:
            this.errors.overpaymentOption = false;
            break;
          case 2:
            this.errors.overpaymentOption = false;
            break;
          default:
            console.log('No Overpayment Option Selected!');
            this.errors.overpaymentOption = true;
            return false;
        }

        return true;
      },
      isNumberRegex(_input){
        const reg = new RegExp(/^[0-9]+([,.][0-9]+)?$/g);
        return reg.test(_input);
      },
      exportToPDF: async function () {

        /*  TODO Validate all fields before exporting */
        const validated = this.validateFormFields();

        /*EIN*/
        console.log(validated);
        if (!validated) {
          /* Prompt Error */
          console.error('Form errors!');
        } else {
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
          const baseYOffset = 23;

          /*EIN
          * clone name
          * mutate
          * output
          * */
          let ein_mutated = this.employerIdentificationNumber.split('');
          for (let i = 0; i < 9; i++) {
            let ein_XCoord = [160, 185, 225, 250, 275, 300, 325, 350, 375];

            firstPage.drawText(ein_mutated[i], {
              x: ein_XCoord[i],
              y: height / 2 + 318,
              ...baseOptions
            });
          }

          firstPage.drawText(this.name, {
            x: 150,
            y: height / 2 + 295,
            ...baseOptions
          });

          /*  IF – TradeName */
          if (this.tradeName !== null){
            firstPage.drawText(this.tradeName, {
              x: 135,
              y: height / 2 + 270,
              ...baseOptions
            });
          }

          /*Address*/
          firstPage.drawText(this.address, {
            x: 95,
            y: height / 2 + 245,
            ...baseOptions
          });

          /*City*/
          firstPage.drawText(this.city, {
            x: 95,
            y: height / 2 + 215,
            ...baseOptions
          });

          /*State*/
          firstPage.drawText(this.state, {
            x: 285 ,
            y: height / 2 + 215,
            ...baseOptions
          });

          /*ZIP*/
          firstPage.drawText(this.zip, {
            x: 325 ,
            y: height / 2 + 215,
            ...baseOptions
          });

          /* IF – Foreign Country*/
          if (this.f_countryName !== null) {
              firstPage.drawText(this.f_countryName.toString(), {
                x: 95,
                y: height / 2 + 185,
                ...baseOptions
              });
          }

          /* IF – Foreign Province*/
          if (this.f_countryProvince !== null) {
            firstPage.drawText(this.f_countryProvince.toString(), {
              x: 235,
              y: height / 2 + 185,
              ...baseOptions
            });
          }

          /* IF – Foreign Province*/
          if (this.f_countryZIP !== null) {
            firstPage.drawText(this.f_countryZIP.toString(), {
              x: 335,
              y: height / 2 + 185,
              ...baseOptions
            });
          }

          /* Report for this quarter */
          switch (this.reportForThisQuarter) {
            case '1':
              firstPage.drawText('x', {
                x: 427,
                y: height / 2 + 294,
                ...baseOptions
              });
              break;
            case '2':
              firstPage.drawText('x', {
                x: 427,
                y: height / 2 + 277,
                ...baseOptions
              });
              break;
            case '3':
              firstPage.drawText('x', {
                x: 427,
                y: height / 2 + 260,
                ...baseOptions
              });
              break;
            case '4':
              firstPage.drawText('x', {
                x: 427,
                y: height / 2 + 243,
                ...baseOptions
              });
              break;
          }

          /* Number Of Employees */
          firstPage.drawText(parseInt(this.numberOfEmployees).toString(), {
            x: 455,
            y: height / 2 + 115,
            ...baseOptions
          });

          /* 2: Wages... */
          firstPage.drawText(this.convertToStringAndAddDecimal(this.totalWages), {
            x: 455,
            y: height / 2 + 91,
            ...baseOptions
          });

          /* 3: Federal... */
          firstPage.drawText(this.convertToStringAndAddDecimal(this.withheldTax), {
            x: 455,
            y: height / 2 + 68,
            ...baseOptions
          });

          /* 4: If no wages... */
          if(parseInt(this.noWages) === 1) {
              firstPage.drawText('x', {
                x: 449,
                y: height / 2 + 43,
                ...baseOptions
              });
          }

          /* 5A */
          if (parseFloat(this.taxableSSWages)) {
            firstPage.drawText(this.convertToStringAndAddDecimal(this.taxableSSWages), {
              x: 225,
              y: height / 2 + 13,
              ...baseOptions
            });

            firstPage.drawText(this.convertToStringAndAddDecimal(this.taxable5A), {
              x: 360,
              y: height / 2 + 13,
              ...baseOptions
            });
          }

          /* 5B */
          if (parseFloat(this.taxableSSTips)) {
            firstPage.drawText(this.convertToStringAndAddDecimal(this.taxableSSTips), {
              x: 225,
              y: height / 2 - 5,
              ...baseOptions
            });

            firstPage.drawText(this.convertToStringAndAddDecimal(this.taxable5B), {
              x: 360,
              y: height / 2 - 5,
              ...baseOptions
            });
          }

          /* 5C */
          if (parseFloat(this.taxableMedicalWages)) {
            firstPage.drawText(this.convertToStringAndAddDecimal(this.taxableMedicalWages), {
              x: 225,
              y: height / 2 - 23,
              ...baseOptions
            });

            firstPage.drawText(this.convertToStringAndAddDecimal(this.taxable5C), {
              x: 360,
              y: height / 2 - 23,
              ...baseOptions
            });
          }

          /* 5D */
          if (parseFloat(this.taxableAMTWithholding)) {
            firstPage.drawText(this.convertToStringAndAddDecimal(this.taxableAMTWithholding), {
              x: 225,
              y: height / 2 - 47,
              ...baseOptions
            });

            firstPage.drawText(this.convertToStringAndAddDecimal(this.taxable5D), {
              x: 360,
              y: height / 2 - 47,
              ...baseOptions
            });
          }

          /* 5E */
          if (parseFloat(this.line5E)) {
            firstPage.drawText(this.convertToStringAndAddDecimal(this.line5E), {
              x: 455,
              y: height / 2 - 70,
              ...baseOptions
            });
          }

          /* 5F */
          if (parseFloat(this.section3121)) {
            firstPage.drawText(this.convertToStringAndAddDecimal(this.section3121), {
              x: 455,
              y: height / 2 - 94,
              ...baseOptions
            });
          }

          /* 6 */
          if (this.totalTaxesBeforeAdjustments) {
            firstPage.drawText(this.convertToStringAndAddDecimal(this.totalTaxesBeforeAdjustments), {
              x: 455,
              y: height / 2 - 118,
              ...baseOptions
            });
          }

          /* 7 */
          if (parseFloat(this.currentFractionsOfCents)) {
            firstPage.drawText(this.convertToStringAndAddDecimal(this.currentFractionsOfCents), {
              x: 455,
              y: height / 2 - 142,
              ...baseOptions
            });
          }

          /* 8 */
          if (parseFloat(this.currentSickPay)) {
            firstPage.drawText(this.convertToStringAndAddDecimal(this.currentSickPay), {
              x: 455,
              y: height / 2 - 166,
              ...baseOptions
            });
          }

          /* 9 */
          if (parseFloat(this.currentTipAndGroupTerm)) {
            firstPage.drawText(this.convertToStringAndAddDecimal(this.currentTipAndGroupTerm), {
              x: 455,
              y: height / 2 - 190,
              ...baseOptions
            });
          }

          /* 10 */
          firstPage.drawText(this.convertToStringAndAddDecimal(this.line10Sum), {
            x: 455,
            y: height / 2 - 214,
            ...baseOptions
          });

          /* 11 */
          if(parseFloat(this.qualifiedSmallBusinessPayroll)){
              firstPage.drawText(this.convertToStringAndAddDecimal(this.qualifiedSmallBusinessPayroll), {
                x: 455,
                y: height / 2 - 238,
                ...baseOptions
              });
          }

          /* 12 */
          firstPage.drawText(this.convertToStringAndAddDecimal(this.line12TotalTaxesAfterAdjustments), {
            x: 455,
            y: height / 2 - 262,
            ...baseOptions
          });

          /* 13 */
          firstPage.drawText(this.convertToStringAndAddDecimal(this.totalQuarterDeposits), {
            x: 455,
            y: height / 2 - 293,
            ...baseOptions
          });

          /* 14 */
          if(parseFloat(this.line14BalanceDue)) {
            firstPage.drawText(this.convertToStringAndAddDecimal(this.line14BalanceDue), {
              x: 455,
              y: height / 2 - 317,
              ...baseOptions
            });
          }

          /* 15 */
          firstPage.drawText(this.convertToStringAndAddDecimal(this.line15Overpayment), {
            x: 310,
            y: height / 2 - 340,
            ...baseOptions
          });

          /* Overpayment Option */
          switch (parseInt(this.overpaymentOption)) {
            case 1:
              firstPage.drawText('x', {
                x: 448,
                y: height / 2 - 342,
                ...baseOptions
              });
              break;
            case 2:
              firstPage.drawText('x', {
                x: 521,
                y: height / 2 - 342,
                ...baseOptions
              });
              break;
          }

          /* Save report and Download*/
          const pdfBytes = await pdfDoc.save();
          // Trigger the browser to download the PDF document
          download(pdfBytes, `IRS-941-${Date.now()}.pdf`, "application/pdf");

          /* TODO Clear out the form */
        }
      },
      convertToStringAndAddDecimal(_number) {
        let formatToString = _number.toString();
        let formatToCurrency = (formatToString.includes('.')) ? formatToString : formatToString+='.00';
        return formatToCurrency.replace(/\d(?=(\d{3})+\.)/g, '$&,');

      },
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
