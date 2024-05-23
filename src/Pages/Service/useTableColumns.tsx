
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { useNavigate } from "react-router-dom";
import { useDeleteService } from "../../api/Service";
import ColumnsImage from "../../Components/Columns/ColumnsImage";


const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteService()
  const navigate = useNavigate()
    return useMemo(
    () => [
 
      {
        name: t("id"),
        sortable: true,
        center: true,
        selector: (row: any) => row.id, 
      }, 
      {
        name: t("title"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.title
      },

      {
        name: t("description"),
        sortable: false,
        center: "true",
        cell: (row:any) => <div className="single-line-div">{row?.description} </div> 
      },
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row:any) => (
          <Actions
            objectToEdit={row}
            showEdit
            onEdit={()=> navigate(`/service/${row.id}`) }
            showView={false}
            onDelete={() => deleteMutation.mutate({ id: row.id })}
          >  
          </Actions>
        ),
      },

    ],
    [deleteMutation, navigate, t]
  );
};

export default useTableColumns;

