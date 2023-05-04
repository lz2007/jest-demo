export function fetchData() {
  return new Promise((resolve) => {
    resolve({ success: true });
  });
}

export function timerCallBack(fn) {
  setTimeout(() => {
    fn();
  }, 3000);
}
