// A type that contains multiple pieces of data
// All or nothing - every pieces data must be populated (aka - no optional fields)
struct ShippingBox {
    depth: i32,
    width: i32,
    height: i32,
}


fn main() {
    let my_box = ShippingBox {
        depth: 3,
        width: 2,
        height: 5
    }; // dont forget the semicolon

    // We can access individual variables by using the dot operator
    let tall = my_box.height;
    println!("The box is {}", tall);
}
