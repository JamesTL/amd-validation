// Define the module.
define(
    [
        /* Any dependencies? Leave empty if none */
    ],

    function(){
        'use strict';

     var  valid_email_regex= /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
        valid_credit_card_regex;


        // Constructor

        function Validation(){
            //

        }

        // Define the class methods.
        Validation.prototype = {

            is_empty_string : function(str){

                 return str.length === 0 ;

            },

            test_regex : function(str,reg){

                 return  reg.test(str);

            },

            string_length_match: function(str, len){

                 return str.length === len ;
            }

       };



        // Return the module constructor.
        return( Validation );

        // -------------------------------------------------- //


    }
);