{
  "$schema": "../node_modules/@lobehub/chat-plugin-sdk/schema.json",
  "api": [
    {
      "url": "https://bilibili.chat-plugin.lobehub.com/api/search",
      "name": "searchVideo",
      "description": "Search videos by keywords",
      "parameters": {
        "properties": {
          "keywords": {
            "description": "video keywords",
            "type": "string"
          }
        },
        "required": ["keywords"],
        "type": "object"
      }
    },
    {
      "url": "https://bilibili.chat-plugin.lobehub.com/api/replay",
      "name": "videoReplay",
      "description": "get video replay by video avid",
      "parameters": {
        "properties": {
          "avid": {
            "description": "video avid ( Starting with 'av' or 'BV'), e.g. av662384801 or BV1TP411b7pN",
            "type": "string"
          }
        },
        "required": ["avid"],
        "type": "object"
      }
    },
    {
      "url": "https://bilibili.chat-plugin.lobehub.com/api/danmaku",
      "name": "videoDanmaku",
      "description": "get video danmaku by video avid",
      "parameters": {
        "properties": {
          "avid": {
            "description": "video avid ( Starting with 'av' or 'BV'), e.g. av662384801 or BV1TP411b7pN",
            "type": "string"
          }
        },
        "required": ["avid"],
        "type": "object"
      }
    },
    {
      "url": "https://bilibili.chat-plugin.lobehub.com/api/popular",
      "name": "popularVideo",
      "description": "get global popular videos from bilibili with no keywords",
      "parameters": {
        "properties": {},
        "type": "object"
      }
    },
    {
      "url": "https://bilibili.chat-plugin.lobehub.com/api/hot-search",
      "name": "hotSearch",
      "description": "get hot-search keywords from bilibili, return top 10 keywords",
      "parameters": {
        "properties": {},
        "type": "object"
      }
    }
  ],
  "author": "LobeHub",
  "createdAt": "2024-01-27",
  "homepage": "https://github.com/lobehub/chat-plugin-bilibili",
  "identifier": "bilibili",
  "meta": {
    "avatar": "https://bilibili.chat-plugin.lobehub.com/logo.webp",
    "tags": ["video", "bilibili", "search"],
    "title": "Bilibili",
    "description": "Dive into Bilibili's vast content with features like keyword video search, replay access, interactive danmaku, trending video recommendations, and hot-search insights, all at your fingertips."
  },
  "version": "1"
}
