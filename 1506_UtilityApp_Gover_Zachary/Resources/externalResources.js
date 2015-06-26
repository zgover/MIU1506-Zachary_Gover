var listingData = {
	"Listings":{
		"Vehicle Listings":[
			{
				"make": "GMC",
				"model": "Pickup/C2500",
				"year": "1971",
				"mileage": "180,000",
				"engine": "Chevy 350 Small Block/V8",
				"transmission": "4 Speed/Manual",
				"fuelMileage": "12-15mpg",
				"color": "Blue",
				"bedType": "long",
				"driveType": "2WD",
				"condition": "Used",
				"cab": "Single",
				"price": "2,340",
				"description": "This 1971 GMC Pickup is a great truck and will get you where you need to go. There is dual barrel carburetor in it, so it does need an upgrade if you want to put your foot to the floor and show it off. The pickup does have some rust in the floorboard and minor rust in the rocker panel. Great truck for a fix’r upper just needs a little bit of tlc (Tender Love and Care).",
				"completedWork": "This old pickup has had some modifications already done to it; which are new wheels and tires, bucket seats, Edlebrock tall-boy valve covers, Kenwood stereo deck, water pump, Les Schwab battery, alternator, windshield, resealed cab, new window and door handles.",
				"history": "No documented records of any collisions or major repairs.",
				"image": "Untitled.png"
			},
			{
				"make": "Dodge",
				"model": "Ram/2500HD",
				"year": "1998",
				"mileage": "128,000",
				"engine": "5.7L Hemi",
				"transmission": "Automatic",
				"fuelMileage": "16-20mpg",
				"color": "Maroon",
				"bedType": "Short",
				"driveType": "4WD",
				"condition": "Used",
				"cab": "2-Door/Extended",
				"price": "12,000",
				"description": "This good-looking dodge has a 4-inch lift with 33in tires. Power windows and locks no issues present, and a great running truck. Great vehicle for a young cowboy who needs to tow or just get around.",
				"completedWork": "None.",
				"history": "This vehicle has only been in one wreck, although luckily the owner had full coverage insurance and had all the damage replaced. The damage was in the front end with the bumper and grill.",
				"image": "Untitled1.png"
			},
			{
				"make": "Chevy",
				"model": "Silverado",
				"year": "1985",
				"mileage": "169,000",
				"engine": "Chevy 305/Small BLock",
				"transmission": "4-Speed Manual/Muncie",
				"fuelMileage": "8-12mpg",
				"color": "Maroon/White",
				"bedType": "Short",
				"driveType": "4WD",
				"condition": "Used",
				"cab": "Single",
				"price": "3,000",
				"description": "This 1985 Chevy pickup has been kept in really nice condition and has never seen a crack in the dash. Wheel and tires have been replaced and upgraded this last year and paint has been touched up due to minor scratches.",
				"completedWork": "Paint, Wheels and Tires, Seat Leather, Upgraded steering wheel, multiple after market parts on motor and 4 barrel carburetor.",
				"history": "Small 'bumper dings' have been personally recorded by previous owner and were fixed immediately, no rust present or underneath paint.",
				"image": "Untitled2.png"
			},
			{
				"make": "Toyota",
				"model": "Pickup",
				"year": "1987",
				"mileage": "160,000",
				"engine": "22R",
				"transmission": "5-Speed Manual",
				"fuelMileage": "16-20mpg",
				"color": "Blue",
				"bedType": "Short",
				"driveType": "4WD",
				"condition": "Used",
				"cab": "Single",
				"price": "4,500",
				"description": "This 1987 Toyota pickup has been kept in factory condition, except for lift and tires. Paint is still factory, and the windows have been tinted, great for a commute or a rally truck.",
				"completedWork": "Wheels and tires, tinted windows and CB radio.",
				"history": "This Toyota pickup has never been wrecked although previous owner ran into tree and we had fixed the only damage, which was in the bumper.",
				"image": "Untitled3.png"
			},
			{
				"make": "Ford",
				"model": "F-250",
				"year": "1980",
				"mileage": "145,000",
				"engine": "460 CID V8",
				"transmission": "Automatic",
				"fuelMileage": "16-20mpg",
				"color": "Red/Grey",
				"bedType": "long",
				"driveType": "2WD",
				"condition": "Used",
				"cab": "Single",
				"price": "900",
				"description": "This 1980 Pickup is a great fit for a city boy who just needs to get to school and back. Does need some work as well as new tires and rips are present in the seats. Motor breaks down on medium distant trips.",
				"completedWork": "New Carburetor, dashboard, driveshaft, and transmission had gone out twice. The motor has been replaced once due to previous owner pushing a rod through side of the block.",
				"history": "This vehicle has not reported incidents and although has dents and scratches.",
				"image": "Untitled4.png"
			}
		]
	}
};

// Function to create and open a new window in the navigation for full detail of the JSON object.
var showDescription = function(dataSource){
	var descriptionWindow = Ti.UI.createWindow ({
		title: dataSource.title,
		backgroundColor: "fff"
	});
	var scrollView = Ti.UI.createScrollView ({
		showVerticalScrollIndicator: true,
		width: "100%", height: "95%"
	});
	var contentWindow = Ti.UI.createView ({
		left: 15, right: 15,
		layout: "Vertical"
	});
	if (dataSource.image) {
		var listingImage = Ti.UI.createImageView ({
			image: "Images/" + dataSource.image,
			left: 0, right: 0,
			top: 15
		});
	}
	var descriptionText = Ti.UI.createLabel ({
		text: "Make: " + dataSource.make + "\n" + 
			  "Model: " + dataSource.model + "\n" +
			  "Year: " + dataSource.year + "\n" +
			  "Mileage: " + dataSource.mileage + "\n" +
			  "Engine: " + dataSource.engine + "\n" +
			  "Transmission: " + dataSource.transmission + "\n" +
			  "Fuel Mileage: " + dataSource.fuelMileage + "\n" +
			  "Color: " + dataSource.color + "\n" +
			  "Bed Type: " + dataSource.bedType + "\n" +
			  "Drive Type: " + dataSource.driveType + "\n" +
			  "Condition: " + dataSource.condition + "\n" +
			  "Cab: " + dataSource.cab + "\n" +
			  "Price: " + dataSource.price + "\n\n" +
			  "Description: \n" + dataSource.listingDescription + "\n\n" +
			  "Completed Work: \n" + dataSource.completedWork + "\n\n" +
			  "History: \n" + dataSource.history,
		left: 0, top: 10,
		color: "333",
		font: {fontSize: "16", fontFamily: "Arial"}
	});
	
	contentWindow.add(listingImage,descriptionText);
	scrollView.add(contentWindow);
	descriptionWindow.add(scrollView);
	navWindow.openWindow(descriptionWindow);
};

// Looping to iterate through the JSON data and append it's value to the row.
var listingSections = [];
for (var n in listingData){
	// Custom Header
	var customHeader = Ti.UI.createView ({
		height: 40
	});
	var chText = Ti.UI.createLabel ({
		text: n,
		left: 10,
		font: {fontWeight: "bold"}
	});
	customHeader.add(chText);
	
	// Custom Footer
	var customFooter = Ti.UI.createView ({
		height: 30
	});
	var cfText = Ti.UI.createLabel ({
		text: "All listings provided by Zachary",
		left: 10,
		font: {fontSize: 13},
		color: 333
	});
	customFooter.add(cfText);
	
	// Create Section and rows
	var currentSection = Ti.UI.createTableViewSection ({
		headerView: customHeader,
		footerView: customFooter
	});
	for(var item in listingData[n]){
		for (var i = 0; i<listingData[n][item].length; i++){
			var currentRow = Ti.UI.createTableViewRow ({
				title: listingData[n][item][i].make + " " + listingData[n][item][i].model,
				make: listingData[n][item][i].make,
				model: listingData[n][item][i].model,
				year: listingData[n][item][i].year,
				mileage: listingData[n][item][i].mileage,
				engine: listingData[n][item][i].engine,
				transmission: listingData[n][item][i].transmission,
				fuelMileage: listingData[n][item][i].fuelMileage,
				bedType: listingData[n][item][i].bedType,
				driveType: listingData[n][item][i].driveType,
				condition: listingData[n][item][i].condition,
				cab: listingData[n][item][i].cab,
				price: listingData[n][item][i].price,
				listingDescription: listingData[n][item][i].description,
				completedWork: listingData[n][item][i].completedWork,
				history: listingData[n][item][i].history,
				image: listingData[n][item][i].image,
				hasChild: true
			});
			currentSection.add(currentRow);
		}
	}
	listingSections.push(currentSection);
}

listings.setData(listingSections);
listings.addEventListener("click", function(event){
	showDescription(event.source);
});

// Login from event listener and function to check if username and password are correct then open window.
loginBtn.addEventListener("click", function(){
	var passUser = "test";
	if (loginInput.value == passUser  && passwordInput.value == passUser) {
		navWindow.open();
	} else {
		alert("Incorrect Username or Password! \n Please try again!");
	}
});

// Create a new entry
newBtn.addEventListener("click", function(){
	
	// Create the new window for the user to input entry details
	var newEntryWin = Ti.UI.createWindow ({
		backgroundColor: "#E6E6E6",
		layout: "vertical"
	});
	
	// Fake navigation header
	var header = Ti.UI.createView ({
		top: 0, left: 0, right: 0,
		height: 60
	});
	
	var headerTitle = Ti.UI.createLabel ({
		text: "New Entry",
		top: 20, height: 40,
		color: "#000000"
	});
	
	var headerBorder = Ti.UI.createView ({
		backgroundColor: "#CFCFCF",
		height: 1
	});
	
	// Add cancel button to cancel the entry
	var cancelBtn = Ti.UI.createLabel ({
		text: "Cancel",
		top: 20, left: 5, height: 40,
		color: "#0099FF"
	});
	header.add(headerTitle, cancelBtn);
	
	var entryScrollView = Ti.UI.createScrollView ({
		layout: "vertical",
		width: "100%",
		height: "90%",
		contentWidth: "100%",
		showVerticalScrollIndicator: true
	});
	
	// Create Form Entry's
	var topMargin = 20;
	var inputBG = "#FFFFFF";
	var inputBorder =  "#a6a6a6";
	
	var make = Ti.UI.createTextField ({
		hintText: "Make",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var make = Ti.UI.createTextField ({
		hintText: "Make",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var model = Ti.UI.createTextField ({
		hintText: "Model",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var year = Ti.UI.createTextField ({
		hintText: "Year",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var mileage = Ti.UI.createTextField ({
		hintText: "Mileage",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var engine = Ti.UI.createTextField ({
		hintText: "Engine",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var transmission = Ti.UI.createTextField ({
		hintText: "Transmission",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var fuelMileage = Ti.UI.createTextField ({
		hintText: "Fuel Mileage",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	var color = Ti.UI.createTextField ({
		hintText: "Color",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	var bedType = Ti.UI.createTextField ({
		hintText: "Bed Type",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var driveType = Ti.UI.createTextField ({
		hintText: "Drive Type",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var condition = Ti.UI.createTextField ({
		hintText: "Condition",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var cab = Ti.UI.createTextField ({
		hintText: "Cab",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var price = Ti.UI.createTextField ({
		hintText: "Price e.g. 500",
		left: "10%", right: "10%", height: 40,
		top: topMargin,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder
	});
	
	var descriptionLabel = Ti.UI.createLabel ({
		text: "Description:",
		top: topMargin,
		left: "10%"
	});
	
	var description = Ti.UI.createTextArea ({
		hintText: "Description",
		left: "10%", right: "10%", height: 100,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder,
		font: {
			fontSize: 14
		}
	});
	
	var completedLabel = Ti.UI.createLabel ({
		text: "Completed Work:",
		top: topMargin,
		left: "10%"
	});
	
	var completedWork = Ti.UI.createTextArea ({
		hintText: "Completed Work",
		left: "10%", right: "10%", height: 100,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder,
		font: {
			fontSize: 14
		}
	});
	
	var historyLabel = Ti.UI.createLabel ({
		text: "History:",
		top: topMargin,
		left: "10%"
	});
	
	var history = Ti.UI.createTextArea ({
		hintText: "History",
		left: "10%", right: "10%", height: 100,
		paddingLeft: 15,
		backgroundColor: inputBG,
		borderColor: inputBorder,
		font: {
			fontSize: 14
		}
	});
	
	var submitEntryBtn = Ti.UI.createView ({
		left: "10%", right: "10%", height: 40, top: 20,
		backgroundColor: "#333333",
	});
	
	submitEntryText = Ti.UI.createLabel ({
		text: "Done",
		height: 40,
		color: "#CFCFCF"
	});
	submitEntryBtn.add(submitEntryText);
	
	submitEntryBtn.addEventListener("click", function(){
		if (make.value != "" && model.value != "" && year.value != "" && mileage.value != "" && engine.value != "" && transmission.value != "" && fuelMileage.value != "" && color.value != "" && bedType.value != "" && driveType.value != "" && condition.value != "" && cab.value != "" && price.value != "" && description.value != "" && completedWork.value != "" && history.value != "") {
			// Create the new row 
			var newRow = Ti.UI.createTableViewRow ({
				title: make.value + " " + model.value,
				make: make.value,
				model: model.value,
				year: year.value,
				mileage: mileage.value,
				engine: engine.value,
				transmission: transmission.value,
				fuelMileage: fuelMileage.value,
				color: color.value,
				bedType: bedType.value,
				driveType: driveType.value,
				condition: condition.value,
				cab: cab.value,
				price: price.value,
				listingDescription: description.value,
				completedWork: completedWork.value,
				history: history.value,
				hasChild: true
			});
			listings.data[0].add(newRow);
			
			var temp = listings.data;
			listings.setData(temp);
			
			alert("Success!");
			newEntryWin.close();
		} else {
			alert("Please fill in all of the fields");
		}
	});
	
	// Create event listener for the cancel button to close the current new entry window.
	cancelBtn.addEventListener("click", function(){
		newEntryWin.close();
	});
	
	entryScrollView.add(make, model, year, mileage, engine, transmission, fuelMileage, color, bedType, driveType, condition, cab, price, descriptionLabel, description, completedLabel, completedWork, historyLabel, history, submitEntryBtn);
	newEntryWin.add(header, headerBorder, entryScrollView);
	newEntryWin.open();
});



