function Pagination({ currentPage, totalPages = 10, onPageChange }) {
    function generatePages() {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }

    return (
        <div className="pagination">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </button>

            {generatePages().map((pageNo) => (
                <button key={pageNo} onClick={() => onPageChange(pageNo)}>
                    {pageNo}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === 10}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
