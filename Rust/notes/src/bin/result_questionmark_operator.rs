// Result and the ? Operator
// unwraps valid values or returns erroneous values, propagating them to the calling function
//
// So basically it stream lines the you calls, instead of constantly doing match you can use the
// ? operator to tell rust, unwraps the sucess case, otherwise return the error

// The ? can only be used by a function that returns Restult Option,
use std::num::ParseIntError;

fn parse_num() -> Result<i32, ParseIntError> {
    let ans = "42".parse::<i32>()?;
    // ans will be 42;
    "test".parse::<i32>()?; // this will turn an error
}

fn main() {}
