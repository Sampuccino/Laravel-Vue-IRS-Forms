<template>
    <div>
        <div class="form-group mt-3">
            <input :id="id" :value="returnYear" class="form-control mt-2"
                   type="text" placeholder="Select Date.."
                   @change="updateCalendarInputValue()">
        </div>
    </div>
</template>

<script>
  import * as $ from 'jquery';
  import flatpickr from "flatpickr";
  export default {
    props: {
      timeFormat: String,
      id: String,
      fontSize: String
    },
    data(){
      return {
        calendarYear: 'today',
      }
    },
    mounted() {
      console.warn(this.timeFormat);
      console.warn(this.id);
      flatpickr(`#${this.id}`, { enableTime: false, dateFormat: this.timeFormat});
    },
    methods: {
      updateCalendarInputValue: function() {
        // this.calendarYear = event.target.value.split('-')[0];
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
