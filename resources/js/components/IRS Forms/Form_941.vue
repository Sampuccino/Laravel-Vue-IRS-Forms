<template>
    <div class="container">
        <div class="position-fixed" style="right: 1rem; bottom:1rem;">

            <div>
                <button class="btn btn-danger d-inline clear">Clear</button>
            </div>

            <div>
                <button class="btn btn-primary d-inline export">Export</button>
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
                                <input type="text" class="form-control">
                            </div>

                            <!--Name-->
                            <div class="col-5 font-weight-bold mb-2">
                                Name
                            </div>
                            <div class="col-7 my-auto">
                                <input type="text" class="form-control mb-2">
                            </div>

                            <!--Trade Name-->
                            <div class="col-5 font-weight-bold mb-2">
                                Trade Name
                            </div>
                            <div class="col-7 my-auto">
                                <input type="text" class="form-control mb-2">
                            </div>

                            <!--Address-->
                            <div class="col-5 font-weight-bold mb-2">
                                Address
                            </div>
                            <div class="col-7 my-auto">

                                <div class="row">
                                    <div class="col-12">
                                        <input type="text" placeholder="Number     Street" class="form-control mb-2">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="City" class="form-control mb-2">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="State" class="form-control mb-2">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="ZIP" class="form-control mb-2">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="Foreign country name" class="form-control mb-2">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="Foreign province/country" class="form-control mb-2">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="Foreign postal code" class="form-control mb-2">
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
                <div class="bg-dark p-2 text-white">Part 1 <span class="bg-white text-dark p-1 ml-2">Answer these questions for this quarter</span></div>
            </div>

            <!--Part 2 OF FORM-->
            <div class="col-lg-10 col-12 bg-white mt-4">
                <div v-for="field in partTwoFieldInfo" class="row mb-2">
                    <div class="col-8 my-auto">
                        <b>{{field.id}}</b> {{field.description}}
                    </div>
<!--                    <div v-show="field.id === '4'" class="col-4">-->
<!--                        Check and go to line 6-->
<!--                    </div>-->
<!--                    <div v-show="field.id === '5a'" class="col-4">-->
<!--                        5A-->
<!--                    </div>-->
<!--                    <div v-show="field.id === '15R'" class="col-4">-->
<!--                        Showing 15R-->
<!--                    </div>-->
<!--                    <div v-show="field.id === '15S'" class="col-4">-->
<!--                        Showing 15S-->
<!--                    </div>-->
                    <div v-if="!dissallow.includes(field.id)" class="col-4">
                        <input type="text" placeholder="Fill in" class="form-control">
                    </div>
                    <div v-else class="col-4">
                        <!--Auto calculate fields-->
                        <input type="text" placeholder="_AUTOFILL**" class="form-control">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    name: "Form_941",
    data(){
      return {
        reportForThisQuarter: null,
        dissallow: ['4', '5aa', '5bb', '5cc', '5dd', '5e', '6', '10', '12', '14', '15'],
        partTwoFieldInfo: [
          { id: '1', description: 'Number of employees who received wages, tips, or other compensation for the pay period including: Mar. 12 (Quarter 1), June 12 (Quarter 2), Sept. 12 (Quarter 3), or Dec. 12 (Quarter 4)' },
          { id: '2', description: 'Wages, tips, and other compensation' },
          { id: '3', description: 'Federal income tax withheld from wages, tips, and other compensation ' },
          { id: '4', description: 'If no wages, tips, and other compensation are subject to social security or Medicare tax' },
          { id: '5a', description: 'Taxable social security wages' },
          { id: '5b', description: 'Taxable social security tips .' },
          { id: '5c', description: 'Taxable Medicare wages & tips' },
          { id: '5d', description: 'Taxable wages & tips subject to Additional Medicare Tax withholding' },
          { id: '5e', description: 'Add Column 2 from lines 5a, 5b, 5c, and 5d' },
          { id: '5f', description: 'Section 3121(q) Notice and Demand—Tax due on unreported tips (see instructions)' },
          { id: '6', description: 'Total taxes before adjustments. Add lines 3, 5e, and 5f' },
          { id: '7', description: 'Current quarter’s adjustment for fractions of cents' },
          { id: '8', description: 'Current quarter’s adjustment for sick pay' },
          { id: '9', description: 'Current quarter’s adjustments for tips and group-term life insurance' },
          { id: '10', description: 'Total taxes after adjustments. Combine lines 6 through 9' },
          { id: '11', description: 'Qualified small business payroll tax credit for increasing research activities. Attach Form 8974' },
          { id: '12', description: 'Total taxes after adjustments and credits. Subtract line 11 from line 10' },
          { id: '13', description: 'Total deposits for this quarter, including overpayment applied from a prior quarter and overpayments applied from Form 941-X, 941-X (PR), 944-X, or 944-X (SP) filed in the current quarter' },
          { id: '14', description: 'Balance due. If line 12 is more than line 13, enter the difference and see instructions' },
          { id: '15', description: 'Overpayment. If line 13 is more than line 12, enter the difference' },
          { id: '15R', description: 'Apply to next return' },
          { id: '15S', description: 'Send a refund' },
        ]
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
