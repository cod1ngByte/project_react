import { useState } from "react";
import Pagination from "../Pagination/Pagination";

function Product() {
    const dummyData = Array.from({ length: 100 }, (_, ind) => ({
        id: ind + 1,
        productName: `Product-${ind + 1}`,
    }));
    // console.log(dummyData);

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPageListOfItems = dummyData.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    // console.log(currentPageListOfItems, indexOfFirstItem, indexOfLastItem);

    function handlePageChange(pageNo) {
        setCurrentPage(pageNo);
    }

    return (
        <>
            <ul>
                {currentPageListOfItems.map((obj) => (
                    <li key={obj.id}>{obj.productName}</li>
                ))}
            </ul>

            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(dummyData.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </>
    );
}

export default Product;
