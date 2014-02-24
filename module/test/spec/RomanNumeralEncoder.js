/**
 * Created by jameslove on 24/02/2014.
 */
// Load the RomanNumeralEncoder and describe tests.
    define(
    [
        "model/romanNumeralEncoder"
    ],
    function( RomanNumeralEncoder ){


        // Describe the test suite for this module.
        describe(
            "The RomanNumeralEncoder encodes and decodes decimal values.",
            function(){


                // Create our test module.
                var encoder = new RomanNumeralEncoder();

                // Test the encoding of decimal values into roman
                // numeral strings.
                it(
                    "should encode decimal values",
                    function(){

                        expect( encoder.encode( 1 ) ).toBe( "I" );
                        expect( encoder.encode( 2 ) ).toBe( "II" );
                        expect( encoder.encode( 3 ) ).toBe( "III" );
                        expect( encoder.encode( 4 ) ).toBe( "IV" );
                        expect( encoder.encode( 5 ) ).toBe( "V" );
                        expect( encoder.encode( 6 ) ).toBe( "VI" );
                        expect( encoder.encode( 7 ) ).toBe( "VII" );
                        expect( encoder.encode( 8 ) ).toBe( "VIII" );
                        expect( encoder.encode( 9 ) ).toBe( "IX" );
                        expect( encoder.encode( 10 ) ).toBe( "X" );

                    }
                );

                // Test the decoding of roman numeral strings into
                // decimal values.
                it(
                    "should decode roman numeral values",
                    function(){

                        expect( encoder.decode( "I" ) ).toBe( 1 );
                        expect( encoder.decode( "II" ) ).toBe( 2 );
                        expect( encoder.decode( "III" ) ).toBe( 3 );
                        expect( encoder.decode( "IV" ) ).toBe( 4 );
                        expect( encoder.decode( "V" ) ).toBe( 5 );
                        expect( encoder.decode( "VI" ) ).toBe( 6 );
                        expect( encoder.decode( "VII" ) ).toBe( 7 );
                        expect( encoder.decode( "VIII" ) ).toBe( 8 );
                        expect( encoder.decode( "IX" ) ).toBe( 9 );
                        expect( encoder.decode( "X" ) ).toBe( 10 );

                    }
                );


            }
        );


    }
);