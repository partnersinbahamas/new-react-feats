export function mockServerSuccess(data: any, delay = 1000) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data,
        });
      }, delay);
    });
  }

export function mockServerError(message = "Server error", delay = 1000) {
  return new Promise((_, reject) => {
    setTimeout(() => {
    reject(new Error(message));
  }, delay)});
}
