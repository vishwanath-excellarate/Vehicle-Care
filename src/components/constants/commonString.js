import AppsIcon from "@mui/icons-material/Apps";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { VENDOR_IMG } from "../assets";
import LogoutIcon from "@mui/icons-material/Logout";

export const TAB_NAMES = [
  {
    id: 1,
    name: "menuIcon",
    icon: AppsIcon,
    link: "service-history",
  },
  {
    id: 2,
    name: "personIcon",
    icon: PersonIcon,
    link: "profile",
  },
  {
    id: 3,
    name: "addIcon",
    icon: AddIcon,
    link: "add-service",
  },
];

export const NEW_REQ_TAB_NAMES = [
  {
    id: 1,
    name: "Vendors",
    icon: StorefrontIcon,
  },
  {
    id: 2,
    name: "Slot",
    icon: AccessTimeIcon,
  },
  {
    id: 3,
    name: "Check Out",
    icon: ListAltIcon,
  },
];

export const SERVICE_HISTORY_CONSTANT = [
  { id: "vehicle", label: "Vehicle.", align: "center" },
  { id: "brand", label: "Brand", align: "center" },
  { id: "modal", label: "Modal", align: "center" },
  { id: "date", label: "Date", align: "center" },
  { id: "location", label: "Location", align: "center" },
  { id: "details", label: "Details", align: "center" },
];

export const SERVICE_HISTORY_DATA = [
  {
    vehicle: "Vehicle1",
    brand: "Brand1",
    modal: "Modal1",
    date: "Date1",
    location: "Location1",
    details: "Details1",
  },
  {
    vehicle: "Vehicle2",
    brand: "Brand2",
    modal: "Modal2",
    date: "Date2",
    location: "Location2",
    details: "Details2",
  },
];

export const VEHICLE_TYPE = ["All", "Pending", "Approved"];

export const VENDORS_LIST = [
  {
    id: 0,
    image: VENDOR_IMG,
    name: "Service Center Title",
    address: "Full address",
    city: "city",
    pincode: "123456",
    rating: "4.5",
    distance: "2.5km",
  },
  {
    id: 1,
    image: VENDOR_IMG,
    name: "Service Center Title",
    address: "Full address",
    city: "city",
    pincode: "123456",
    rating: "4.5",
    distance: "2.5km",
  },
  {
    id: 2,
    image: VENDOR_IMG,
    name: "Service Center Title",
    address: "Full address",
    city: "city",
    pincode: "123456",
    rating: "4.5",
    distance: "2.5km",
  },
];

export const TIME_SLOTS = [
  {
    id: 0,
    time: "10am",
  },
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "2pm",
  },
  {
    id: 3,
    time: "4pm",
  },
  {
    id: 4,
    time: "6pm",
  },
];

export const SERVICE_SELECTED = [
  {
    regNo: "KA25EK2890",
    vehicle: "Bajaj Pulsar 150",
    services: [
      {
        id: 0,
        name: "General Service",
        desc: "Oil check,chain clean,brake check,oil change",
      },
      {
        id: 1,
        name: "Polishing",
        desc: "Polishing over all bike",
      },
    ],
    serviceCenter: "Example Service Center Name",
    timing: "12pm",
    place: "Hubli",
    estimatedCost: [
      {
        id: 0,
        serviceName: "General Services",
        cost: 1000,
      },
      {
        id: 1,
        serviceName: "Polishing",
        cost: 290,
      },
      {
        id: 2,
        serviceName: "GST 10%",
        cost: 129,
      },
    ],
  },
];
