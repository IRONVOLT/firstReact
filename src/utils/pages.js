export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount/ limit);
}

//TODO
// Rewrite to useMemo
export const getPagesArray = (totalPages) => {
    const result = [];

    for (let i = 0; i < totalPages ; i++){
        result.push(i+1);
    }
    return result;
}