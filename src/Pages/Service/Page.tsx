
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useNavigate } from 'react-router-dom'
import AddButton from '../../Layout/Dashboard/AddButton/AddButton'
import { useGetService } from '../../api/Service'

function Page() {

    const column   =useTableColumns()
    const {data  ,status } = useGetService()
    const navigate = useNavigate()
    
        const ExpandedComponent = ({ data }:any) => {
      console.log(data,"data");
      
      return (
        <div className='p-2'>
          <p >description : {data?.description}</p>
        </div>
      );
    };
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >

      <DashHeader showAddButton={false} title={'service'}>
      <div className='RightSide d-flex gap-2 align-center '>

     <AddButton  onClick={()=>navigate('/service/add')}></AddButton>
     </div>
      </DashHeader>

      
      <LyTable
        data={data?.data}
        isLoading={false}
        columns={column}
        is_pagination={false}
        expandableRows 
        expandableRowsComponent={ExpandedComponent}
    />
      
    
    </DashBody>
  )
}

export default Page

