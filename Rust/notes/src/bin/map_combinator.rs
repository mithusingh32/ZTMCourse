// Map Combinators - Option has a built in method called map(), a combinator
// for the simple mapping of Some -> Some and None -> None.
// Multiple map() calls can be chained together for even more flexibility.

// Similar to callback function in javascript
//     However, unlike callbacks, combinators always return an Option. What this means is
//     that we can manipulate the data easily
fn some_func_that_returns_option(num: i32) -> Option<i32> {
    if true {
        Some(num)
    } else {
        None
    }
}

fn main() {
    let long_a = match some_func_that_returns_option(2) {
        Some(num) => Some(num + 1),
        None => None,
    };

    // This repalces the match statment above
    let a = some_func_that_returns_option(20).map(|num| num + 1); // a = 21

    // Both still return options
    println!("long_a = {:?}", long_a);
    println!("a = {:?}", a);
}
