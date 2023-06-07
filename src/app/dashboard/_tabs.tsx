export default [
  {
    name: "Dashboard",
    href: "/dashboard",
    id: "",
  },
  {
    name: "Content",
    href: "/dashboard/content/posts",
    id: "content",
    activateId: "posts",
    subtabs: [
      {
        name: "Posts",
        href: "/dashboard/content/posts",
        id: "posts",
      },
      {
        name: "Products",
        href: "/dashboard/content/products",
        id: "products",
      },
    ],
  },
  {
    name: "Users",
    href: "/dashboard/users",
    id: "users",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    id: "settings",
  },
];

export type Tab = {
  name: string;
  href: string;
  id: string;
  subtabs?: Tab[];
};
