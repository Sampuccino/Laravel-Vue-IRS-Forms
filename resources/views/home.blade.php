@extends('layouts.app')

@section('content')
<div class="container">
    <select-form-template :type_8974="'{{ asset('FORM_8974.png') }}'"
                          :type_941="'{{ asset('img/Form_941.png') }}'"
                          :type_941_url="'{{ asset('forms/FORM_941.pdf') }}'"
                          :type_941s_url="'{{ asset('forms/f941sb.pdf') }}'"
                          :type_941s="'{{ asset('img/941S.png') }}'"
                          :type_941x_url="'{{ asset('forms/form 941X.pdf') }}'"
                          :type_941x="'{{ asset('img/Form941X.png') }}'"
                          :type_6765="'{{ asset('img/form_6765.png') }}'"
                          :type_6765_url="'{{ asset('forms/form_6765.pdf') }}'"
                          :type_3523="'{{ asset('img/form_3523.png') }}'"
                          :type_3523_url="'{{ asset('forms/Form_3523.pdf') }}'"/>
</div>
@endsection
