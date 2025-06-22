const p1 = new Promise((resolve, reject) => {
    let p = true;
    setTimeout(() => {
        if (p) resolve("promise 1 is resolve");
        else reject("rejected!");
    }, 2000);
});
const p2 = new Promise((resolve, reject) => {
    let p = false;
    setTimeout(() => {
        if (p) resolve("promise 2 is resolve");
        else reject("rejected!");
    }, 1000);
});
const p3 = new Promise((resolve, reject) => {
    let p = true;
    setTimeout(() => {
        if (p) resolve("promise 3 is resolve");
        else reject("rejected!");
    }, 1500);
});

Promise.all([p1, p2, p3])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => console.log(error));

Promise.race([p1, p2, p3])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => console.log(error));

Promise.allSettled([p1, p2, p3])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => console.log(error));
