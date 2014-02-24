/**
 * Created by jameslove on 24/02/2014.
 */
// Load the validation code and describe tests.
    define(
    [
        "model/validation"
    ],
    function( Validation ){




        // Describe the test suite for this module.
        describe(
            "The validation modules provides miscellaneous validation functions for content.",
            function(){


                // Create our test module.
                var myValidator = new Validation();

                // is_empty_string -  test id string is empty
                it(
                    " is_empty_string() - should return true if empty string",
                    function(){

                        expect( myValidator.is_empty_string("herer")).toBe(false);
                        expect( myValidator.is_empty_string("")).toBe(true);
                        expect( myValidator.is_empty_string("e ")).toBe(false);
                        expect( myValidator.is_empty_string(" e")).toBe(false);
                      }
                );


                //  -  test id string is empty
                it("test_regex() - should return true the regex is matched - false if not",
                    function(){
                        expect( myValidator.test_regex("abcdef", /a/)).toBe(true);
                        expect( myValidator.test_regex("abcdef", /h/)).toBe(false);
                        expect( myValidator.test_regex("the elazy", /h/)).toBe(true);
                     }
                );


                it("string_length_match() - if str.length == len return true ,else false",
                    function(){
                        expect( myValidator.string_length_match("four", 4)).toBe(true);
                        expect( myValidator.string_length_match("flour", 5)).toBe(true);
                        expect( myValidator.string_length_match("flourmill", 35)).not.toBe(true);
                        expect( myValidator.string_length_match("flourmill", 349)).toBe(false);
                        //empty string
                        expect( myValidator.string_length_match("", 0)).toBe(true);
                        //will matchwhitespace as a characters
                        expect( myValidator.string_length_match(" ", 1)).toBe(true);
                    }

                );



 }
        );


    }
);