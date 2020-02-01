@extends('layouts.app')

@section('content')
<div class="container">
    <select-form-template :type_8974="'{{ asset('FORM_8974.png') }}'"
                          :type_941="'{{ asset('img/Form_941.png') }}'"
                          :type_941_url="'{{ asset('forms/FORM_941.pdf') }}'"
                          :type_941s="'{{ asset('img/941S.png') }}'"/>
</div>
@endsection
