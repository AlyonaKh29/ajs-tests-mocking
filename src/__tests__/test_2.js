import fetchData from '../http';

describe('fetchData', () => {
  test('exception from fetchData', () => {
    /*Без этого теста нет полного покрытия кода в code coverage */
    expect(() => {
      fetchData('https://server/user/6');
    }).toThrow('Mock this!');
  });
});
