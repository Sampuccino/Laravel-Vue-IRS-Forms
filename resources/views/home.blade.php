@extends('layouts.app')

@section('content')
<div class="container">
    <select-form-template :type_8974="'{{ asset('FORM_8974.png') }}'"></select-form-template>
</div>


{{--                    <modify-document></modify-document>--}}

@endsection
<script>
  import SelectFormTemplate from "../js/components/SelectFormTemplate";
  export default {
    components: {SelectFormTemplate}
  }
</script>
