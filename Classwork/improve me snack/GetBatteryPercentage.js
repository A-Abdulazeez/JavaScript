function getBatteryPercentage(phone){
    return phone.battery
};

const phone = {brand: "Samsung",battery: 75};

const batteryPercentage = getBatteryPercentage(phone);
console.log(`Battery Percentage: ${batteryPercentage}%`);