<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9 col-12 bg-white mt-3 p-3">

                <div class="row">
                    <div class="col-7">
                        <!--EIN-->
                        <div class="form-group">
                            <label for="" class="bg-dark p-2 text-white">Employer identification number (EIN)</label>
                            <input type="text" v-model="ein" name="" class="form-control mt-2" placeholder="" aria-describedby="helpId">
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
                        <div class="form-group mt-3">
                            <label for="" class="bg-dark p-2 text-white">Calendar year <small>You must select a quarter if you file Form 941, 941-PR, or 941-SS.</small> </label>
                            <input id="event_calendar" class="form-control mt-2"
                                   type="text" placeholder="Enter Year">
                            <small id="helpId" class="form-text text-muted">Help text</small>
                        </div>
<!--                        <flatpickr/>-->

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
        ein: null
      }
    }
  }
</script>

<style scoped>

</style>
