import { processSprintsOnLoaded } from './sprint/processSprintsOnLoaded';
import { initPlaniInfo } from './planiInfo/initPlaniInfo';

const initialize = async (container: HTMLElement): Promise<void> => {
    await processSprintsOnLoaded(container);
    initPlaniInfo(container);
}

initialize(document.body);