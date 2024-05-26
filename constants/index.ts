import {
  Calendar,
  CircleDollarSign,
  MapPin,
  Phone,
  ShieldCheck,
  Trash,
  Zap,
} from "lucide-react";

export const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/#about",
  },
  {
    name: "Pricings",
    url: "/#pricings",
  },
  {
    name: "Contact",
    url: "/#contact",
  },
];

export const advantages = [
  {
    adv: "We provide House, Office, Deep Cleaning",
  },
  {
    adv: "We are Quick- Same day pick up and Drop Off",
  },
  {
    adv: "We're affordable - Flat Rates no hidden fees",
  },
  // {
  //   adv: "AfterBuilding Cleaning and Move in and Out support",
  // },
];

export const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectet ut labore et dolore magna aliquet er elit. Lorem ipsum dolor sit amet, consect",
  },
  {
    icon: ShieldCheck,
    title: "Secured Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectet ut labore et dolore magna aliquet er elit. Lorem ipsum dolor sit amet, consect",
  },
  {
    icon: CircleDollarSign,
    title: "Affordable Pricingss",
    description:
      "Lorem ipsum dolor sit amet, consectet ut labore et dolore magna aliquet er elit. Lorem ipsum dolor sit amet, consect",
  },
];

export const HowitWorks = [
  {
    icon: Phone,
    title: "Call to place an Order",
    description:
      "Lorem ipsum dolor sit amet, consectet ut labore et dolore magna aliquet er elit.",
  },
  {
    icon: MapPin,
    title: "We will delivery your Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectet ut labore et dolore magna aliquet er elit.",
  },
  {
    icon: Calendar,
    title: "We will Clean your House / Place",
    description:
      "Lorem ipsum dolor sit amet, consectet ut labore et dolore magna aliquet er elit.",
  },
  {
    icon: Trash,
    title: "We will make you go broke",
    description:
      "Lorem ipsum dolor sit amet, consectet ut labore et dolore magna aliquet er elit.",
  },
];

export const price = [
  {
    label: "Door Cleaning",
    starter: true,
    premium: true,
  },
  {
    label: "House Cleaning",
    starter: true,
    premium: true,
  },
  {
    label: "Office Cleaning",
    starter: true,
    premium: true,
  },
  {
    label: "Garden Cleaning",
    starter: false,
    premium: true,
  },
  {
    label: "Residential Cleaning",
    starter: false,
    premium: true,
  },
  {
    label: "Business Cleaning",
    starter: false,
    premium: true,
  },
];


export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}

export const categories = [
  {
    _id: '1',
    name: 'Home Cleaning'
  },
  {
    _id: '2',
    name: 'Home Cleaning'
  },
  {
    _id: '3',
    name: 'Home Cleaning'
  },
  {
    _id: '4',
    name: 'Home Cleaning'
  },
  {
    _id: '5',
    name: 'Home Cleaning'
  },
  {
    _id: '6',
    name: 'Home Cleaning'
  },
]