import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

afterEach(() => {
  jest.resetAllMocks();
});

test('read once', async () => {
  read.mockImplementation(() => jest.requireActual('../reader').default());
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const game = await GameSavingLoader.load();
  expect(read).toHaveBeenCalledTimes(1);
  expect(game).toEqual(data);
});

test(' return error', async () => {
  const response = new Error('Что-то пошло не так...');
  read.mockImplementation(() => Promise.reject(response));
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e).toBe(response);
  }
});
