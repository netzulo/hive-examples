
import SSC from 'sscjs'

/**
 * Formats string url
 * @param {string} url
 * @returns string of url
 */
const Url = (url = 'https://api.hive-engine.com/rpc') => (`${url}`)

/**
 * Main instance to connect with HIVE nodes
 * @param {*} url
 * @returns SSC instance
 */
const Provider = (url) => { return new SSC(url) }

/**
 * Obtain symbol information
 * @param {SSC} provider
 * @param {string} symbol
 * @returns Promise instance
 */
const getToken = (provider, symbol) => {
  return provider.findOne('tokens', 'tokens', { symbol: symbol }, (err, result) => {
    if (err) throw Error(err)
    return result
  })
}

/**
 * Obtain Account balance for a symbol
 * @param {SSC} provider
 * @param {*} account
 * @param {string} symbol
 * @returns typeof Promise
 */
const getAccountBalances = (provider, account, symbol) => {
  return provider.findOne('tokens', 'balances', { symbol: symbol }, (err, result) => {
    if (err) throw Error(err)
    return result
  })
}

/**
 * Obtain accounts balances for a symbol by account
 * @param {SSC} provider
 * @param {string} account
 * @param {string} symbol
 * @param {Number} limit
 * @param {Number} offset
 * @returns typeof Promise
 */
 const getAccountsBalances = (provider, account, symbol, limit=1000, offset=0) => {
  return provider.find('tokens', 'balances', { symbol: symbol }, limit, offset, (err, result) => {
    if (err) throw Error(err)
    return result
  })
}

/**
 * Obtain Price for a symbols pair
 * @param {SSC} provider
 * @param {string} symbolOne
 * @param {string} symbolTwo
 * @returns typeof Promise
 */
const getPrice = (provider, symbolOne, symbolTwo) => {
  return provider.findOne('marketpools', 'pools', { tokenPair: `${symbolOne}:${symbolTwo}` }, (err, result) => {
    if (err) throw Error(err)
    return result
  })
}

// const getTxns = (symbol) => { return {} }

export {
  Url, Provider, getToken,
  getAccountBalances, getAccountsBalances,
  getPrice
}