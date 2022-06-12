export function throttle(fn, time) {
    let timer = null;
    return function perform(...args) {
      if (timer) return;
      timer = setTimeout(() => {
        fn(...args);
        clearTimeout(timer);
        timer = null;
      }, time);
    };
  }