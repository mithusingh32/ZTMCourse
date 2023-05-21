// extern crates are added by telling the compiler to get them
// they are added in the [dependencies] tag in the Cargo.toml
use humantime::format_duration;
use std::time::Duration;

fn main() {
    let d = Duration::from_secs(300);
    println!("{}", format_duration(d))
}
