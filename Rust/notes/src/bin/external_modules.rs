// External Modules
//
// Allow code to compartmentalized

// External Modules:
//  Can have any name
//  hierarchical organization
//  private by default
//  external can be a:
//      directrory
//      file

// Standard project directory structure:
// - bin : contains the binaries of the application
// - lib : contains the libaraies (external mods, crates, etc)
//      - lib_name
//           - sublib_1/
//           - sublib_1.rs
//           - sublib_2/
//           - sublib_2.rs
//      - lib_name.rs
//      - mod.rs
//      - other_lib.rs

// mod.rs - will tell rust what the modules are. It will look for the rust file in the same
// directory.
// pub mod lib_name.rs
// pub mod other_lib.rs

// lib_name.rs will contain:
// pub mod sublib_1;
// pub mod sublib_2;

// We also have to update the Cargo.toml to let it know that it's a lib directrory:
// [lib]
// name = "demo"
// path = "src/lib/mod.rs"

// You can assign aliases to modules:
use crate::test as tst;

fn main() {}
