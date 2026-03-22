export function mockServerSuccess(data, delay = 2000, signal) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve({ status: 200, data });
    }, delay);

    // Если сигнал сработает до истечения таймаута
    signal?.addEventListener("abort", () => {
      clearTimeout(timeout);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}
export function mockServerError(message = "Server error", delay = 2000) {
  return new Promise((_, reject) => {
    setTimeout(() => {
    reject(new Error(message));
  }, delay)});
}
