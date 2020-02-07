<template>
    <div class="container">
        <div class="row justify-content-center">
            <!--Form 8974-->
            <div v-for="form in forms" class="col-lg-9 col-12 mt-3">
                <div class="card">
                    <div class="card-header font-weight-bold">{{ form.title }}</div>

                    <div class="card-body">

                        <div class="container">
                            <div class="row">
                                <div class="col-3">
                                    <img :src="form.imageSource" class="img-fluid" alt="">
                                </div>
                                <div class="col-9 my-auto">
                                    <h4><span class="text-primary">{{ form.title }}:</span> {{ form.name }}</h4>
                                    <button class="btn btn-primary mt-3" v-on:click="setActiveForm(form.code)">Select {{ form.title }}</button>
                                </div>
                            </div>
                        </div>

                    </div>
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

  export default {
    components: {Form_941, Form_8974, Form_941S},
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
        activeForm_941_Schedule_B: false
      }
    },
    methods: {
      setActiveForm(arg) {
        switch (arg) {
          case '8974':
            this.activeForm_8974 = !this.activeForm_8974;
            break;
          case '941':
            console.log('941');
            this.activeForm_941 = !this.activeForm_941;
            break;
          case '941SB':
            console.log('941SB');
            this.activeForm_941_Schedule_B = !this.activeForm_941_Schedule_B;
            break;
        }
      }
    },
    mounted() {
      console.error(this.type_8974);
      console.error(this.type_941);
      console.error(this.type_941s);
    }
  }
</script>

<style scoped>
    button {
        border-radius: 0;
    }
</style>
