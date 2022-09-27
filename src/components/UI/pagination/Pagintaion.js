import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagintaion = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(totalPages);
    return (
        <div className={'page__wrapper'}>
            {
                pagesArray.map(p =>
                    <span
                        onClick={() => changePage(p)}
                        className={page === p ? 'page page__current' : 'page'}
                        key={p}
                    >
                            {p}
                        </span>
                )
            }
        </div>
    );
};

export default Pagintaion;