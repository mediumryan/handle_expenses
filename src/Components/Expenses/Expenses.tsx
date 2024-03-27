import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { ryanExpensesState, sunnyExpensesState } from '../../data';

const ExpensesWrapper = styled.div`
    flex-basis: 50%;
    width: 50%;
    display: flex;
    justify-content: space-between;
    form {
        margin: 0.25rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        button {
            width: 35%;
            margin-top: 1rem;
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
            color: var(--white-200);
            background-color: var(--accent-200);
            border-radius: 4px;
            transition: 500ms background-color;
            &:hover {
                background-color: var(--accent-100);
            }
            @media only screen and (min-width: 320px) and (max-width: 768px) {
                align-self: center;
            }
        }
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            width: 90%;
            align-items: flex-start;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 75%;
        margin: 1rem 0;
        font-size: 1.25rem;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 90%;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const InputItems = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    label {
        min-width: 80px;
        text-align: right;
        margin-right: 0.5rem;
    }
    input {
        text-align: right;
        padding: 0.25rem;
        border-radius: 4px;
        &:focus {
            border-color: transparent;
            outline: 2px solid var(--accent-200);
        }
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            width: 200px;
        }
    }
`;

const Results = styled.div`
    flex-basis: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;
    border-radius: 10px;
    background-color: aliceblue;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 100%;
        margin: 2rem 0;
    }
`;

const ResultItems = styled.p`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid var(--accent-100);
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    p:first-child {
        min-width: 80px;
        margin-right: 0.5rem;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            margin: 0.5rem 0;
        }
    }
`;

interface ExpensesProps {
    year?: string;
    month?: string;
    userName: string;
}

interface RegisterValProps {
    salaryVal: string;
    creditVal: string;
    houseVal: string;
    debtVal: string;
    savingVal: string;
}

export default function Expenses(props: ExpensesProps) {
    const { year, month, userName } = props;

    const { register, handleSubmit, reset } = useForm();
    const registerValues: RegisterValProps = {
        salaryVal: `${userName}Salary`,
        creditVal: `${userName}Credit`,
        houseVal: `${userName}House`,
        debtVal: `${userName}Debt`,
        savingVal: `${userName}Saving`,
    };

    const [sunny, setSunny] = useRecoilState(sunnyExpensesState);
    const [ryan, setRyan] = useRecoilState(ryanExpensesState);
    const userExpenses = userName === 'sunny' ? sunny : ryan;
    const setExpenses = userName === 'sunny' ? setSunny : setRyan;

    const filteredArray = userExpenses.filter(
        (a) => a.year === Number(year) && a.month === month
    );
    const thisMonth =
        filteredArray.length > 0
            ? filteredArray[0]
            : { salary: 0, credit: 0, house: 0, debt: 0, saving: 0 };
    const balance =
        thisMonth.salary -
        thisMonth.credit -
        thisMonth.house -
        thisMonth.debt -
        thisMonth.saving;

    const handleExpenses: SubmitHandler<FieldValues> = (data) => {
        const updatedExpenses = userExpenses.map((item) => {
            if (item.year === Number(year) && item.month === month) {
                return {
                    ...item,
                    salary: Number(data[registerValues.salaryVal]),
                    credit: Number(data[registerValues.creditVal]),
                    house: Number(data[registerValues.houseVal]),
                    debt: Number(data[registerValues.debtVal]),
                    saving: Number(data[registerValues.savingVal]),
                    balance: Number(balance),
                };
            }
            return item;
        });

        setExpenses(updatedExpenses);
        reset();
    };

    return (
        <ExpensesWrapper>
            <form
                className="contents_form"
                onSubmit={handleSubmit(handleExpenses)}
            >
                <h4 style={{ color: '#3493ca', fontWeight: 'bold' }}>
                    {userName.charAt(0).toUpperCase() + userName.slice(1)}
                </h4>
                <InputItems>
                    <label>월급 : </label>
                    <input
                        type="number"
                        {...register(registerValues.salaryVal)}
                    ></input>
                </InputItems>
                <InputItems>
                    <label>카드값 : </label>
                    <input
                        type="number"
                        {...register(registerValues.creditVal)}
                    ></input>
                </InputItems>
                <InputItems>
                    <label>집관련 : </label>
                    <input
                        type="number"
                        {...register(registerValues.houseVal)}
                    ></input>
                </InputItems>
                <InputItems>
                    <label>땡겨쓴 돈 : </label>
                    <input
                        type="number"
                        {...register(registerValues.debtVal)}
                    ></input>
                </InputItems>
                <InputItems>
                    <label>저축 : </label>
                    <input
                        type="number"
                        {...register(registerValues.savingVal)}
                    ></input>
                </InputItems>
                <button>계산하기</button>
            </form>
            <Results>
                <ResultItems>
                    <p>월급</p>
                    <p>{thisMonth.salary.toLocaleString()}￥</p>
                </ResultItems>
                <ResultItems>
                    <p>카드값</p>
                    <p>{thisMonth.credit.toLocaleString()}￥</p>
                </ResultItems>
                <ResultItems>
                    <p>집관련비용</p>
                    <p>{thisMonth.house.toLocaleString()}￥</p>
                </ResultItems>
                <ResultItems>
                    <p>땡겨쓴 돈</p>
                    <p>{thisMonth.debt.toLocaleString()}￥</p>
                </ResultItems>
                <ResultItems>
                    <p>저축</p>
                    <p>{thisMonth.saving.toLocaleString()}￥</p>
                </ResultItems>
                <ResultItems>
                    <p>남은 돈</p>
                    <p>{balance.toLocaleString()}￥</p>
                </ResultItems>
            </Results>
        </ExpensesWrapper>
    );
}
