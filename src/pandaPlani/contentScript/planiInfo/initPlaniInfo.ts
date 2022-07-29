import { addPlaniInfo } from './infrastructure/dom/addPlaniInfo';
import { getPlanInfoPlaceholder } from './infrastructure/dom/getPlanInfoPlaceholder';

export const initPlaniInfo = (container: HTMLElement): void => {
    const planInfoPlaceholder = getPlanInfoPlaceholder(container);
    addPlaniInfo(planInfoPlaceholder);
}