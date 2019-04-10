import axios from 'axios';
import marketPrice from './data/marketPrice.json';
import transactionsPrice from './data/transactionsPrice.json';

// function getRate(coins) {
//     axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
//         .then(res => res.data)
// }

async function getRate(coins) {
    var value = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        return value.data
}

function getMarketPrice() {
    // return marketPrice;
    return Promise.resolve(marketPrice);
}

function getConfirmedTransactions() {
    // return transactionsPrice;
    return Promise.resolve(transactionsPrice);
}

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}