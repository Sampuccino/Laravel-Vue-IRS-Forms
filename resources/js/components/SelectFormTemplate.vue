<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9 col-12">
                <div class="card">
                    <div class="card-header">Form <b>8974</b> </div>

                    <div class="card-body">

                        <div class="container">
                            <div class="row">
                                <div class="col-3">
                                    <img :src="t1" class="img-fluid" alt="">
<!--                                    <a :href="t1">View</a>-->
                                </div>
                                <div class="col-9 my-auto">
                                    <h4><span class="text-primary">Form 8974:</span> Qualified Small Business Payroll Tax Credit for Increasing Research Activities</h4>
                                    <button class="btn btn-primary mt-3" v-on:click="setActiveForm(8974)">Select Form 8974</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <form_8974 v-if="activeForm" />

    </div>
</template>

<script>
  import Form_8974 from "./IRS Forms/Form_8974";
  export default {
    components: {Form_8974},
    props: {
      type_8974: String
    },
    data: function() {
      return {
        t1: this.type_8974,
        activeForm: true
      }
    },
    methods: {
      setActiveForm(arg) {
        switch (arg) {
          case 8974:
            this.activeForm = true;
            break;
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
