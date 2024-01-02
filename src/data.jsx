import React from "react";
import {
  Home,
  Person,
  BackupTable,
  ShowChart,
  MultilineChart,
  SupervisorAccount,
  Settings,
  Dvr,
  PostAdd,
  Category,
  CalendarMonth,
  PeopleAlt,
  CallToAction,
  HistoryEdu,
  BarChart,
  Hub,
  AcUnit,
} from "@mui/icons-material";

export const MenuData = [
  {
    id: 1,
    title: "Main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: <Home />,
      },
      {
        id: 2,
        title: "Profile",
        url: "/person/1",
        icon: <Person />,
      },
    ],
  },
  {
    id: 2,
    title: "Lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: <SupervisorAccount />,
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: <Category />,
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: <Dvr />,
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: <PostAdd />,
      },
    ],
  },
  {
    id: 3,
    title: "General",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: <Category />,
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: <HistoryEdu />,
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: <CallToAction />,
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: <CalendarMonth />,
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: <Settings />,
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: <BackupTable />,
      },
    ],
  },
  {
    id: 5,
    title: "Analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: <BarChart />,
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: <Hub />,
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "limegreen",
  icon: <PeopleAlt />,
  title: "Total Users",
  number: "11.238",
  dataKey: "user",
  percentage: 45,
  chartData: [
    { name: "Sun", user: 400 },
    { name: "Mon", user: 600 },
    { name: "Tue", user: 500 },
    { name: "Wed", user: 700 },
    { name: "Thu", user: 400 },
    { name: "Fri", user: 500 },
    { name: "Sat", user: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: <AcUnit />,
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: <ShowChart />,
  title: "Total Revenue",
  number: "56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: <MultilineChart />,
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};


export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    firstName: "John",
    lastName: "Doe",

    email: "john.doe@example.com",
    isActive: true,
    
    status: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    firstName: "Jane",
    lastName: "Smith",

    email: "jane.smith@example.com",
    isActive: false,

    status: false,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    firstName: "Alice",
    lastName: "Johnson",

    email: "alice.johnson@example.com",
    isActive: true,

    status: true,
  },
  {
    id: 4,
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    firstName: "Eva",
    lastName: "Williams",
    email: "eva.williams@example.com",
    isActive: false,
    status: true,
  },
  {
    id: 5,
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    firstName: "Bob",
    lastName: "Jones",
    email: "bob.jones@example.com",
    isActive: true,
    status: false,
  },
  {
    id: 6,
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    firstName: "Grace",
    lastName: "Davis",
    email: "grace.davis@example.com",
    isActive: false,
    status: true,
  },
  {
    id: 7,
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    firstName: "Frank",
    lastName: "García",
    email: "frank.garcia@example.com",
    isActive: true,
    status: false,
  },
  {
    id: 8,
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    firstName: "Charlie",
    lastName: "Miller",
    email: "charlie.miller@example.com",
    isActive: false,
    status: true,
  },
  {
    id: 9,
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    firstName: "David",
    lastName: "Rodriguez",
    email: "david.rodriguez@example.com",
    isActive: true,
    status: false,
  },
  {
    id: 10,
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    firstName: "Alice",
    lastName: "Martinez",
    email: "alice.martinez@example.com",
    isActive: false,
    status: true,
  },
];

