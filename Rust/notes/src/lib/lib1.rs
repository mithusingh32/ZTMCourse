pub mod sub_lib_1;

// you can also re-export deeply nested modules
pub use sub_lib_1::stuff; // now this module is at the same namesapce as lib1.rs
