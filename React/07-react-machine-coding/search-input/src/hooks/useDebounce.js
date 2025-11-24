const useDebounce = (cb, delay) => {

    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, delay)
    }
}

export default useDebounce
