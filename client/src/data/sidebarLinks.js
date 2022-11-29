import {
    BsShop,
    BsGrid,
    BsListUl,
    BsPeople,
    BsCompass,
    BsGear,
    BsArrowLeft,
} from "react-icons/bs";

const sidebarLinks = [
    {
        name: "Dashboard",
        to: "/admin/",
        icon: <BsGrid />,
    },
    {
        name: "Place",
        to: "/admin/places",
        icon: <BsShop />,
    },
    {
        name: "Transfers",
        to: "/admin/transfers",
        icon: <BsListUl />,
    },
    {
        name: "Excursions",
        to: "/admin/excursions",
        icon: <BsPeople />,
    },
    {
        name: "Places",
        to: "/places",
        icon: <BsCompass />,
    },
];

export default sidebarLinks;