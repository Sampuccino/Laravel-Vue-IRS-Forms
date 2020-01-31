<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <link href="{{asset('css/app.css')}}" rel="stylesheet">
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="top-right links">
                <a href="{{ url('/home') }}">Start</a>
            </div>

            <div class="content">
                <div class="title m-b-md">
                    Interactive IRS Forms
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-6 my-auto">
                            <h4>How does it work</h4>
                            <p>Select any of our current IRS Forms to easily and interactively fill out your form and export to PDF format. It includes auto calculations, number formatting and easy to use.</p>

                            <h4 class="mt-3">How can I use it</h4>
                            <p>Simply select a form and you can start your form today!</p>
                        </div>
                        <div class="col-6">
                            <img src="{{asset('img/2356505.png')}}" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </body>
</html>
