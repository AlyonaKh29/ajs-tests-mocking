import { getLevel } from '../index';
import fetchData from '../http';

jest.mock('../http');

describe('getLevel', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
  
    test('if the status is ok', () => {
        fetchData.mockReturnValue({
            status: 'ok',
            level: 5,
        });
        const result = getLevel(7);
        expect(fetchData).toHaveBeenCalledWith('https://server/user/7');
        expect(result).toBe('Ваш текущий уровень: 5');
    });
  
    test('if the status is not ok', () => {
        fetchData.mockReturnValue({
        status: 'error',
        });
        const result = getLevel(8);
        expect(fetchData).toHaveBeenCalledWith('https://server/user/8');
        expect(result).toBe('Информация об уровне временно недоступна');
    });
});
