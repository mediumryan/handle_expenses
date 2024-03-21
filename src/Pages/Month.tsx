import { useParams } from 'react-router-dom';
import { PageTitle, PageWrapper } from './Home';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { ryanExpensesState, sunnyExpensesState } from '../data';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const MonthWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    padding: 0.25rem 5rem;
    div.contents_wrapper {
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
            }
        }
    }
    div.contents_results {
        flex-basis: 50%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 2rem;
        border-radius: 10px;
        background-color: aliceblue;
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
    }
`;

const ResultItems = styled.p`
    display: flex;
    justify-content: space-between;
    p:first-child {
        min-width: 80px;
        text-align: right;
        margin-right: 0.5rem;
    }
`;

export default function Month() {
    const { year, month } = useParams();

    const { register, handleSubmit, reset } = useForm();

    const [sunny, setSunny] = useRecoilState(sunnyExpensesState);
    const sunnyThisMonth = sunny.filter(
        (a) => a.year === Number(year) && a.month === month
    );
    const sunnyBalance =
        sunnyThisMonth[0].salary -
        sunnyThisMonth[0].credit -
        sunnyThisMonth[0].house -
        sunnyThisMonth[0].debt -
        sunnyThisMonth[0].saving;
    const [ryan, setRyan] = useRecoilState(ryanExpensesState);
    const ryanThisMonth = ryan.filter(
        (a) => a.year === Number(year) && a.month === month
    );
    const ryanBalance =
        ryanThisMonth[0].salary -
        ryanThisMonth[0].credit -
        ryanThisMonth[0].house -
        ryanThisMonth[0].debt -
        ryanThisMonth[0].saving;

    const handleSunnyExpenses: SubmitHandler<FieldValues> = (data) => {
        const updatedExpenses = sunny.map((item) => {
            if (item.year === Number(year) && item.month === month) {
                return {
                    ...item,
                    salary: Number(data.sunnySalary),
                    credit: Number(data.sunnyCredit),
                    house: Number(data.sunnyHouse),
                    debt: Number(data.sunnyDebt),
                    saving: Number(data.sunnySaving),
                    balance: Number(sunnyBalance),
                };
            }
            return item;
        });
        setSunny(updatedExpenses);
        reset();
    };

    const handleRyanExpenses: SubmitHandler<FieldValues> = (data) => {
        const updatedExpenses = ryan.map((item) => {
            if (item.year === Number(year) && item.month === month) {
                return {
                    ...item,
                    salary: Number(data.ryanSalary),
                    credit: Number(data.ryanCredit),
                    house: Number(data.ryanHouse),
                    debt: Number(data.ryanDebt),
                    saving: Number(data.ryanSaving),
                    balance: Number(ryanBalance),
                };
            }
            return item;
        });
        setRyan(updatedExpenses);
        reset();
    };

    return (
        <PageWrapper>
            <PageTitle>
                {year} {month}
            </PageTitle>
            <MonthWrapper>
                <div className="contents_wrapper">
                    <form
                        className="contents_form"
                        onSubmit={handleSubmit(handleSunnyExpenses)}
                    >
                        <h4>Sunny</h4>
                        <InputItems>
                            <label>월급 : </label>
                            <input
                                type="text"
                                {...register('sunnySalary')}
                            ></input>
                        </InputItems>
                        <InputItems>
                            <label>카드값 : </label>
                            <input
                                type="text"
                                {...register('sunnyCredit')}
                            ></input>
                        </InputItems>
                        <InputItems>
                            <label>집관련 : </label>
                            <input
                                type="text"
                                {...register('sunnyHouse')}
                            ></input>
                        </InputItems>
                        <InputItems>
                            <label>땡겨쓴 돈 : </label>
                            <input
                                type="text"
                                {...register('sunnyDebt')}
                            ></input>
                        </InputItems>
                        <InputItems>
                            <label>저축 : </label>
                            <input
                                type="text"
                                {...register('sunnySaving')}
                            ></input>
                        </InputItems>
                        <button>제출하기</button>
                    </form>
                    <div className="contents_results">
                        <ResultItems>
                            <p>월급</p>
                            <p>{sunnyThisMonth[0].salary.toLocaleString()}￥</p>
                        </ResultItems>
                        <ResultItems>
                            <p>카드값</p>
                            <p>{sunnyThisMonth[0].credit.toLocaleString()}￥</p>
                        </ResultItems>
                        <ResultItems>
                            <p>집관련비용</p>
                            <p>{sunnyThisMonth[0].house.toLocaleString()}￥</p>
                        </ResultItems>
                        <ResultItems>
                            <p>땡겨쓴 돈</p>
                            <p>{sunnyThisMonth[0].debt.toLocaleString()}￥</p>
                        </ResultItems>
                        <ResultItems>
                            <p>저축</p>
                            <p>{sunnyThisMonth[0].saving.toLocaleString()}￥</p>
                        </ResultItems>
                        <ResultItems>
                            <p>남은 돈</p>
                            <p>{sunnyBalance.toLocaleString()}￥</p>
                        </ResultItems>
                    </div>
                </div>
                <div className="contents_wrapper">
                    <form
                        className="contents_form"
                        onSubmit={handleSubmit(handleRyanExpenses)}
                    >
                        <h4>Ryan</h4>
                        <InputItems>
                            <label>월급 : </label>
                            <input
                                type="text"
                                {...register('ryanSalary')}
                            ></input>
                        </InputItems>
                        <InputItems>
                            <label>카드값 : </label>
                            <input
                                type="text"
                                {...register('ryanCredit')}
                            ></input>
                        </InputItems>
                        <InputItems>
                            <label>집관련 : </label>
                            <input
                                type="text"
                                {...register('ryanHouse')}
                            ></input>
                        </InputItems>
                        <InputItems>
                            <label>땡겨쓴 돈 : </label>
                            <input
                                type="text"
                                {...register('ryanDebt')}
                            ></input>
                        </InputItems>
                        <InputItems>
                            <label>저축 : </label>
                            <input
                                type="text"
                                {...register('ryanSaving')}
                            ></input>
                        </InputItems>
                        <button>제출하기</button>
                    </form>
                    <div className="contents_results">
                        <ResultItems>
                            <span>월급</span>
                            <span>
                                {ryanThisMonth[0].salary.toLocaleString()}￥
                            </span>
                        </ResultItems>
                        <ResultItems>
                            <span>카드값</span>
                            <span>
                                {ryanThisMonth[0].credit.toLocaleString()}￥
                            </span>
                        </ResultItems>
                        <ResultItems>
                            <span>집관련비용</span>
                            <span>
                                {ryanThisMonth[0].house.toLocaleString()}￥
                            </span>
                        </ResultItems>
                        <ResultItems>
                            <span>땡겨쓴 돈</span>
                            <span>
                                {ryanThisMonth[0].debt.toLocaleString()}￥
                            </span>
                        </ResultItems>
                        <ResultItems>
                            <span>저축</span>
                            <span>
                                {ryanThisMonth[0].saving.toLocaleString()}￥
                            </span>
                        </ResultItems>
                        <ResultItems>
                            <span>남은 돈</span>
                            <span>{ryanBalance.toLocaleString()}￥</span>
                        </ResultItems>
                    </div>
                </div>
            </MonthWrapper>
        </PageWrapper>
    );
}
