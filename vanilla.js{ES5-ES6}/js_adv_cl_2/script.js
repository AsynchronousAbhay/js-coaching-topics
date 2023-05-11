// creation of promise...
let promise = new Promise((resolve, reject) => {
    let a = 23;
    setTimeout(() => {
        if (a % 2 === 0) {
            resolve("Number is even");
        } else {
            reject("Number is odd");
        }
    }, 2000);
});
// usecase of promise
// promise
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// console.log("hello");

async function runtask() {
    try {
        let res = await promise;
        console.log(res);
    } catch (error) {
        console.log("ERR ->>>", error);
    }

    // .then((response) => console.log(response))
    // .catch((error) => console.log(error));
    console.log("hello");
}

runtask();

// try {
//     let a = 12;
//     let b = 0;
//     let calc = a / b;
//     if (calc === Infinity) {
//         throw Error("Can not divide by zero.");
//     }
// } catch (err) {
//     console.log("ERR NAME ->>", err.name);
//     console.log("ERR MESSAGE ->>", err.message);
// } finally {
//     console.log("Mein toh chlunga he bhencho...");
// }
// console.log("Hello");
