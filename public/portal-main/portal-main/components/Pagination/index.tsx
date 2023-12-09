import { usePagination, DOTS } from "../../hooks/usePagination"

export default function Pagination ({setCurrentPage, tableData, siblingCount , pageSize, currentPage, gotoPage} : any) {


  const pageOptions:any = usePagination({tableData, siblingCount, currentPage,pageSize});

  //Dont show the component is the length is 0 or less than 2
  if(currentPage === 0 || pageOptions?.length < 2) {
    return null
  }
    return (
     <div>
      {pageOptions?.map((page: any, index: any) => (
        <>
          {page === DOTS ? <button key={index}>&#8230;</button> : <button key={index} onClick={async () => {
           await setCurrentPage(page);
           gotoPage(page - 1);
           console.log(page)
          }} className="mx-4 w-10 p-1 focus:bg-[#fff] focus:rounded-lg focus:p-1 active:bg-white">
          {page}
        </button>}
        </>
      )
    )}
    </div>
    )
}