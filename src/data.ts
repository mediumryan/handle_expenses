import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

class ExpenseItem {
    year: number;
    month: string;
    salary: number;
    credit: number;
    house: number;
    debt: number;
    saving: number;
    balance: number;

    constructor(year: number, month: string) {
        this.year = year;
        this.month = month;
        this.salary = 0;
        this.credit = 0;
        this.house = 0;
        this.debt = 0;
        this.saving = 0;
        this.balance = 0;
    }
}

function generateExpensesData(): ExpenseItem[] {
    const data: ExpenseItem[] = [];
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
            const expenseItem = new ExpenseItem(year, monthNames[month]);
            data.push(expenseItem);
        }
    }

    return data;
}

export const sunnyExpensesState = atom<ExpenseItem[]>({
    key: 'sunny_expenses_state',
    default: generateExpensesData(),
    effects_UNSTABLE: [persistAtom],
});

export const ryanExpensesState = atom<ExpenseItem[]>({
    key: 'ryan_expenses_state',
    default: generateExpensesData(),
    effects_UNSTABLE: [persistAtom],
});
