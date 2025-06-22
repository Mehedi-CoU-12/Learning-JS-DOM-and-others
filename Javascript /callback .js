//call back hell
function task1(callback) {
    setTimeout(() => {
        console.log("tasks 1 completed!");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("tasks 2 completed!");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("tasks 3 completed!");
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("tasks 4 completed!");
        callback();
    }, 1500);
}

function task5(callback) {
    setTimeout(() => {
        console.log("tasks 5 completed!");
        callback();
    }, 1700);
}
//here this is callback hell. also known as pyramid of dooms
task1(() => {
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    console.log('all tasks completed!')
                })
            })
        })
    })
});

