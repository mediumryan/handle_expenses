import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
// import components
import { PageTitle, PageWrapper } from './Home';

const YearWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const MonthCard = styled.div`
    cursor: pointer;
    width: 200px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: var(--accent-200) 1.95px 1.95px 2.6px;
    margin: 0.25rem 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    transition: 700ms transform;
    &:hover {
        transform: translateY(-5px);
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 250px;
        height: 225px;
        font-size: 1.5rem;
    }
`;

export default function Years() {
    const navigate = useNavigate();
    const { year } = useParams();

    class MonthlyData {
        id: number;
        month: string;

        constructor(id: number, month: string) {
            this.id = id;
            this.month = month;
        }
    }

    const yearArr = [
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
    ];

    return (
        <PageWrapper>
            <PageTitle>{year}년</PageTitle>
            <YearWrapper>
                {yearArr.map((y) => {
                    return (
                        <MonthCard
                            key={y.id}
                            onClick={() => navigate(`/${year}/${y.month}`)}
                        >
                            {y.month}
                        </MonthCard>
                    );
                })}
            </YearWrapper>
        </PageWrapper>
    );
}
