import { useRouter } from "next/router";
import { Button, Container } from "../index";
import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { REPORT_COLUMN } from "../../columns";
import ReconTable from "../Tables/ReconTable";
import { REPORT_DATA } from "../../mockdata";
import Image from "next/image";

const dataReport = [
    {
        name: 'Total Journal',
        currency: ' Amount (NGN)',
        amt: '22,000',
    },
      {
        name: 'Total Journal Entry',
        currency: 'Statement Amount (NGN)',
        amt: '22,105',
    },
      {
        name: 'Total Reconciled',
        currency: 'Amount (NGN)',
        amt: '8000',
    },
      {
        name: 'Total Unreconciled',
        currency: ' Amount (NGN)',
        amt: '14,000',
    },
]
const reportVariance = [
    {
        name: 'Total',
        detail: 'Variance',
        amt: '-105',
    },
      {
        name: 'Total Negative',
        detail: 'Variance',
        amt: '-105',
    },
      {
        name: 'Total Positive',
        detail: 'Variance',
        amt: '0',
    },
]

const totalVariance = [
     {
        name: 'Total Negative Variance',
        detail: 'Amount (NGN)',
        amt: '14,000',
    },
        {
        name: 'Total Positive Variance',
        detail:'Amount (NGN)',
        amt: '0',
    },  
]

  type AppProps = {
  page: number
  handleStep: () => void
}

export default function FullReport1 ({page, handleStep}: AppProps) {

 const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [showReport, setShowReport] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

   const tableData = REPORT_DATA;
  const [data, setData] = useState<any>([])
  const [pageCount, setPageCount] = useState(0);
  const fetchIdRef = useRef(0);
  // const data = useMemo(() => TRANSACTIONS, [])
  const columns = useMemo(() => REPORT_COLUMN, [])


  const fetchData = useCallback(({ pageSize, pageIndex }: any) => {
    const fetchId = ++fetchIdRef.current
    // We'll even set a delay to simulate a server here
    // Only update the data if this is the latest fetch
    if (fetchId === fetchIdRef.current) {
      const startRow = pageSize * pageIndex
      const endRow = startRow + pageSize
      setData(tableData.slice(startRow, endRow))
      // Your server could send back total page count.
      // For now we'll just fake it, too
      setPageCount(Math.ceil(tableData.length / pageSize))
    };
  }, []);

     return (
    <>
    
    {showReport ?  
          <Container
        backBtn={
          <>
            <span
              className="font-bold cursor-pointer"
              onClick={() => router.back()}
            >
              Go back{" "}
            </span>
            /{" "}
            <span className="text-lightAsh">
              Generate-reconciliation-report
            </span>
          </>
        }
      >
        <div className="w-full bg-white rounded-lg p-14">
          {page == 0 && isLoading ? (
            <div className="w-[300px] mt-48 mb-56 mx-auto flex flex-col items-center">
              <Image
                src="/hourglass_top.svg"
                alt="hourglass"
                width={70}
                height={70}
              />
              <h2 className="pt-4 text-xl text-almostBlack">
                Generating Report...
              </h2>
              <p className="text-shadeBlue text-sm pt-1">
                This will take just a few seconds
              </p>
            </div>
          ) : (
            <div className="w-[400px] mt-48 mb-56 mx-auto flex flex-col items-center">
              <Image
                src="/generated.svg"
                alt="hourglass"
                width={70}
                height={70}
              />
              <h2 className="pt-4 text-xl text-almostBlack">
                Reconciliation Report Generated!
              </h2>
              <p className="text-shadeBlue text-sm pt-1">
                The report was successfuly generated
              </p>
              <Button
                child="View reconciliation report"
                className="bg-darkGreen p-4 text-white mt-10 rounded-10"
                onClick={() => setShowReport(false)}
              ></Button>
            </div>
          )}
        </div>
        </Container> :
        <Container
          title="Reconciliation report"
          wallet={
            <Button
              child="Export"
              className="text-white bg-darkGreen px-4 flex items-center h-12 rounded-lg cursor-pointer"
              onClick={() => router.push("/credit/fulfilment/add-fulfilment")}
            ></Button>
          }>
        <div className="w-full bg-white rounded-2xl mt-8 flex">
            <div className="border-r-[1px] border-C4C4C4">
                <div className="mt-6 ml-6 mb-6 mr-11 text-base">
                    <p className="text-shadeBlue">Total Journal DataCount: <span className="text-nameColor font-medium">22</span></p>
                    <p className="text-shadeBlue">Total Journal DataIn Statement: <span className="text-nameColor font-medium">22</span></p>
                </div>
            </div>
                <div className="m-6 text-base">
                    <p className="text-shadeBlue">Total Processed Data: <span className="text-nameColor font-medium">22</span></p>
                    <p className="text-shadeBlue">Recon Id: <span className="text-nameColor font-medium">6a582d07-b8ba-4b8b-b983-1db7ecab41eb</span></p>
          </div>
        </div>
        <div className="flex space-x-12 my-6">
            {
            dataReport.map((data) => (
                <div className="w-full bg-white rounded-2xl pt-6 pl-6 pb-6 text-shadeBlue text-sm shadow-3xl">
                    <h5>{data.name}</h5>
                    <h5>{data.currency}</h5>
                    <p className = "font-semibold text-nameColor text-3xl">{data.amt}</p>
                </div>
            ))
          }
        </div>
        <div className="flex space-x-12 mb-8">
        <div className="w-1/2 bg-white rounded-2xl flex overflow-hidden shadow-3xl">
            {reportVariance.map((data) => (
                <div className="first-of-type:border-r-[1px] first-of-type:border-C4C4C4 even:border-r-[1px] even:border-C4C4C4">
                    <div className="mt-6 ml-6 mb-6 mr-10 text-shadeBlue text-sm">
                    <h5>{data.name}</h5>
                    <h5>{data.detail}</h5>
                    <p className="font-semibold text-nameColor text-3xl">{data.amt}</p>
                    </div>
                    
                </div>
            ))}
        </div>
        <div className="w-1/2 flex space-x-12">
            {totalVariance.map((data) => (
                 <div className="w-full bg-white rounded-2xl pt-6 pl-6 pb-6 text-shadeBlue text-sm shadow-3xl">
                    <h5>{data.name}</h5>
                    <h5>{data.detail}</h5>
                    <p className = "font-semibold text-nameColor text-3xl">{data.amt}</p>
                </div>
            ))}
        </div>
        </div>
        <div className="">
            <h5 className="text-shadeBlue text-sm py-3 pl-24 bg-white rounded-t-lg">VARIANCE DATA</h5>
                <ReconTable 
                data = {data}
                columns = {columns}
                pageCount = {pageCount}
                fetchData = {fetchData}
                tableData = {tableData}
                />
                </div>
                <div className="flex items-center justify-end mt-6">
                  <Button child="View all" className = "border-[1px] border-C4C4C4 rounded-2xl p-3 text-blackRussian text-sm" onClick={handleStep}></Button>
                </div>
          </Container> }
    </>
  );
}
