import {
  Cog6ToothIcon,
  CreditCardIcon,
  DocumentIcon,
  FolderIcon,
  HomeIcon,
  PencilIcon,
  PhotoIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default [
  {
    name: "Dashboard",
    href: "/dashboard",
    id: "",
    icon: HomeIcon,
  },
  {
    name: "Content",
    href: "/dashboard/content/posts",
    id: "content",
    icon: FolderIcon,
    activateId: "posts",
    subtabs: [
      {
        name: "Posts",
        href: "/dashboard/content/posts",
        id: "posts",
        icon: PencilIcon,
      },
      {
        name: "Pages",
        href: "/dashboard/content/pages",
        id: "pages",
        icon: DocumentIcon,
      },
      {
        name: "Products",
        href: "/dashboard/content/products",
        id: "products",
        icon: ShoppingCartIcon,
      },
      {
        name: "Media",
        href: "/dashboard/content/media",
        id: "media",
        icon: PhotoIcon,
      },
    ],
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    id: "orders",
    icon: CreditCardIcon,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    id: "users",
    icon: UserGroupIcon,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    id: "settings",
    icon: Cog6ToothIcon,
  },
];

export type Tab = {
  name: string;
  href: string;
  id: string;
  icon: React.FC;
  subtabs?: Tab[];
};
