// Topic: Testing
//
// Requirements:
// * Write tests for the existing program to ensure proper functionality.
//
// Notes:
// * Create at least two test cases for each function.
// * Use `cargo test` to test the program.
// * There are intentional bugs in the program that need to be fixed.
//   * Check the documentation comments for the functions to
//     determine how the they should operate.

/// Ensures n is >= lower and <= upper.
fn clamp(n: i32, lower: i32, upper: i32) -> i32 {
    if n < lower {
        lower
    } else if n > upper {
        upper
    } else {
        n
    }
}

/// Divides a and b.
fn div(a: i32, b: i32) -> Option<i32> {
    Some(a / b)
}

/// Takes two strings and places them immediately one after another.
fn concat(first: &str, second: &str) -> String {
    format!("{} {}", first, second)
}

fn main() {}

#[cfg(test)]
mod test {
    use crate::*;
    #[test]
    fn test_clamp_lower() {
        let lower = 5;
        let higher = 10;
        let expected = 5;
        let actual = clamp(2, lower, higher);
        assert_eq!(actual, expected);
    }

    #[test]
    fn test_clamp_higher() {
        let lower = 5;
        let higher = 10;
        let expected = 10;
        let actual = clamp(15, lower, higher);
        assert_eq!(actual, expected);
    }

    #[test]
    fn test_clamp_n() {
        let lower = 5;
        let higher = 10;
        let expected = 7;
        let actual = clamp(7, lower, higher);
        assert_eq!(actual, expected);
    }

    #[test]
    fn test_div_some() {
        let a = 10;
        let b = 5;
        let expected = 2;
        let actual = div(a, b).unwrap();
        assert_eq!(actual, expected);
    }

    #[test]
    fn test_concat_1() {
        let expected = "Hello World".to_owned();
        let actual = concat("Hello", "World");
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_concat_2() {
        let expected = "Hello World!".to_owned();
        let actual = concat("Hello", "World!");
        assert_eq!(expected, actual);
    }
}
