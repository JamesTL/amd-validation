// Define the module.
define(
    [
        /* No dependencies. */
    ],
    function(){
        'use strict';

        // Constructor

        function Validation(){
            //

        }

        // Define the class methods.
        Validation.prototype = {

            is_empty_string : function(str){


                return str.length == 0 ? true : false;
            },

            test_regex : function(str,reg){
                console.log("here");

                     return  reg.test(str) ? true : false ;

            },

            string_length_match: function(str, len){

                return str.length === len ? true:false;
            }

       };


        // -------------------------------------------------- //
        // -------------------------------------------------- //


        // Return the module constructor.
        return( Validation );


    }
);