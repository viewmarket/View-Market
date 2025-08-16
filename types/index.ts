import { StaticImageData } from "next/image";

export type TnavListProps = {
    title: string;
    subTitle: string;
    icon: StaticImageData | string;
};

export type TnavList2Props = {
    title: string;
    icon?: StaticImageData | string;
};

export type ThoverCardProps = {
    children: React.ReactNode;
    backgroundColor: string;
    direction: string;
    left: string;
    className?: string;
};

export type TfooterLinkProps = {
    id: number;
    title: string;
    href: string;
    icon?: string;
};

export type TfooterLinksItemProps = {
    id: number;
    title: string;
    links: TfooterLinkProps[];
};
