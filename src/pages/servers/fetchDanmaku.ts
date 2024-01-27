import { XMLParser } from 'fast-xml-parser';

export const fetchDanmaku = async (avid: string): Promise<string[]> => {
  const parser = new XMLParser();
  const res = await fetch(`https://rsshub.app/bilibili/video/danmaku/${avid.replace(/^av/, '')}/1`);
  const XMLdata = await res.text();
  const jObj = parser.parse(XMLdata);

  const rss = jObj.rss.channel.item.map(({ title }: any) => title);
  return rss;
};
