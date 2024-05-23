import { Pagination } from "antd";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const PaginationBody = ({ data }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pagination = location?.search || '';
  const currentPage = parseInt(new URLSearchParams(location.search).get("page") || "1", 10);
  const pageSize = parseInt(new URLSearchParams(location.search).get("per_page") || "15", 10);

  const [searchParams] = useSearchParams()
  const onChange = (page: number, pageSize?: number) => {
    navigate(`?page=${page}&per_page=${pageSize || data?.per_page}`);
  };

  const onShowSizeChange = (current: number, pageSize: number) => {
    navigate(`?page=${current}&per_page=${pageSize}`);
  };
  const [t] = useTranslation()

  return (
    <Pagination
      className='text-center mt-3 paginateStyle'
      total={data}
      showTotal={(total: any) => `${t(`Total`)} ${total} ${t(`items`)}`}
      pageSize={pageSize}
      pageSizeOptions={[6, 15, 22, 30]}
      defaultCurrent={currentPage}
      current={currentPage} 
      onChange={onChange}
      onShowSizeChange={onShowSizeChange}
      // showQuickJumper 
      showSizeChanger

    />
  );
};
