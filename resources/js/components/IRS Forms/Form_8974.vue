<template>
    <div class="container">
        <div class="row justify-content-center">

            <!--TOP OF FORM-->
            <div class="col-lg-9 col-12 bg-white mt-4 p-3">
                <div class="row">
                    <div class="col-7">
                        <p>{{ limitEIN }}</p>
                        <!--EIN-->
                        <div class="form-group">
                            <label for="" class="bg-dark p-2 text-white">Employer identification number (EIN)</label>
                            <input maxlength="12" minlength="12" type="text" v-model="ein" name="" class="form-control mt-2" placeholder="" aria-describedby="helpId">
                            <small id="helpId" class="text-muted">Help text</small>
                        </div>

                        <!--Name-->
                        <div class="form-group mt-3">
                            <label for="" class="bg-dark p-2 text-white">Name (not your trade name)</label>
                            <input type="text" class="form-control mt-2" name="" id="" aria-describedby="helpId"
                                   placeholder="">
                            <small id="helpId" class="form-text text-muted">Help text</small>
                        </div>

                        <!--Credity Type-->
                        <div class="form-check mt-3">
                            <h6 class="font-weight-bold bg-dark p-2 text-white">Report for this quarter <small>check only one box</small></h6>
                            <label class="form-check-label d-block mt-2">
                                <input type="radio" class="form-check-input" name="quarterReport" value="checkedValue">
                                Form 941, 941-PR, or 941-SS
                            </label>
                            <label class="form-check-label d-block mt-2">
                                <input type="radio" class="form-check-input" name="quarterReport" value="checkedValue">
                                Form 943 or 943-PR
                            </label>
                            <label class="form-check-label d-block mt-2">
                                <input type="radio" class="form-check-input" name="quarterReport" value="checkedValue">
                                Form 944 or 944(SP)
                            </label>
                        </div>

                    </div>
                    <div class="col-5">
                        <div class="form-check">
                            <h6 class="font-weight-bold bg-dark p-2 text-white mb-2">Report for this quarter <small>check only one box</small></h6>
                            <label class="form-check-label d-block mt-2">
                                <input type="radio" class="form-check-input" name="quarterReport" value="checkedValue">
                                1: January, February, March
                            </label>
                            <label class="form-check-label d-block mt-2">
                                <input type="radio" class="form-check-input" name="quarterReport" value="checkedValue">
                                2: April, May, June
                            </label>
                            <label class="form-check-label d-block mt-2">
                                <input type="radio" class="form-check-input" name="quarterReport" value="checkedValue">
                                3: July, August, September
                            </label>
                            <label class="form-check-label d-block mt-2">
                                <input type="radio" class="form-check-input" name="quarterReport" value="checkedValue">
                                4: October, November, December
                            </label>
                        </div>

                        <!--Calendar Year-->
                        <label for="" class="bg-dark p-2 text-white mt-4">Calendar year <small>You must select a quarter if you file Form 941, 941-PR, or 941-SS.</small> </label>
                        <flatpickr timeFormat="Y" id="calendar_year_select"/>

                    </div>
                </div>
            </div>

            <!--MID or PART 1-->
            <div class="col-lg-12 col-12 bg-white mt-4 p-3">
                <div class="bg-dark p-2 text-white">Part 1 <span class="bg-white text-dark p-1 ml-2">Tell us about your income tax return</span> </div>
                <!--PART 1 : Table-->
                <table class="table table-striped table-responsive text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>(a)
                                Ending date
                                of income
                                tax period</th>
                            <th>(b)
                                Income
                                tax return
                                filed that
                                included
                                Form 6765</th>
                            <th>(c)
                                Date income
                                tax return
                                was filed</th>
                            <th width="12.5%">(d)
                                EIN
                                used on
                                Form 6765</th>
                            <th width="12.5%">(e)
                                Amount from
                                Form 6765, line 44,
                                or if applicable,
                                the amount that
                                was allocated
                                to your EIN
                            </th>
                            <th width="12.5%">(f)
                                Amount of credit
                                from column (e)
                                taken on a
                                previous period(s) </th>
                            <th width="12.5%">(g)
                                Remaining credit
                                (subtract column (f)
                                from column (e)) </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(index, row) in maxRows">
                        <td>
                            <div class="mt-4">
                                <b>{{ index }}</b>
                            </div>
                        </td>
                        <td scope="row" colspan="1">
                            <flatpickr timeFormat="Y-m-d" :id="`a${index}`" fontSize=".5rem" />
                        </td>
                        <td class="my-auto">
                            <input type="text" class="form-control mt-3" name="">
                        </td>
                        <td scope="row">
                            <flatpickr timeFormat="Y-m-d" :id="`c${index}`" fontSize=".5rem" />
                        </td>
                        <td>
                            <input type="text" class="form-control mt-3" name="" placeholder="">
                        </td>
                        <td>
                            <input type="text" class="form-control mt-3" name="" placeholder="">
                        </td>
                        <td colspan="1">
                            <input type="text" class="form-control mt-3" name="" placeholder="">
                        </td>
                        <td>
                            <div class="mt-4">
                                <b>Auto Calc</b>
                            </div>
                        </td>
                    </tr>
                    <!--TOTAL-->
                    <tr>
                        <td colspan="6" class="text-left">
                           <b class="mr-4">6</b>Add lines 1(g) through 5(g) and enter the total here
                        </td>
                        <td colspan="2" class="bg-success ">
                            Total
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>

            <!--BOTTOM or PART 2-->
            <div class="col-lg-9 col-12 bg-white mt-4 p-3">
                <div class="bg-dark p-2 text-white">Part 2 <span class="bg-white text-dark p-1 ml-2">Determine the credit that you can use this period.</span> </div>
                <div v-for="(info, index) in partTwoFieldInfo" class="row">
                    <div class="col-8 bg-light p-2">
                        <b class="mr-2">{{ index }}</b> {{ info }}

                        <div v-if="index === 4">
                        <!--CHECK THIS BOX-->
                            <div class="form-check mt-3">
                                <label class="form-check-label d-block mt-2">
                                    <input type="radio" class="form-check-input" name="checkThisBox">
                                    <b>Check this box if you're a third-party payer of sick pay</b>
                                </label>
                                <label class="form-check-label d-block mt-2">
                                    <input type="radio" class="form-check-input" name="checkThisBox">
                                    <b>Check this box if you received a Section 3121(q) Notice and Demand. See the
                                    instructions before completing line 11</b>
                                </label>
                            </div>

                        </div>

                    </div>
                    <div class="col-4 text-center p-2 my-auto">
                        <div class="form-group">
                            <input type="text" class="form-control" name="" aria-describedby="helpId"
                                   placeholder="">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  import Flatpickr from "../Calendar/Flatpickr";
  export default {
    name: "Form_8974",
    components: {Flatpickr},
    data: function () {
      return {
        ein: '',
        maxRows: [1,2,3,4,5],
        partTwoIds: ['p2_7,p2_8,p2_9,p2_10,p2_11,p2_12'],
        partTwoFieldInfo: [
          'Enter the amount from Part 1, line 6(g) .',
            'Enter the amount from Form 941 (941-PR or 941-SS),\n' +
            'line 5a, Column 2; Form 943 (943-PR), line 3; or Form\n' +
            '944 (944(SP)), line 4a, Column 2 ',
          'Enter the amount from Form 941 (941-PR or 941-SS),\n' +
          'line 5b, Column 2; or Form 944 (944(SP)), line 4b,\n' +
          'Column 2',
          'Add lines 8 and 9',
          'Multiply line 10 by 50% (0.50).',
          'Credit. Enter the smaller of line 7 or line 11. Also enter this amount on Form 941 (941-PR\n' +
          'or 941-SS), line 11; Form 943 (943-PR), line 12; or Form 944 (944(SP)), line 8'
        ]
      }
    },
    computed: {
      limitEIN: function () {
        if (this.ein.length === 2)
          this.ein += ' - ';
        // console.log(this.ein.slice(0,2), ' - ', this.ein.slice(3));
        // return (this.ein.slice(0,2) + ' - ' + this.ein.slice(3));
      }
    }
  }
</script>

<style scoped>
    .col-lg-12 {
        /*max-width: 130%;*/
        /*flex: 0 0 130%;*/
    }
</style>
