import { logAfterTimeout } from './';

describe('logAfterTimeout', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    console.log = jest.fn(); // mock console.log
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should log "Logged" after the specified timeout', () => {
    logAfterTimeout(1000);

    expect(console.log).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Logged');
  });

  it('should not log "Logged" before the specified timeout', () => {
    logAfterTimeout(1000);

    expect(console.log).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);

    expect(console.log).not.toHaveBeenCalled();
  });
});