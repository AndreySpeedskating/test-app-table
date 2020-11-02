import ReactPaginate from 'react-paginate'
import React from "react";



export const TablePaginate = (props) => {
    return (
        <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={(props.search !== false)? 1 :Math.ceil(props.item.length/props.pageSize)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={props.onPageChangeHandler.bind(this)}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={props.currentPage}
    />
    )
}