import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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

// user expenses type
export interface ExpenseItemType {
    year: number;
    month: string;
    salary: number;
    credit: number;
    house: number;
    debt: number;
    saving: number;
    balance: number;
}

// generate user expenses
function generateExpensesData(): ExpenseItemType[] {
    const data: ExpenseItemType[] = [];
    const startYear = 2024;
    const endYear = 2025;

    for (let year = startYear; year <= endYear; year++) {
        const startMonth = 0;
        const endMonth = 12;

        for (let month = startMonth; month < endMonth; month++) {
            const monthNames = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ];
            data.push({
                year,
                month: monthNames[month],
                salary: 0,
                credit: 0,
                house: 0,
                debt: 0,
                saving: 0,
                balance: 0,
            });
        }
    }

    return data;
}

// sunny expenses
export const sunnyExpensesState = atom<ExpenseItemType[]>({
    key: 'sunny_expenses_state',
    default: generateExpensesData(),
    effects_UNSTABLE: [persistAtom],
});

// ryan expenses
export const ryanExpensesState = atom<ExpenseItemType[]>({
    key: 'ryan_expenses_state',
    default: generateExpensesData(),
    effects_UNSTABLE: [persistAtom],
});
