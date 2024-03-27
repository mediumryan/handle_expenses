import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
// import components
import { PageTitle, PageWrapper } from './Home';
import Expenses from '../Components/Expenses/Expenses';

const MonthWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    padding: 0.25rem 5rem;
    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        flex-direction: column;
        padding: 0.25rem 0.5rem;
    }
`;

export default function Month() {
    const { year, month } = useParams();

    return (
        <PageWrapper>
            <PageTitle>
                {year} {month}
            </PageTitle>
            <MonthWrapper>
                <Expenses year={year} month={month} userName="sunny" />
                <Expenses year={year} month={month} userName="ryan" />
            </MonthWrapper>
        </PageWrapper>
    );
}
