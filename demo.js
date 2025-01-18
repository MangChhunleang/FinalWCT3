'use strict';

try {
    // Replace 'Sok Dara' with your full name
    console.log('Student Name: Mang Chhunleang');
    let x = 10; // Declare 'x' with let or const to avoid ReferenceError
} catch (error) {
    console.error(error.message); // Output: "x is not defined"
}

function demo() {
    try {
        let y = 20; // Declare 'y' with let or const to avoid ReferenceError
    } catch (error) {
        console.error(error.message); // Output: "y is not defined"
    }
}

demo();

'use strict';

try {
    const obj = { z: 50 };
    eval('delete obj.z;'); // Correctly deletes the property 'z' from obj
    console.log(obj); // Output: {}
} catch (error) {
    console.error(error.message);
}
