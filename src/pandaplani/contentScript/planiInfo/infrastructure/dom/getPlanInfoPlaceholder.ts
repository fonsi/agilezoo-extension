const PLAN_INFO_PLACEHOLDER_SELECTOR = '#content';

export const getPlanInfoPlaceholder = (container: HTMLElement): HTMLElement =>
    container.querySelector(PLAN_INFO_PLACEHOLDER_SELECTOR);