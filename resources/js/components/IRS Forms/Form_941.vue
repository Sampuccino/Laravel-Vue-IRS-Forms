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
                                <input type="text" class="form-control" v-model="numberOfEmployees">
                            </div>

                            <!--Name-->
                            <div class="col-5 font-weight-bold mb-2">
                                Name
                            </div>
                            <div class="col-7 my-auto">
                                <input type="text" class="form-control mb-2" v-model="name">
                            </div>

                            <!--Trade Name-->
                            <div class="col-5 font-weight-bold mb-2">
                                Trade Name
                            </div>
                            <div class="col-7 my-auto">
                                <input type="text" class="form-control mb-2" v-model="tradeName">
                            </div>

                            <!--Address-->
                            <div class="col-5 font-weight-bold mb-2">
                                Address
                            </div>
                            <div class="col-7 my-auto">

                                <div class="row">
                                    <div class="col-12">
                                        <input type="text" placeholder="Number     Street" class="form-control mb-2" v-model="address">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="City" class="form-control mb-2" v-model="city">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="State" class="form-control mb-2" v-model="state">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="ZIP" class="form-control mb-2" v-model="zip">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="Foreign country name" class="form-control mb-2" v-model="f_countryName">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="Foreign province/country" class="form-control mb-2" v-model="f_countryProvince">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="Foreign postal code" class="form-control mb-2" v-model="f_countryZIP">
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
                        <input type="text" placeholder="Fill in" class="form-control" v-model="numberOfEmployees">
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
                        <input type="text" placeholder="Fill in" class="form-control" v-model="totalWages">
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
                        <input type="text" placeholder="Fill in" class="form-control" v-model="withheldTax">
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
                                <input type="radio" class="form-check-input" name="" id="" value="checkedValue" v-model="noWages">
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
                            <div class="col-6 my-auto" v-model="taxableSSTipsPercentage">AUTOCALC**</div>
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
                            <div class="col-6 my-auto" v-model="taxableMedicalWagesPercentage">AUTOCALC**</div>
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
                            <div class="col-6 my-auto" v-model="taxableAMTWithholdingPercentage">AUTOCALC**</div>
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
                    <div class="col-4 my-auto text-center" v-model="sumOfRows5aTo5d">
                        AUTOCALC**
                    </div>
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
                    <div class="col-4 my-auto text-center" v-model="taxBeforeAdjustments">
                        AUTOCALC**
                    </div>
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
                    <div class="col-4 my-auto text-center" v-model="totalTaxesAfterAdjustments">
                        AUTOCALC**
                    </div>
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
                    <div class="col-4 my-auto text-center">
                        <input type="text" class="form-control" placeholder="Fill in" v-model="totalTaxesAfterAdjustmentsAndCredits">
                    </div>
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
                    <div class="col-4 my-auto text-center">
                        <input type="text" class="form-control" placeholder="Fill in" v-model="balanceDue">
                    </div>
                </div>

                <!--###########-->
                <!--15 #########-->
                <!--###########-->
                <div class="row mb-2">
                    <div class="col-8 my-auto">
                        <b class="mr-3">{{partTwoFieldInfo[19].id}}</b>{{partTwoFieldInfo[19].description}}
                    </div>
                    <div class="col-4 my-auto text-center">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <input type="text" class="form-control" v-model="overpayment">
                            </div>
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
                                        <input type="radio" class="form-check-input" name="OverpaymentOption" v-model="overpaymentOption" value="2">
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
  export default {
    name: "Form_941",
    data(){
      return {
        MAX_ROWS: 20,
        dissallow: ['4', '5a', '5b', '5c', '5d', '5e', '6', '10', '12', '14', '15'],
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
        withheldTax: null,
        noWages: null,
        taxableSSWages: null,
        taxableSSWagesPercentage: null,
        taxableSSTips: null,
        taxableSSTipsPercentage: null,
        taxableMedicalWages: null,
        taxableMedicalWagesPercentage: null,
        taxableAMTWithholding: null,
        taxableAMTWithholdingPercentage: null,
        sumOfRows5aTo5d: null,
        section3121: null,
        taxBeforeAdjustments: null,
        currentFractionsOfCents: null,
        currentSickPay: null,
        currentTipAndGroupTerm: null,
        totalTaxesAfterAdjustments: null,
        qualifiedSmallBusinessPayroll: null,
        totalTaxesAfterAdjustmentsAndCredits: null,
        totalQuarterDeposits: null,
        balanceDue: null,
        overpayment: null,
        overpaymentOption: null,

      }
    },
    computed: {
      taxable5A: function () {
       return Number(this.taxableSSWages * 0.124).toFixed(2)
      }
    },
    methods: {
      exportToPDF() {
        console.log('Exporting...');
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
