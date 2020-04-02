<template>
    <div class="container">
        <div class="row justify-content-center">

            <p>{{returnTitle()}}</p>

            <table v-show="!isFillingOut" class="table">
                <thead>
                <tr>
                    <th width="10%">Select</th>
                    <th width="90%">Form</th>
                </tr>
                </thead>
                <tbody v-for="(form, index) in forms">
                <tr :class="{'bg-light': (index%2 ===0) }">
                    <td scope="row">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                   name="formTypeOption[]" :value="form.code" v-model="checkedForms">
                        </div>
                    </td>
                    <td>
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card-header bg-dark text-white font-weight-bold">{{ form.title }}</div>
                                </div>
                                <div class="col-3 mt-2">
                                    <img :src="form.imageSource" class="img-fluid" alt="">
                                </div>
                                <div class="col-9 my-auto">
                                    <h4><span class="text-primary">{{ form.title }}:</span> {{ form.name }}</h4>
                                    <button class="btn btn-primary mt-3" v-on:click="setActiveForm(form.code)">Select {{ form.title }}</button>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td>
                            <button class="btn btn-primary"
                            :class="{'': checkedForms, 'disabled': (checkedForms.length === 0 || checkedForms.length < 2)}"
                                    @click="continueWithSelectedForms">Continue with
                                selected forms (must select at least 2 forms.)</button>
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>

        <div v-if="isFillingOut">

            <div class="row">
                <div class="col-3">
                    <ul class="list-group">
                        <li class="list-group-item"
                            :class="{'active': showPersonal}"
                            @click="setActiveForm('Personal')">Common Details</li>
                        <li class="list-group-item"
                            :class="{'active': setActive.t8974}"
                            v-show="checkedForms.includes('8974')"
                            v-on:click="setActiveForm('t8974')">Form 8974
                          <span v-show="errors.form8974" class="ml-2 alert-danger p-2">Has Error(s)</span>
                        </li>
                        <li class="list-group-item"
                            :class="{'active': setActive.t941}"
                            v-show="checkedForms.includes('941')"
                            v-on:click="setActiveForm('t941')">Form 941
                          <span v-show="errors.form941" class="ml-2 alert-danger p-2">Has Error(s)</span>
                        </li>
                      <li class="list-group-item"
                            :class="{'active': setActive.t941X}"
                            v-show="checkedForms.includes('941X')"
                            v-on:click="setActiveForm('t941X')">Form 941-X
                          <span v-show="errors.form941X" class="ml-2 alert-danger p-2">Has Error(s)</span>
                        </li>
                        <li class="list-group-item"
                            :class="{'active': setActive.t941SB}"
                            v-show="checkedForms.includes('941SB')"
                            v-on:click="setActiveForm('t941SB')">Form Schedule B
                          <span v-show="errors.form941SB" class="ml-2 alert-danger p-2">Has Error(s)</span>
                        </li>
                    </ul>
                </div>
                <div class="col-9">
                    <p>Use the left menu to alternate between forms or use the download button to download all
                        working forms.</p>
                    <button class="btn btn-warning" @click="returnToStart">Back</button>
                    <button class="btn btn-primary" @click="sendDownloadEvent">Download</button>
                </div>
                <div class="col-12">
                    <personal-details v-show="showPersonal"/>
                </div>
                <div class="col-12">
                    <form_8974 ref="form8974" v-show="setActive.t8974" disableDownload="Y"/>
                </div>
                <div class="col-12">
                    <form_941 ref="form941"  v-show="setActive.t941" disableDownload="Y" :formUrl="type_941_url"/>
                </div>
              <div class="col-12">
                    <form_941-x ref="form941X"  v-show="setActive.t941X" disableDownload="Y" :formUrl="type_941x_url"/>
                </div>
                <div class="col-12">
                    <form_941-s ref="form941SB" v-show="setActive.t941SB" disableDownload="Y" :formUrl="type_941s_url"/>
                </div>
            </div>

        </div>

        <form_8974 v-show="activeForm_8974 && !isFillingOut"/>
        <form_941  v-show="activeForm_941 && !isFillingOut" :formUrl="type_941_url"/>
        <form_941-s v-show="activeForm_941_Schedule_B && !isFillingOut" :formUrl="type_941s_url"/>
        <form_941-x v-show="activeForm_941X && !isFillingOut" :formUrl="type_941x_url" />
        <form_6765 v-show="activeForm_6765 && !isFillingOut" :formUrl="type_6765_url"/>

    </div>
</template>

<script>
  import {mapGetters} from "vuex"

  import Form_8974 from "./IRS Forms/Form_8974";
  import Form_941 from "./IRS Forms/Form_941";
  import Form_941S from "./IRS Forms/Form_941S";
  import Form_941X from "./IRS Forms/Form_941X";
  import PersonalDetails from "./IRS Forms/common/PersonalDetails";
  import Form_6765 from "./IRS Forms/Form_6765";

  export default {
    components: {Form_6765, Form_941X, PersonalDetails, Form_941, Form_8974, Form_941S},
    props: {
      type_8974: String,
      type_941: String,
      type_941_url: String,
      type_941s_url: String,
      type_941s: String,
      type_941x_url: String,
      type_941x: String,
      type_6765: String,
      type_6765_url: String
    },
    data: function() {
      return {
        forms: [
          {
          title: 'Form 8974',
          imageSource: this.type_8974,
          name: 'Qualified Small Business Payroll Tax Credit for Increasing Research Activities',
          code: '8974'
         },
         {
          title: 'Form 941',
          imageSource: this.type_941,
          name: "Employer's Quarterly Federal Tax Return",
          code: '941'
         },
        {
          title: 'Form 941–X',
          imageSource: this.type_941x,
          name: "Adjusted Employers Quarterly Federal Tax Return or Claim for Refund",
          code: '941X'
         },
         {
          title: 'Schedule B',
          imageSource: this.type_941s,
          name: "Report of Tax Liability for Semiweekly Schedule Depositors",
          code: '941SB'
         },
          {
            title: 'Form 6765',
            imageSource: this.type_6765,
            name: "Credit for Increasing Research Activities",
            code: '6765'
          }
        ],
        activeForm_8974: false,
        activeForm_941: false,
        activeForm_941X: false,
        activeForm_941_Schedule_B: false,
        activeForm_6765: true,
        checkedForms: [],
        isFillingOut: false,
        showPersonal: true,
        setActive: {
            t8974: false,
            t941: false,
            t941X: false,
            t941SB: false,
            t6765: false,
        },
        errors: {
          form8974: false,
          form941: false,
          form941X: false,
          form941SB: false,
          form6765: false,
        }
      }
    },
    methods: {
      ...mapGetters(['returnTitle']),
      setActiveForm(arg) {

        switch (arg) {
          case '8974':
            this.activeForm_8974 = !this.activeForm_8974;
            this.activeForm_941 = this.activeForm_941_Schedule_B = this.activeForm_941X = this.showPersonal = false;
            break;
          case 't8974':
            this.setActive.t8974 = !this.setActive.t8974;
            this.setActive.t941 = this.setActive.t941SB = this.setActive.t941X = this.showPersonal = false;
            break;
          case '941':
            console.log('941');
            this.activeForm_941 = !this.activeForm_941;
            this.activeForm_8974 = this.activeForm_941_Schedule_B = this.activeForm_941X = this.showPersonal = false;
            break;
          case 't941':
            console.log('t941');
                this.setActive.t941 = !this.setActive.t941;
                this.setActive.t8974 = this.setActive.t941SB = this.setActive.t941X = this.showPersonal = false;
            break;
          case '941X':
            console.log('941X');
            this.activeForm_941X = !this.activeForm_941X;
            this.activeForm_941 = this.activeForm_8974 = this.activeForm_941_Schedule_B =
            this.showPersonal = false;
            break;
          case 't941X':
            console.log('t941X');
            this.setActive.t941X = !this.setActive.t941X;
            this.activeForm_941 = this.setActive.t8974 = this.setActive.t941SB = this.showPersonal = false;
            break;
          case '941SB':
            console.log('941SB');
            this.activeForm_941_Schedule_B = !this.activeForm_941_Schedule_B;
            this.activeForm_941 = this.activeForm_8974 = this.activeForm_941X = this.showPersonal = false;
            break;
          case 't941SB':
            console.log('t941SB');
              this.setActive.t941SB = !this.setActive.t941SB;
              this.setActive.t8974 = this.setActive.t941 = this.setActive.t941X = this.showPersonal = false;
            break;
            case '6765': // code key from forms array object
              break;
            case 't6765': // active state
            break;
          case 'Personal':
            console.log('Personal');
            this.showPersonal = !this.showPersonal;
            this.setActive.t8974 = this.setActive.t941 = this.setActive.t941SB = this.setActive.t941X = false;
            break;
        }
      },
        continueWithSelectedForms() {
          console.log(this.checkedForms);
          // console.warn('Add in form 8974 if 941 or 941X is present.');
            if(this.checkedForms.length > 1) this.isFillingOut = true;
        },
      returnToStart() {
        this.isFillingOut = !this.isFillingOut;
      },
      sendDownloadEvent() {
        /*
        * Check which forms are selected
        * Try to download form 8974.
        * */
        if (this.checkedForms.includes('8974')) {
          const _validated = this.$refs.form8974.validateFormFields();
          if (_validated) {
            this.$refs.form8974.exportToPDF();
            this.errors.form8974 = false;
          } else {
            /* Toggle Error on Tab*/
            this.errors.form8974 = true;
          }
        }

        if (this.checkedForms.includes('941')) {
          const _validated = this.$refs.form941.validateFormFields();
          if (_validated) {
            this.$refs.form941.exportToPDF();
            this.errors.form941 = false;
          } else {
            /* Toggle Error on Tab*/
            this.errors.form941 = true;
          }
        }

        if (this.checkedForms.includes('941X')) {
          const _validated = this.$refs.form941X.validation();
          console.warn('941X Validation with a value of ', _validated);
          if (_validated) {
            this.$refs.form941X.exportToPDF();
            this.errors.form941X = false;
          } else {
            /* Toggle Error on Tab*/
            this.errors.form941X = true;
          }
        }

        if (this.checkedForms.includes('941SB')) {
          const _validated = this.$refs.form941SB.validateFormFields();
          if (_validated) {
            this.$refs.form941SB.exportToPDF();
            this.errors.form94SB1 = false;
          } else {
            /* Toggle Error on Tab*/
            this.errors.form941SB = true;
          }
        }

      }
    }
  }
</script>

<style scoped>
    button {
        border-radius: 0;
    }
</style>
