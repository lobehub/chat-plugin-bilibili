import { XMLParser } from 'fast-xml-parser';

export const fetchReplay = async (avid: string): Promise<string[]> => {
  const parser = new XMLParser();
  const res = await fetch(`https://rsshub.app/bilibili/video/reply/${avid.replace(/^av/, '')}`);
  const XMLdata = await res.text();
  const jObj = parser.parse(XMLdata);

  const rss = jObj.rss.channel.item.map(({ title }: any) => title);
  return rss;
};
