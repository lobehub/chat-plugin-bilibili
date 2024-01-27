import { XMLParser } from 'fast-xml-parser';

export interface SearchResultItem {
  author: string;
  authorID: number;
  avid: string;
  comment: number;
  cover: string;
  danmaku: number;
  desc: string;
  favorite: number;
  length: string;
  link: string;
  play: number;
  title: string;
}

const parseInfoString = (inputString: string) => {
  // 使用正则表达式提取信息
  const lengthMatch = inputString.match(/Length: ([\d:]+)/);
  const authorIDMatch = inputString.match(/AuthorID: (\d+)/);
  const playMatch = inputString.match(/Play: (\d+)/);
  const favoriteMatch = inputString.match(/Favorite: (\d+)/);
  const danmakuMatch = inputString.match(/Danmaku: (\d+)/);
  const commentMatch = inputString.match(/Comment: (\d+)/);
  const descriptionMatch = inputString.match(/<br><br>(.+)<br><img/);
  const imgMatch = inputString.match(/<img src="([^"]+)"/);

  // 构造返回对象
  const result = {
    authorID: authorIDMatch ? Number.parseInt(authorIDMatch[1], 10) : null,
    comment: commentMatch ? Number.parseInt(commentMatch[1], 10) : null,
    cover: imgMatch ? imgMatch[1] : null,
    danmaku: danmakuMatch ? Number.parseInt(danmakuMatch[1], 10) : null,
    desc: descriptionMatch
      ? descriptionMatch[1].replaceAll('<br>', '').replaceAll('&nbsp;', ' ') + '...'
      : null,
    favorite: favoriteMatch ? Number.parseInt(favoriteMatch[1], 10) : null,
    length: lengthMatch ? lengthMatch[1] : null,
    play: playMatch ? Number.parseInt(playMatch[1], 10) : null,
  };

  return result;
};
export const fetchSearch = async (keywords: string): Promise<SearchResultItem[]> => {
  const parser = new XMLParser();
  const res = await fetch(`https://rsshub.app/bilibili/vsearch/${keywords}/totalrank/1`);
  const XMLdata = await res.text();
  const jObj = parser.parse(XMLdata);
  const rss = jObj.rss.channel.item.map(({ title, description, link, author, guid }: any) => ({
    author,
    avid: guid.split('/').pop().replace(/^av/, ''),
    link,
    title,
    ...parseInfoString(description),
  }));

  return rss;
};
