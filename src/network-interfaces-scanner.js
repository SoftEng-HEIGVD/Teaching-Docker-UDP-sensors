var os = require("os");

networkInterfaces = os.networkInterfaces();

let i=0;
for (var itf in networkInterfaces) {
	i++;
	console.log("Network Interface: " + itf + ", " + networkInterfaces[itf]);

	for (let addressIndex in networkInterfaces[itf]) {
		let address = networkInterfaces[itf][addressIndex];
		console.log(" address: " + address.family + " -> " + address.address + ", internal:" + address.internal);
	}
	
}
