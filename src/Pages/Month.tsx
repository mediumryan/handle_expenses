import { useParams } from 'react-router-dom';
import { PageTitle, PageWrapper } from './Home';
import { styled } from 'styled-components';

const MonthWrapper = styled.div`
    background-color: greenyellow;
`;

const MonthFormBox = styled.form``;

export default function Month() {
    const { year, month } = useParams();

    return (
        <PageWrapper>
            <PageTitle>
                {year} {month}
            </PageTitle>
            <MonthWrapper>
                <MonthFormBox></MonthFormBox>
            </MonthWrapper>
        </PageWrapper>
    );
}
