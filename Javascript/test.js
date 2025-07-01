function task1(cb){
    setTimeout(() => {
        console.log(`task1 completed`)
        cb()
    }, 2000);
}

function task2(cb) {
    setTimeout(() => {
        console.log(`task2 completed!`)
        cb()
    }, 1500);
}

function task3(cb){
    setTimeout(() => {
        console.log(`task3 completed!`)
        cb()
    }, 1700);
}

function task4(cb) {
    setTimeout(() => {
        console.log(`task4 completed`)
        cb();
    }, 2500);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(function(){
                console.log(`call back hell`)
            });
        })
    })
});
