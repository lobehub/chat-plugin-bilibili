import { XMLParser } from 'fast-xml-parser';

export interface PopularResultItem {
  author: string;
  avid: string;
  cover: string;
  desc: string;
  link: string;
  title: string;
}

const parseInfoString = (inputString: string) => {
  const descriptionPattern = /^([\S\s]*?)<br><br><iframe/;
  const imagePattern = /<img src="(http[^"]+)"/;

  const descriptionMatch = descriptionPattern.exec(inputString);
  const imageMatch = imagePattern.exec(inputString);

  const description = descriptionMatch ? descriptionMatch[1].replaceAll('&nbsp;', ' ').trim() : '';
  const cover = imageMatch ? imageMatch[1] : '';

  return {
    cover: cover,
    desc: description.replaceAll('\n', ''),
  };
};
export const fetchPopular = async (): Promise<PopularResultItem[]> => {
  const parser = new XMLParser();
  const res = await fetch(`https://rsshub.app/bilibili/popular/all`);
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
