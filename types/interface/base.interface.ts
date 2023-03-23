interface Banner {
  httpUrl: string;
  id: number;
  imageUrl: string;
  lang: string;
  sort: number;
  title: string;
}
interface Notice {
  id: number;
  title: string;
  content: string;
  ctime: number;
  mtime: number;
  stime: number;
  lang: string;
  httpUrl: string | null;
  timeLong: number;
}

interface HeaderInfo {
  text: string;
  link: string;
  target: string;
}

interface HeaderData {
  [key: string]: {
    activeId: string;
    text: string;
    link: string;
    target: string;
    isOpen: boolean;
    icon?: string;
    showAsset?: boolean;
    showOrder?: boolean;
  };
}

interface LinkList {
  link: string;
  title: string;
}

interface NoticeListParams {
  page: Number;
  pageSize: Number;
  keyword?: String;
}

export { Banner, Notice, HeaderInfo, HeaderData, LinkList, NoticeListParams }
