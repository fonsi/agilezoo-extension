import { Observable } from 'rxjs';

const defaultConfig = { attributes: true, childList: true, characterData: true };

export const mutationObservable =
    (target: HTMLElement, config = defaultConfig): Observable<MutationRecord[]> => {
        const conf = {
            ...defaultConfig,
            ...config,
        };

        return new Observable((observer) => {
            const mutation = new MutationObserver(
                (mutations, instance) => {
                    observer.next(mutations);
                });
            mutation.observe(target, conf);
            const unsubscribe = () => {
                mutation.disconnect();
            };

            return unsubscribe;
        });
}
