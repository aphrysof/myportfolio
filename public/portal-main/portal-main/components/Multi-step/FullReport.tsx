import Button from "../Button";
import Container from "../Container";
import Search from "../Search";
import { useCallback, useMemo, useRef, useState } from "react";
import { RECON_COLUMN } from "../../columns";
import ReconTable from "../../components/Tables/ReconTable";
import { RECON_DATA } from "../../mockdata";

type AppProps = {
  page: number;
};

export default function FullReport({ page }: AppProps) {
  const tableData = RECON_DATA;
  const [data, setData] = useState<any>([]);
  const [pageCount, setPageCount] = useState(0);
  const fetchIdRef = useRef(0);
  // const data = useMemo(() => TRANSACTIONS, [])
  const columns = useMemo(() => RECON_COLUMN, []);

  const fetchData = useCallback(({ pageSize, pageIndex }: any) => {
    const fetchId = ++fetchIdRef.current;
    // We'll even set a delay to simulate a server here
    // Only update the data if this is the latest fetch
    if (fetchId === fetchIdRef.current) {
      const startRow = pageSize * pageIndex;
      const endRow = startRow + pageSize;
      setData(tableData.slice(startRow, endRow));
      // Your server could send back total page count.
      // For now we'll just fake it, too
      setPageCount(Math.ceil(tableData.length / pageSize));
    }
  }, []);

  return (
    <Container>
      {page == 1 && (
        <>
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-[#222222] font-medium text-2xl">
              Recent reconciliation report
            </h1>
            <div className="flex">
              <Search width="220px" height="46px" placeholder="Search report" />
              <Button
                child="Export"
                className="bg-almostBlack text-white py-[10px] px-4 rounded-[10px] ml-4"
              ></Button>
            </div>
          </div>
          <ReconTable
            data={data}
            columns={columns}
            pageCount={pageCount}
            fetchData={fetchData}
            tableData={tableData}
          />
        </>
      )}
    </Container>
  );
}
