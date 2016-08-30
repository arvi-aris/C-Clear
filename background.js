chrome.browserAction.onClicked.addListener(function(tab) {
   Execute(refreshTab);
});

var refreshTab = function() {
    chrome.tabs.query({ active: true }, function(arrayOfTabs) {
        chrome.tabs.reload(arrayOfTabs[0].id);
    });
};

var Execute = function(callback) {
    var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7 * 30;
    var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;
    chrome.browsingData.remove({
        "since": oneWeekAgo,
    }, {
        "appcache": true,
        "cache": true,
        "cookies": true,
        "downloads": false,
        "fileSystems": false,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": false,
        "serverBoundCertificates": false,
        "pluginData": true,
        "passwords": false,
        "webSQL": true
    });
    callback();
};
