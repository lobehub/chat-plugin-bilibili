import { XMLParser } from 'fast-xml-parser';

export const fetchHotSearch = async (): Promise<string[]> => {
  const parser = new XMLParser();
  const res = await fetch(`https://rsshub.app/bilibili/hot-search`);
  const XMLdata = await res.text();
  const jObj = parser.parse(XMLdata);
  const rss = jObj.rss.channel.item.map(({ title }: any) => title);

  return rss;
};
