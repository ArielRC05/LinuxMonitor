const settings = require('./config/settings');
const getCpuData = require('./monitors/cpu')

function testColor(num){
    if (num < settings.thresholdsColor.low.value) {
        console.log(settings.thresholdsColor.low.color)
    }
}



async function main(){
    const cpuData = await getCpuData();

    console.log(cpuData);
}

main();
console.log(settings.app.name);
console.log(settings.app.version);
console.log(15, testColor(15))
