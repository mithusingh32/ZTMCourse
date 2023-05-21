// Testing

fn all_caps(word: &str) -> String {
    word.to_uppercase()
}

fn main() {}

// to create a test we need to use a macro:
// #[cfg(test)]
#[cfg(test)] // tells rust that this should only be used in testing
mod test {
    use crate::all_caps; // need to bring in the all caps function into the tes mod

    #[test]
    fn test_all_caps() {
        let execpted = "HELLO";
        let actual = all_caps("hello");
        assert_eq!(actual, execpted);
    }
}

// To run the test you need to run `cargo test`
