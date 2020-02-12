<template>
    <div class="container">
        <div class="row justify-content-center">

            <p>{{returnTitle()}}</p>

<!--            <div class="col-12">-->
<!--                <personal-details/>-->
<!--            </div>-->

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

        <div v-show="isFillingOut">

            <div class="row">
                <div class="col-3">
                    <ul class="list-group">
                        <li class="list-group-item"
                            :class="{'active': showPersonal}"
                            @click="setActiveForm('Personal')">Common Details</li>
                        <li class="list-group-item"
                            :class="{'active': setActive.t8974}"
                            v-show="checkedForms.includes('8974')"
                            v-on:click="setActiveForm('t8974')">Form 8974</li>
                        <li class="list-group-item"
                            :class="{'active': setActive.t941}"
                            v-show="checkedForms.includes('941')"
                            v-on:click="setActiveForm('t941')">Form 941</li>
                        <li class="list-group-item"
                            :class="{'active': setActive.t941SB}"
                            v-show="checkedForms.includes('941SB')"
                            v-on:click="setActiveForm('t941SB')">Form Schedule B</li>
                    </ul>
                </div>
                <div class="col-9">
                    <p>Use the left menu to alternate between forms or use the download button to download all
                        working forms.</p>
                    <button class="btn btn-primary">Download</button>
                </div>
                <div class="col-12">
                    <personal-details v-show="showPersonal"/>
                </div>
                <div class="col-12">
                    <form_8974 v-show="setActive.t8974" disableDownload="Y"/>
                </div>
                <div class="col-12">
                    <form_941  v-show="setActive.t941" :formUrl="type_941_url"/>
                </div>
                <div class="col-12">
                    <form_941-s v-show="setActive.t941SB" :formUrl="type_941s_url"/>
                </div>
            </div>

        </div>

        <form_8974 v-show="activeForm_8974"/>
        <form_941  v-show="activeForm_941" :formUrl="type_941_url"/>
        <form_941-s v-show="activeForm_941_Schedule_B" :formUrl="type_941s_url"/>

    </div>
</template>

<script>
  import Form_8974 from "./IRS Forms/Form_8974";
  import Form_941 from "./IRS Forms/Form_941";
  import Form_941S from "./IRS Forms/Form_941S";
  import PersonalDetails from "./IRS Forms/common/PersonalDetails";
  import { mapGetters } from "vuex"

  export default {
    components: {PersonalDetails, Form_941, Form_8974, Form_941S},
    props: {
      type_8974: String,
      type_941: String,
      type_941_url: String,
      type_941s_url: String,
      type_941s: String
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
          title: 'Schedule B',
          imageSource: this.type_941s,
          name: "Report of Tax Liability for Semiweekly Schedule Depositors",
          code: '941SB'
         }
        ],
        activeForm_8974: false,
        activeForm_941: false,
        activeForm_941_Schedule_B: false,
        checkedForms: [],
        isFillingOut: false,
        showPersonal: true,
        setActive: {
            t8974: false,
            t941: false,
            t941SB: false,
        }
      }
    },
    methods: {
      ...mapGetters(['returnTitle']),
      setActiveForm(arg) {
        switch (arg) {
          case '8974':
            this.activeForm_8974 = !this.activeForm_8974;
            this.activeForm_941 = this.activeForm_941_Schedule_B = this.showPersonal = false;
            break;
          case 't8974':
            this.setActive.t8974 = !this.setActive.t8974;
            this.setActive.t941 = this.setActive.t941SB = this.showPersonal = false;
            break;
          case '941':
            console.log('941');
            this.activeForm_941 = !this.activeForm_941;
            this.activeForm_8974 = this.activeForm_941_Schedule_B = this.showPersonal = false;
            break;
          case 't941':
            console.log('t941');
                this.setActive.t941 = !this.setActive.t941;
                this.setActive.t8974 = this.setActive.t941SB = this.showPersonal = false;
            break;
          case '941SB':
            console.log('941SB');
            this.activeForm_941_Schedule_B = !this.activeForm_941_Schedule_B;
            this.activeForm_941 = this.activeForm_8974 = this.showPersonal = false;
            break;
          case 't941SB':
            console.log('t941SB');
              this.setActive.t941SB = !this.setActive.t941SB;
              this.setActive.t8974 = this.setActive.t941 = this.showPersonal = false;
            break;
          case 'Personal':
            console.log('Personal');
            this.showPersonal = !this.showPersonal;
            this.setActive.t8974 = this.setActive.t941 = this.setActive.t941SB = false;
            break;
        }
      },
        continueWithSelectedForms() {
          console.log(this.checkedForms);
            this.isFillingOut = true;
        },
    }
  }
</script>

<style scoped>
    button {
        border-radius: 0;
    }
</style>
