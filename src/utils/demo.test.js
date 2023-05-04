import { fetchData, timerCallBack } from "./demo";
// test("测试异步", async () => {
//   await expect(fetchData()).resolves.toMatchObject({ success: true });
// });

jest.useFakeTimers();
it("测试时间 timerCallBack", async () => {
  const func = jest.fn();
  timerCallBack(func);
  jest.advanceTimersByTime(3000);
  expect(func).toHaveBeenCalledTimes(1);
});

it("测试mock函数", async () => {
  const fn = jest.fn();
  fn();
  expect(fn).toHaveBeenCalled();

  const mockFn = jest.fn((scalar) => 42 + scalar);
  expect(mockFn(1)).toBe(43);
  mockFn.mockImplementation((scalar) => 36 + scalar);
  expect(mockFn(1)).toBe(37);

  const asyncMock = jest.fn().mockResolvedValue(43);
  expect(await asyncMock()).toBe(43);

  // 创建一个类似于jest.fn的mock函数，但也跟踪对对象[methodName]的调用。返回一个Jest模拟函数。
  // jest.spyOn(object, methodName)
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  const isPlaying = video.play();
  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);
});
