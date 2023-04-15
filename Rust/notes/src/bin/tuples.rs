// A tuple is a collection of values of different types. 
// Tuples are constructed using parentheses (), and each 
// tuple itself is a value with type signature (T1, T2, ...), where T1, T2 are the types of its members

fn reverse(tup: (i32, bool)) ->  (bool, i32) {
    let (first, second) = tup; // Destructuring is the process of breaking down items into their component parts, binding each to smaller variables.
    (second, first)
}

fn main() {
    let tup = (1, true);
    let reversed = reverse(tup);
    println!("Tup: {:?}", tup);
    println!("Reversed: {:?}", reversed);
}
