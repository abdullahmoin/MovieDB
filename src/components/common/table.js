import React from "react";
import TableHeader from "./table-header";
import TableBody from "./table-body";

/*
    1. Stateless functional component : when we know that no state is needed.
*/

function Table(props) {
    const { items, columns, currentPage, limit } = props;
    const strat = ((currentPage - 1) * limit) + 1;
    const end = currentPage * limit;
    const total = items.length;
    const totalPage = total / limit;
    const pages = [];
    for (let i = strat; i <= end; i++) {
        pages.push(i);
    }

    const filteredItems = items.filter((item, index) => index + 1 >= strat && index + 1 <= end)

    return (
        <>
            <div className="table-responsive">
                <table className="table align-middle">
                    <TableHeader columns={columns} />
                    <TableBody items={filteredItems} columns={columns} />
                </table>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link">Previous</a></li>
                    {
                        pages.map((page) => (
                            <li class="page-item"><a class="page-link">{page}</a></li>
                        ))
                    }
                    <li class="page-item"><a class="page-link">Next</a></li>
                </ul>
            </nav>
        </>

    );
}

export default Table;
