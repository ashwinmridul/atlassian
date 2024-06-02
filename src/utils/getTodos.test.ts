import getTodos from './getTodos';
import axios from 'axios';

jest.mock('axios');

describe('getTodos', () => {
  it('should return an object with a todos array', async () => {
    const response = { data: { todos: [{ id: 1, title: 'Todo 1' }] } };
    (axios.get as jest.Mock).mockResolvedValue(response);

    const result = await getTodos();
    expect(result).toEqual({ todos: [{ id: 1, title: 'Todo 1' }] });
  });

  it('should catch and log errors', async () => {
    const error = new Error('Network error');
    (axios.get as jest.Mock).mockRejectedValue(error);

    console.error = jest.fn();

    await getTodos();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(error);
  });

  it('should return undefined if response data is null', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: null });

    const result = await getTodos();
    expect(result).toBeNull();
  });
});