interface Banner {
  httpUrl: string,
  id: number,
  imageUrl: string,
  lang: string,
  sort: number,
  title: string
}
interface Notice {
  id: number,
  title: string,
  content: string,
  ctime: number,
  mtime: number,
  stime: number,
  lang: string,
  httpUrl: string | null
}

export {
  Banner,
  Notice
}
