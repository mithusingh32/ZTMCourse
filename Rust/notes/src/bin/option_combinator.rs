// Option Combinator
// There are tons functions that are available to Option
fn main() {
    let a: Option<i32> = Some(1);
    dbg!(a);

    let a_is_some = a.is_some(); // determine if Option has data
    dbg!(a_is_some);

    let a_is_none = a.is_none(); // determines if Option has no data
    dbg!(a_is_none);

    let a_mapped = a.map(|num| num + 1);
    dbg!(a_mapped);

    let a_filter = a.filter(|num| num == &1); // Filters the data. It borrows the value. The return
                                              // value if the filter fails is None

    dbg!(a_filter);

    let a_or_else = a.or_else(|| Some(2)); // If a has data, then the closure does not run.
                                           // If a does not have data then the closure will run. This still returns Option

    dbg!(a_or_else);

    let a_unwrap_else = a.unwrap_or_else(|| 0); // Same as or else, except it will return the data
                                                // instead of the Option
    dbg!(a_unwrap_else);
}
