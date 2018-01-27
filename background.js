// this is the background code...

// listen for our browerAction to be clicked
chrome.tabs.onCreated.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.id, {
		file: 'script.js'
	});
});