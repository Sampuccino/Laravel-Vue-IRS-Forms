<template>
    <div>
        <div class="form-group mt-3">
            <label for="" class="bg-dark p-2 text-white">Calendar year <small>You must select a quarter if you file Form 941, 941-PR, or 941-SS.</small> </label>
            <input id="event_calendar" :value="returnYear" class="form-control mt-2"
                   type="text" placeholder="Select Date.."
                   readonly="readonly" @change="updateCalendarInputValue()">
            <small id="helpId" class="form-text text-muted">Help text</small>
        </div>
    </div>
</template>

<script>
  import flatpickr from "flatpickr";
  export default {
    data(){
      return {
        calendarYear: 'today'
      }
    },
    mounted() {
      flatpickr('#event_calendar', { enableTime: false, inline:true });
    },
    methods: {
      updateCalendarInputValue: function() {
        this.calendarYear = event.target.value.split('-')[0];
      }
    },
    computed: {
        returnYear: function () {
          console.warn(this.calendarYear.split('-')[0]);
          return this.calendarYear.split('-')[0]
        }
    }
  };
</script>
