export const navItems = [
  {
    name: "Tableau de bord",
    icon: "/assets/icons/dashboard.svg",
    url: "/",
  },
  {
    name: "Documents",
    icon: "/assets/icons/documents.svg",
    url: "/documents",
  },
  {
    name: "Images",
    icon: "/assets/icons/images.svg",
    url: "/images",
  },
  {
    name: "Média",
    icon: "/assets/icons/video.svg",
    url: "/media",
  },
  {
    name: "Autres",
    icon: "/assets/icons/others.svg",
    url: "/others",
  },
];

export const actionsDropdownItems = [
  {
    label: "Renommer",
    icon: "/assets/icons/edit.svg",
    value: "rename",
  },
  {
    label: "Détails",
    icon: "/assets/icons/info.svg",
    value: "details",
  },
  {
    label: "Partager",
    icon: "/assets/icons/share.svg",
    value: "share",
  },
  {
    label: "Télécharger",
    icon: "/assets/icons/download.svg",
    value: "download",
  },
  {
    label: "Supprimer",
    icon: "/assets/icons/delete.svg",
    value: "delete",
  },
];

export const sortTypes = [
  {
    label: "Date de création (plus récent)",
    value: "$createdAt-desc",
  },
  {
    label: "Date de création (plus ancien)",
    value: "$createdAt-asc",
  },
  {
    label: "Nom (A-Z)",
    value: "name-asc",
  },
  {
    label: "Nom (Z-A)",
    value: "name-desc",
  },
  {
    label: "Taille (plus grand)",
    value: "size-desc",
  },
  {
    label: "Taille (plus petit)",
    value: "size-asc",
  },
];

export const avatarPlaceholderUrl =
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
