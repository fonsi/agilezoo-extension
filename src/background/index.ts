const init = () => {
    chrome.runtime.onInstalled.addListener(() => {
        console.log('PandaPlani background!');
    });
}

init();