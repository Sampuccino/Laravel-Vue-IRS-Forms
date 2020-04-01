<template>
  <div class="container">
    <div class="row">

      <div class="position-fixed text-center" style="right: 1rem; bottom:1rem;">
        <el-button type="primary" @click="exportToPDF">Export</el-button>
      </div>

      <div class="col-12 text-center mb-3">
        <el-tag type="primary" class="d-block">
          <h4>Form 6765</h4>
        </el-tag>
      </div>

      <div class="col-6">
        <div class="form-group">
          <label>Name(s) shown on return</label>
          <el-input placeholder="John Doe"></el-input>
        </div>
      </div>

      <div class="col-3">
        <div class="form-group">
          <label>Identifying number</label>
          <el-input placeholder="0"></el-input>
        </div>
      </div>

      <div class="col-3">
        <div class="form-group">
          <label>Completing Section A?</label>
          <el-switch
            class="d-block text-center mx-auto"
            v-model="toggleSectionA"
            active-text="Section A"
            inactive-text="Section B">
          </el-switch>
        </div>
      </div>
    </div>

    <!--SECTION A ONLY IF Toggled-->
    <div class="row" v-show="toggleSectionA">
      <div class="col-12">
        <el-tag type="success">
          Section A
        </el-tag>
      </div>


      <table class="table table-striped  mt-3">
        <thead>
        <tr>
          <th>Description</th>
          <th>Input</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td scope="row">
            <!--#5-->
            <b>5.</b> Wages for qualified services (do not include wages used in figuring the work opportunity credit)
          </td>
          <td>
            <el-tag v-show="sectionA.field5.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field5.value" placeholder="0.00"></el-input>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#6-->
            <b>6.</b> Cost of supplies
          </td>
          <td>
            <el-tag v-show="sectionA.field6.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field6.value" placeholder="0.00"></el-input>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#7-->
            <b>7.</b> Rental or lease costs of computers (see instructions)
          </td>
          <td>
            <el-tag v-show="sectionA.field7.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field7.value" placeholder="0.00"></el-input>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#8-->
            <b>8.</b> Enter the applicable percentage of contract research expenses. See instructions
          </td>
          <td>
            <el-tag v-show="sectionA.field8.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field8.value" placeholder="0.00"></el-input>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#9-->
            <b>9.</b> Total qualified research expenses. Add lines 5 through 8
          </td>
          <td>
            {{ totalQualifiedResearchExpense }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#10-->
            <b>10.</b> Enter fixed-base percentage, but not more than 16% (0.16) (see instructions)
          </td>
          <td>
            <el-tag v-show="sectionA.field10.error" type="danger" class="mb-1">Error! Must not exceed 16%</el-tag>
            <el-input placeholder="00.00" v-model="sectionA.field10.value"/>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#11-->
            <b>11.</b> Enter average annual gross receipts. See instructions
            <br>
            Enter your Prior Year 1 - 4 Sales in the following 4 fields. Starts from 1 (top) ... 4.
          </td>
          <td>
<!--            <el-tag v-show="sectionA.field11.error" type="danger" class="mb-1">Error!</el-tag>-->
<!--            <el-input v-model="sectionA.field11.value" placeholder="0"></el-input>-->

            <!--Yr1-->
            <el-tag v-show="sectionA.field11.priorYr1.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field11.priorYr1.value" placeholder="0"></el-input>

            <!--Yr2-->
            <el-tag v-show="sectionA.field11.priorYr2.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field11.priorYr2.value" placeholder="0"></el-input>

            <!--Yr3-->
            <el-tag v-show="sectionA.field11.priorYr3.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field11.priorYr3.value" placeholder="0"></el-input>

            <!--Yr4-->
            <el-tag v-show="sectionA.field11.priorYr4.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field11.priorYr4.value" placeholder="0"></el-input>

            <b>Average </b> {{ averageLineEleven }}

          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#12-->
            <b>12.</b> Multiply line 11 by the percentage on line 10
          </td>
          <td>
            {{ lineTwelveCalculation }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#13-->
            <b>13.</b> Subtract line 12 from line 9. If zero or less, enter -0-
          </td>
          <td>
            {{ lineThirteenCalculation }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#14-->
            <b>14.</b> Multiply line 9 by 50% (0.50)
          </td>
          <td>
            {{ lineFourteenCalculation }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#15-->
            <b>15.</b> Enter the smaller of line 13 or line 14
          </td>
          <td>
            {{ smallerOfLineThirteenOrFourteen }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#16-->
            <b>16.</b> Add lines 1, 4, and 15
          </td>
          <td>
            {{ smallerOfLineThirteenOrFourteen }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#17-->
            <b>17.</b> Are you electing the reduced credit under section 280C?
            <div>
              If “Yes,” multiply line 16 by 15.8% (0.158). If “No,” multiply line 16 by 20% (0.20) and see the
              instructions for the statement that must be attached. Members of controlled groups or businesses under
              common control, see instructions for the statement that must be attached
            </div>
          </td>
          <td>
            <el-switch
              class="d-block text-center mx-auto mb-2"
              v-model="sectionA.field17Checkbox"
              active-text="Yes"
              inactive-text="No">
            </el-switch>
            {{ lineSeventeenCalculation }}
          </td>
        </tr>
        </tbody>
      </table>

    </div>

    <!--SECTION B ONLY IF A IS NOT Toggled-->
    <div class="row" v-show="!toggleSectionA">
      <div class="col-12">
        <el-tag type="success">
          Section B
        </el-tag>
      </div>

      <table class="table table-striped  mt-3">
        <thead>
        <tr>
          <th>Description</th>
          <th>Input</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td scope="row">
            <!--#24-->
            <b>24.</b> Wages for qualified services (do not include wages used in figuring the work opportunity credit)
          </td>
          <td>
            <el-tag v-show="sectionA.field5.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field5.value" placeholder="0.00"></el-input>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#25-->
            <b>25</b> Cost of supplies
          </td>
          <td>
            <el-tag v-show="sectionA.field6.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field6.value" placeholder="0.00"></el-input>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#26-->
            <b>26.</b> Rental or lease costs of computers (see instructions)
          </td>
          <td>
            <el-tag v-show="sectionA.field7.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field7.value" placeholder="0.00"></el-input>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#27-->
            <b>27.</b> Enter the applicable percentage of contract research expenses. See instructions
          </td>
          <td>
            <el-tag v-show="sectionA.field8.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field8.value" placeholder="0.00"></el-input>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#28-->
            <b>28.</b> Total qualified research expenses. Add lines 24 through 27
          </td>
          <td>
            {{ totalQualifiedResearchExpense }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#29-->
            <b>29.</b> Enter your total qualified research expenses for the prior 3 tax years. If you had no
            qualified research expenses in any one of those years, skip lines 30 and 31. <b>Yes means you had
            expense. No means you didn't, so enter a 0.</b>
            <br>
            Enter the <em>Prior Yr1,Yr2 and Yr3 QRE</em> in the following fields. Starts from 1 (top) ... 3.
          </td>
          <td>

            <el-switch
              class="d-block text-center mx-auto mb-2"
              v-model="sectionA.field29Checkbox"
              active-text="Yes"
              inactive-text="No">
            </el-switch>

            <!--Yr1-->
            <el-tag v-show="sectionA.field29.priorYr1.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field29.priorYr1.value" placeholder="0"></el-input>

            <!--Yr2-->
            <el-tag v-show="sectionA.field29.priorYr2.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field29.priorYr2.value" placeholder="0"></el-input>

            <!--Yr3-->
            <el-tag v-show="sectionA.field29.priorYr3.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field29.priorYr3.value" placeholder="0"></el-input>


            <b>Average </b> {{ averageLineTwentyNine }}

          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#30-->
            <b>30.</b> Divide line 29 by 6.0
          </td>
          <td>
            {{ lineThirtyCalculation }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#31-->
            <b>31.</b> Subtract line 30 from line 28. If zero or less, enter -0-
          </td>
          <td>
            {{ lineThirtyOneCalculation }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#32-->
            <b>32.</b> Multiply line 31 by 14% (0.14). If you skipped lines 30 and 31, multiply line 28 by 6% (0.06)
          </td>
          <td>
            {{ lineThirtyTwoCalculation }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#33-->
            <b>33.</b> Add lines 23 and 32
          </td>
          <td>
            {{ lineThirtyTwoCalculation }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#34-->
            <b>34.</b> Are you electing the reduced credit under section 280C? ▶ Yes No If “Yes,” multiply line 33 by 79% (0.79). If “No,” enter the amount from line 33 and see the line 17 instructions for the statement that must be attached. Members of controlled groups or businesses under common control, see instructions for the statement that must be attached
          </td>
          <td>

            <el-switch
              class="d-block text-center mx-auto mb-2"
              v-model="sectionA.field34Checkbox"
              active-text="Yes"
              inactive-text="No">
            </el-switch>

            {{ lineThirtyFourCalculation }}
          </td>
        </tr>
        </tbody>
      </table>

    </div>

    <!--Section C & D-->
    <div class="row">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Description</th>
          <th class="col-2">Input</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td scope="row">
            <!--#37-->
            <b>37.</b> Subtract line 35 from line 17 or line 34 (whichever applies). If zero or less, enter -0-
          </td>
          <td>
            {{ lineThirtySixCalculation }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#36-->
            <b>38.</b> Add lines 36 and 37 . . . . . . . . . . . . . . . . . . . . . . . . . . .
            <br>
            • Estates and trusts, go to line 39.
            <br>
            • Partnerships and S corporations not electing the payroll tax credit, stop here and report this amount on Schedule K.
            <br>
            • Partnerships and S corporations electing the payroll tax credit, complete Section D and report on Schedule K the amount on this line reduced by the amount on line 44.
            <br>
            • Eligible small businesses, stop here and report the credit on Form 3800, Part III, line 4i. See instructions for the definition of eligible small business.
            <br>
            • Filers other than eligible small businesses, stop here and report the credit on Form 3800, Part III, line 1c.
            <br>
            Note: Qualified small business filers, other than partnerships and S corporations, electing the payroll tax credit must complete Form 3800 before completing Section D.
          </td>
          <td>
            {{ lineThirtySixCalculation }}
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#41-->
            <b>41.</b> Check this box if you are a qualified small business electing the payroll tax credit. See
            instructions
          </td>
          <td>

            <el-switch
              class="d-block text-center mx-auto mb-2"
              v-model="sectionA.field41Checkbox"
              active-text="Yes"
              inactive-text="No">
            </el-switch>

          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#42-->
            <b>42.</b> Enter the portion of line 36 elected as a payroll tax credit (do not enter more than $250,000). See instructions
          </td>
          <td>

            <el-tag v-show="sectionA.field42.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field42.value" placeholder="0"></el-input>

          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#43-->
            <b>43.</b> General business credit carryforward from the current year (see instructions). Partnerships and S corporations, skip this line and go to line 44
          </td>
          <td>

            <el-tag v-show="sectionA.field43.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field43.value" placeholder="0"></el-input>

          </td>
        </tr>
        <tr>
          <td scope="row">
            <!--#44-->
            <b>44.</b> Partnerships and S corporations, enter the smaller of line 36 or line 42. All others, enter the smallest of line 36, line 42, or line 43. Enter here and on the applicable line of Form 8974, Part 1, column (e). Members of controlled groups or businesses under common control, see instructions for the statement that must be attached
          </td>
          <td>

            <el-tag v-show="sectionA.field44.error" type="danger" class="mb-1">Error!</el-tag>
            <el-input v-model="sectionA.field44.value" placeholder="0"></el-input>

          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  import NumberFormatter from "../../utilities/NumberFormatter";
    export default {
        props: {
        },
      data() {
          return {
           toggleSectionA: true,
            sectionA: {
              field5: {
                error: false,
                value: ''
              },
              field6: {
                error: false,
                value: ''
              },
              field7: {
                error: false,
                value: ''
              },
              field8: {
                error: false,
                value: ''
              },
              field10: {
                error: false,
                value: ''
              },
              field11: {
                error: false,
                value: '',
                priorYr1: {
                  error: false,
                  value: ''
                },
                priorYr2: {
                  error: false,
                  value: ''
                },
                priorYr3: {
                  error: false,
                  value: ''
                },
                priorYr4: {
                  error: false,
                  value: ''
                },
              },
              field12: {
                error: false,
                value: ''
              },
              field13: {
                error: false,
                value: ''
              },
              field14: {
                error: false,
                value: ''
              },
              field15: {
                error: false,
                value: ''
              },
              field16: {
                error: false,
                value: ''
              },
              field17Checkbox: true,
              field17: {
                error: false,
                value: ''
              },
              field29Checkbox: true,
              field29: {
                error: false,
                value: '',
                priorYr1: {
                  error: false,
                  value: ''
                },
                priorYr2: {
                  error: false,
                  value: ''
                },
                priorYr3: {
                  error: false,
                  value: ''
                },
              },
              field34Checkbox: true,
              field41Checkbox: true,
              field42: {
                error: false,
                value: '',
              },
              field43: {
                error: false,
                value: '',
              },
              field44: {
                error: false,
                value: '',
              },
            },
          }
      },
      computed: {
        totalQualifiedResearchExpense: function () {
          let values = [
            NumberFormatter.parseNumber(this.sectionA.field5.value),
            NumberFormatter.parseNumber(this.sectionA.field6.value),
            NumberFormatter.parseNumber(this.sectionA.field7.value),
            NumberFormatter.parseNumber(this.sectionA.field8.value)
          ];

          return parseFloat((values.reduce((a,b) => a+b,0)).toFixed(2))
        },
        averageLineEleven: function(){
          const arr = [
            NumberFormatter.parseNumber(this.sectionA.field11.priorYr1.value),
            NumberFormatter.parseNumber(this.sectionA.field11.priorYr2.value),
            NumberFormatter.parseNumber(this.sectionA.field11.priorYr3.value),
            NumberFormatter.parseNumber(this.sectionA.field11.priorYr4.value)
          ];
          return (arr.reduce((a,b) => a+b,0) / arr.length ).toFixed(2);
        },
        lineTwelveCalculation: function () {
          //  Divide % by 100
          return ((NumberFormatter.parseNumber(this.sectionA.field10.value) / 100) * NumberFormatter.parseNumber(this.averageLineEleven)).toFixed(2);
        },
        lineThirteenCalculation: function () {
          //  Condition: If less than 0 return -0-
          const t = (this.totalQualifiedResearchExpense - this.lineTwelveCalculation).toFixed(2);
          return (t <= 0) ? '-0-' : t;
        },
        lineFourteenCalculation: function () {
          return (this.totalQualifiedResearchExpense * .50).toFixed(2);
        },
        smallerOfLineThirteenOrFourteen: function () {
          const L13 = this.lineThirteenCalculation;
          const L14 = this.lineFourteenCalculation;

          // Check for -0-
          if (L13 === '-0-') {
            return L14;
          }

          return (L13 < L14) ? L13 : L14;
        },
        lineSeventeenCalculation: function () {
          // If “Yes,” multiply line 16 by 15.8% (0.158). If “No,” multiply line 16 by 20% (0.20)
          if (this.sectionA.field17Checkbox) {
            return (this.smallerOfLineThirteenOrFourteen * 0.158).toFixed(2);
          } else
            return (this.smallerOfLineThirteenOrFourteen * 0.20).toFixed(2);
        },
        averageLineTwentyNine: function(){
          const arr = [
            NumberFormatter.parseNumber(this.sectionA.field29.priorYr1.value),
            NumberFormatter.parseNumber(this.sectionA.field29.priorYr2.value),
            NumberFormatter.parseNumber(this.sectionA.field29.priorYr3.value),
          ];
          return (arr.reduce((a,b) => a+b,0) / arr.length ).toFixed(2);
        },
        lineThirtyCalculation: function () {
          return (NumberFormatter.parseNumber(this.averageLineTwentyNine) / 6.0).toFixed(2);
        },
        lineThirtyOneCalculation: function () {
          //  Condition: If less than 0 return -0-
          const t = (this.totalQualifiedResearchExpense - this.lineThirtyCalculation).toFixed(2);
          return (t <= 0) ? '-0-' : t;
        },
        lineThirtyTwoCalculation: function () {
          console.log('lineThirtyTwoCalculation with a check value of ', this.sectionA.field29Checkbox);
          // Multiply line 31 by 14% (0.14). If you skipped lines 30 and 31, multiply line 28 by 6% (0.06)
          if (!this.sectionA.field29Checkbox) {
            return (this.totalQualifiedResearchExpense * .06).toFixed(2);
          } else
            return (this.lineThirtyOneCalculation * .14).toFixed(2)
        },
        lineThirtyFourCalculation: function () {
          if (this.sectionA.field34Checkbox) {
            return (this.lineThirtyTwoCalculation * 0.79).toFixed(2);
          } else
            return this.lineThirtyTwoCalculation;
        },
        lineThirtySixCalculation: function () {
          // Subtract line 35 from line 17 or line 34 (whichever applies). If zero or less, enter -0-
          // Return based on which side of the form is active
          if (this.sectionA)
            return this.lineSeventeenCalculation;
          else
            return this.lineThirtyFourCalculation;
        }
      },
      methods: {
        exportToPDF() {

        //  Run Validator A, B, C&D

          if (this.toggleSectionA) {
            const validatedSA = this.validationSectionA();
            console.log('Validator SECTION A with a value of ', validatedSA);
          } else {
            const validatedSB = this.validationSectionB();
            console.log('Validator SECTION B with a value of ', validatedSB);
          }

          const validatedCandD = this.validationSectionCandD();


        },
        validationSectionA(){

          /* #5 */
          if (!NumberFormatter.isANumber(this.sectionA.field5.value) && !NumberFormatter.isEmpty(this.sectionA.field5.value)) {
            this.sectionA.field5.error = false;
          } else {
            this.sectionA.field5.error = true;
            return false
          }

          /* #6 */
          if (!NumberFormatter.isANumber(this.sectionA.field6.value) && !NumberFormatter.isEmpty(this.sectionA.field6.value)) {
            this.sectionA.field6.error = false;
          } else {
            this.sectionA.field6.error = true;
            return false
          }

          /* #7 */
          if (!NumberFormatter.isANumber(this.sectionA.field7.value) && !NumberFormatter.isEmpty(this.sectionA.field7.value)) {
            this.sectionA.field7.error = false;
          } else {
            this.sectionA.field7.error = true;
            return false
          }

          /* #8 */
          if (!NumberFormatter.isANumber(this.sectionA.field8.value) && !NumberFormatter.isEmpty(this.sectionA.field8.value)) {
            this.sectionA.field8.error = false;
          } else {
            this.sectionA.field8.error = true;
            return false
          }

          /* #10 */
          /* Not greater than .1600 */
          if (!NumberFormatter.isANumber(this.sectionA.field10.value) && !NumberFormatter.isEmpty(this.sectionA.field10.value) && NumberFormatter.noGreaterThan16Percent(this.sectionA.field10.value)) {
            this.sectionA.field10.error = false;
          } else {
            this.sectionA.field10.error = true;
            return false
          }

          /* #11 Y1 */
          if (!NumberFormatter.isANumber(this.sectionA.field11.priorYr1.value) && !NumberFormatter.isEmpty(this.sectionA.field11.priorYr1.value)) {
            this.sectionA.field11.priorYr1.error = false;
          } else {
            this.sectionA.field11.priorYr1.error = true;
            return false
          }

          /* #11 Y2 */
          if (!NumberFormatter.isANumber(this.sectionA.field11.priorYr2.value) &&
            !NumberFormatter.isEmpty(this.sectionA.field11.priorYr2.value)) {
            this.sectionA.field11.priorYr2.error = false;
          } else {
            this.sectionA.field11.priorYr2.error = true;
            return false
          }

          /* #11 Y3 */
          if (!NumberFormatter.isANumber(this.sectionA.field11.priorYr3.value) &&
            !NumberFormatter.isEmpty(this.sectionA.field11.priorYr3.value)) {
            this.sectionA.field11.priorYr3.error = false;
          } else {
            this.sectionA.field11.priorYr3.error = true;
            return false
          }

          /* #11 Y4 */
          if (!NumberFormatter.isANumber(this.sectionA.field11.priorYr4.value) &&
            !NumberFormatter.isEmpty(this.sectionA.field11.priorYr4.value)) {
            this.sectionA.field11.priorYr4.error = false;
          } else {
            this.sectionA.field11.priorYr4.error = true;
            return false
          }

          return true; // all fields passed
        },
        validationSectionB(){
          /* #5 */
          if (!NumberFormatter.isANumber(this.sectionA.field5.value) && !NumberFormatter.isEmpty(this.sectionA.field5.value)) {
            this.sectionA.field5.error = false;
          } else {
            this.sectionA.field5.error = true;
            return false
          }

          /* #6 */
          if (!NumberFormatter.isANumber(this.sectionA.field6.value) && !NumberFormatter.isEmpty(this.sectionA.field6.value)) {
            this.sectionA.field6.error = false;
          } else {
            this.sectionA.field6.error = true;
            return false
          }

          /* #7 */
          if (!NumberFormatter.isANumber(this.sectionA.field7.value) && !NumberFormatter.isEmpty(this.sectionA.field7.value)) {
            this.sectionA.field7.error = false;
          } else {
            this.sectionA.field7.error = true;
            return false
          }

          /* #8 */
          if (!NumberFormatter.isANumber(this.sectionA.field8.value) && !NumberFormatter.isEmpty(this.sectionA.field8.value)) {
            this.sectionA.field8.error = false;
          } else {
            this.sectionA.field8.error = true;
            return false
          }

          /* 29 */
          if (this.sectionA.field29Checkbox) {
            /* #11 Y1 */
            if (!NumberFormatter.isANumber(this.sectionA.field29.priorYr1.value) &&
              !NumberFormatter.isEmpty(this.sectionA.field29.priorYr1.value)) {
              this.sectionA.field29.priorYr1.error = false;
            } else {
              this.sectionA.field29.priorYr1.error = true;
              return false
            }

            /* #11 Y2 */
            if (!NumberFormatter.isANumber(this.sectionA.field29.priorYr2.value) &&
              !NumberFormatter.isEmpty(this.sectionA.field29.priorYr2.value)) {
              this.sectionA.field29.priorYr2.error = false;
            } else {
              this.sectionA.field29.priorYr2.error = true;
              return false
            }

            /* #11 Y3 */
            if (!NumberFormatter.isANumber(this.sectionA.field29.priorYr3.value) &&
              !NumberFormatter.isEmpty(this.sectionA.field29.priorYr3.value)) {
              this.sectionA.field29.priorYr3.error = false;
            } else {
              this.sectionA.field29.priorYr3.error = true;
              return false
            }


          } else {
            this.sectionA.field29.error = false;
          }

          return true;
        },
        validationSectionCandD(){

          if (this.sectionA.field41Checkbox) {
            /* #42 */
            if (!NumberFormatter.isANumber(this.sectionA.field42.value) && !NumberFormatter.isEmpty(this.sectionA.field42.value)) {
              this.sectionA.field42.error = false;
            } else {
              this.sectionA.field42.error = true;
              return false
            }
          }

          /* #43 */
          if (!NumberFormatter.isANumber(this.sectionA.field43.value) &&
            !NumberFormatter.isEmpty(this.sectionA.field43.value)) {
            this.sectionA.field43.error = false;
          } else {
            this.sectionA.field43.error = true;
            return false
          }

          /* #44 */
          if (!NumberFormatter.isANumber(this.sectionA.field44.value) && !NumberFormatter.isEmpty(this.sectionA.field44.value)) {
            this.sectionA.field44.error = false;
          } else {
            this.sectionA.field44.error = true;
            return false
          }



          return true;
        }
      }
    };
</script>
