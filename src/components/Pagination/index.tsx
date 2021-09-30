import React from 'react';
import * as S from './styled';
import { Link } from 'gatsby';

const Pagination = ({
    isFirst,
    isLast,
    currentPage,
    numPages,
    prevPage,
    nextPage,
}: {
    isFirst: boolean;
    isLast: boolean;
    currentPage: number;
    numPages: number;
    prevPage: string;
    nextPage: string;
}) => {
    return (
        <S.PaginationWrapper>
            {!isFirst && <Link to={prevPage}>← página anterior</Link>}
            <p>
                {currentPage} de {numPages}
            </p>
            {!isLast && <Link to={nextPage}>proxima página →</Link>}
        </S.PaginationWrapper>
    );
};
export default Pagination;


