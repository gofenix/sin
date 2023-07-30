import _ from "lodash"

export async function groupByHost() {
  const tabs = await chrome.tabs.query({})
  const data = _.chain(tabs)
    .map((value, key) => {
      const url = new URL(value.url)
      return { host: url.host, ...value }
    })
    .groupBy("host")
    .map((value, key) => {
      return { host: key, tabs: value }
    })
    .reduce((acc, cur) => {
      acc[cur.host] = cur.tabs
      return acc
    }, {})
    .value()
  return data
}

export async function getAllTabs() {
  const tabs = await chrome.tabs.query({})
  const data = _.chain(tabs)
    .map((value, key) => {
      const url = new URL(value.url)
      return { host: url.host, ...value }
    })
    .sortBy((item) => item.url)
    .value()
  return data
}
