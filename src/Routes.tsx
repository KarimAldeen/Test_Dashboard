import { ReactNode } from "react";




// Pages Import



//// service page
import ServicePage from "./Pages/Service/Page";
import AddServicePage from "./Pages/Service/View/AddPage";
import EditService  from "./Pages/Service/View/EditPage";






/// icons
import { FaServicestack } from "react-icons/fa";
import { ContactsOutlined, HomeFilled, ProjectFilled } from "@ant-design/icons";
import { MdDeveloperBoard } from "react-icons/md";
import { BsKey } from "react-icons/bs";
import HomePage from "./Pages/Home/HomePage";


interface RoutesLinksType {
    name?: string,
    href?: string,
    element?: ReactNode,
    icon?: any,
    Viewelement?: ReactNode,
    Viewhref?: string
    children?: any
    hidden?: boolean
}
export const RoutesLinks: RoutesLinksType[] = [


   
    {
        name: "Home",
        element:<HomePage/>,
        icon: <HomeFilled />,
        href: "/",
    },
    {
        name: "service",
        element: <ServicePage />,
        icon: <FaServicestack />,
        href: "/service",
    },
    {
        href: "/service/:id",
        element: <EditService />,
        hidden:true
    },
    {
        href: "/service/add",
        element: <AddServicePage />,
        hidden:true
    }
]