export const logAfterTimeout = (timeout: number): void => {
    setTimeout(() => {
        console.log('Logged');
    }, timeout);
};