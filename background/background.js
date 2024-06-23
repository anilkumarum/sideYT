const setInstallation = ({ reason }) => {
	chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error) => console.error(error));
};

// installation setup
chrome.runtime.onInstalled.addListener(setInstallation);
