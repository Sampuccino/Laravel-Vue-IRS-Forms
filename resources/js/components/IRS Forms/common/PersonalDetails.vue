<template>
  <div class="mt-2">
      <h4 class="alert-success p-2 text-center">Common Details</h4>
      <h6>Fill in these common details and they will be filled in across all other forms.</h6>

      <div class="container">
          <div class="row">
              <div class="col-lg-10 col-12 bg-white mt-4 p-3 text-left">
                  <div class="row">
                      <div class="col-8">
                          <div class="row">

                              <div class="col-5 font-weight-bold mb-2">
                                  Employer identification number
                              </div>
                              <div class="col-7 my-auto">
                                  <input type="text" class="form-control" @input="updateEINState"
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
                          <!--Credity Type-->
                          <div class="form-check mt-3">
                              <h6 class="font-weight-bold bg-dark p-2 text-white">The credit from Part 2, line 12, will be
                                  reported on (check only one box):</h6>
                              <label class="form-check-label d-block mt-2">
                                  <input type="radio" class="form-check-input" v-model="creditTypeBox" name="creditType" value="1">
                                  Form 941, 941-PR, or 941-SS
                              </label>
                              <label class="form-check-label d-block mt-2">
                                  <input type="radio" class="form-check-input" v-model="creditTypeBox" name="creditType" value="2">
                                  Form 943 or 943-PR
                              </label>
                              <label class="form-check-label d-block mt-2">
                                  <input type="radio" class="form-check-input" v-model="creditTypeBox" name="creditType"
                                         value="3">
                                  Form 944 or 944(SP)
                              </label>
                          </div>
                          <flatpickr timeFormat="Y" v-model="calendarYear" id="calendar_year_select"/>
                      </div>

                  </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
    import Flatpickr from "../../Calendar/Flatpickr";
    import * as $ from 'jquery';
    import {mapActions} from "vuex";

  export default {
    name: "PersonalDetails",
      components: {Flatpickr},
      data(){
        return {
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
            creditTypeBox: null,
            calendarYear: null,
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
                overpaymentOption: null,
                partTwoNumberSixteen: null,
            }
        }
      },
      methods: {
        ...mapActions(['updateEIN']),
          updateEINState(event) {
              this.updateEIN(event.target.value);
              console.log(event.target.value)
              // $('#form8974EIN').
          }
      }
  }
</script>

<style scoped>

</style>
