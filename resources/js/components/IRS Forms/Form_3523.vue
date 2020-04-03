<template>
  <div class="container">
    <div class="row">

      <div class="col-12 text-center mb-3">
        <el-tag type="primary" class="d-block">
          <h4>Form 3523</h4>
        </el-tag>
      </div>

      <table class="table table-striped">
        <thead>
        <tr>
          <th>Description</th>
          <th>Input</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td scope="row">
            <!-- #5 -->
            <b>5</b> Wages for qualified services.
          </td>
          <td>
            <div class="form-group">
              <el-tag v-show="field5.error" type="danger" class="mb-1">Error!</el-tag>
              <el-input type="text" v-model="field5.value" placeholder="0"></el-input>
            </div>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #6 -->
            <b>6</b> Cost of supplies
          </td>
          <td>
            <div class="form-group">
              <el-tag v-show="field6.error" type="danger" class="mb-1">Error!</el-tag>
              <el-input type="text" v-model="field6.value" placeholder="0"></el-input>
            </div>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #7 -->
            <b>7</b> Rental or lease costs of computers
          </td>
          <td>
            <div class="form-group">
              <el-tag v-show="field7.error" type="danger" class="mb-1">Error!</el-tag>
              <el-input type="text" v-model="field7.value" placeholder="0"></el-input>
            </div>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #8 -->
            <b>8</b> Enter the applicable percentage of contract research expenses.
          </td>
          <td>
            <div class="form-group">
              <el-tag v-show="field8.error" type="danger" class="mb-1">Error!</el-tag>
              <el-input type="text" v-model="field8.value" placeholder="0"></el-input>
            </div>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #9 -->
            <b>9</b> Total qualified research expenses. Add line 5 through line 8
          </td>
          <td>
            CALC
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #10 -->
            <b>10</b> Enter fixed-base percentage, but not more than 16%
          </td>
          <td>
            <div class="form-group">
              <el-tag v-show="field10.error" type="danger" class="mb-1">Error!</el-tag>
              <el-input type="text" v-model="field10.value" placeholder="0"></el-input>
            </div>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #11 -->
            <b>11</b> Enter average annual gross receipts.
          </td>
          <td>
            <div class="form-group">
              <el-tag v-show="field11.error" type="danger" class="mb-1">Error!</el-tag>
              <el-input type="text" v-model="field11.value" placeholder="0"></el-input>
            </div>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #12 -->
            <b>12</b> Base amount. Multiply line 11 by the percentage on line 10
          </td>
          <td>
            CALC
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #13 -->
            <b>13</b> Subtract line 12 from line 9. If zero or less, enter -0-
          </td>
          <td>
            CALC
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #14 -->
            <b>14</b> Multiply line 9 by 50% (.50)
          </td>
          <td>
            CALC
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #15 -->
            <b>15</b> Enter the smaller of line 13 or line 14
          </td>
          <td>
            CALC
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #16 -->
            <b>16</b> Multiply line 15 by 15% (.15)
          </td>
          <td>
            CALC
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #17 -->
            <b>17a</b>
            Regular credit. Add line 4 and line 16. If you do not elect the reduced credit under IRC Section 280C(c), enter the result here, and see instructions for the schedule to attach
          </td>
          <td>
            CALC
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #17b -->
            <b>17b</b> Reduced regular credit under IRC Section 280C(c). Multiply line 17a by the applicable
            percentage below:
            <br>
            • 87.7% (.877) for individuals, estates, and trusts
            <br>
            • 91.16% (.9116) for corporations
            <br>
            • 98.5% (.985) for S corporations
            <br>
            Enter the reduced credit amount. See instructions
          </td>
          <td>
            CALC
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #41 -->
            <b>41</b> Current year research credit. If you did not elect the reduced credit under IRC Section 280C(c), add line 17a or line 39a to line 40 and enter the result here. If you elected the reduced credit under IRC Section 280C(c),
            add line 17b or line 39b to line 40 and enter the result here
          </td>
          <td>
            CALC
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #43 -->
            <b>43</b> Subtract line 42 from line 41
          </td>
          <td>
            CALC
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #45 -->
            <b>45</b> Non-passive activity credit carryover from prior year. (Do not include credits received through
            assignment.)
          </td>
          <td>
            <div class="form-group">
              <el-tag v-show="field45.error" type="danger" class="mb-1">Error!</el-tag>
              <el-input type="text" v-model="field45.value" placeholder="0"></el-input>
            </div>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #46 -->
            <b>46</b> Total. Add line 43 through line 45
          </td>
          <td>
            CALC
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #47 -->
            <b>47</b> Credit claimed. Enter the amount of the credit claimed on the current year tax return. See instructions.
            (Do not include any assigned credit claimed on form FTB 3544, Part B.)
          </td>
          <td>
            <div class="form-group">
              <el-tag v-show="field47.error" type="danger" class="mb-1">Error!</el-tag>
              <el-input type="text" v-model="field47.value" placeholder="0"></el-input>
            </div>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <!-- #49 -->
            <b>49</b> Credit carryover available for use or assignment for future years. Subtract lines 47 and 48 from line 46
          </td>
          <td>
            CALC
          </td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Form_3523",
    props: {
      type_3523: String,
      type_3523_url: String
    },
    data(){
      return {
        field5: {
          value: 0,
          error: false
        },
        field6: {
          value: 0,
          error: false
        },
        field7: {
          value: 0,
          error: false
        },
        field8: {
          value: 0,
          error: false
        },
        field10: {
          value: 0,
          error: false
        },
        field11: {
          value: 0,
          error: false
        },
        field45: {
          value: 0,
          error: false
        },
        field47: {
          value: 0,
          error: false
        },
      }
    },
    methods: {
      validation(){
        /*
        * 5
        * 6
        * 7
        * 8
        * 10
        * 11
        * 45
        * 47*/





      }
    }
  }
</script>

<style scoped>

</style>
