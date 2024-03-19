import { atom } from 'recoil';

class MonthlyData {
    id: number;
    month: string;

    constructor(id: number, month: string) {
        this.id = id;
        this.month = month;
    }
}

export const yearState = atom({
    key: 'year_state',
    default: [
        new MonthlyData(0, 'Jan'),
        new MonthlyData(1, 'Feb'),
        new MonthlyData(2, 'Mar'),
        new MonthlyData(3, 'Apr'),
        new MonthlyData(4, 'May'),
        new MonthlyData(5, 'Jun'),
        new MonthlyData(6, 'Jul'),
        new MonthlyData(7, 'Aug'),
        new MonthlyData(8, 'Sep'),
        new MonthlyData(9, 'Oct'),
        new MonthlyData(10, 'Nov'),
        new MonthlyData(11, 'Dec'),
    ],
});
