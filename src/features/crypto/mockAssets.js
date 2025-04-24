import bitcoinLogo from "../../assets/bitcoin-btc-logo.svg";
import ethereumLogo from "../../assets/ethereum-eth-logo.svg";
import tetherLogo from "../../assets/tether-usdt-logo.svg";
import rippleLogo from "../../assets/xrp-xrp-logo.svg";
import binanceLogo from "../../assets/bnb-bnb-logo.svg";

import bitcoinChart from "../../assets/charts/bitcoin.jpg";
import ethereumChart from "../../assets/charts/ethereum.jpg";
import tetherChart from "../../assets/charts/tether.jpg";
import rippleChart from "../../assets/charts/ripple.jpg";
import binanceChart from "../../assets/charts/binance.jpg";

export const generateMockAssets = () => [
  {
    id: 1,
    logo: bitcoinLogo,
    name: "Bitcoin",
    symbol: "BTC",
    price: 93759.48,
    change1h: 0.43,
    change24h: 0.93,
    change7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    supply: "19.85M",
    maxSupply: "21M",
    chart: bitcoinChart,
  },
  {
    id: 2,
    logo: ethereumLogo,
    name: "Ethereum",
    symbol: "ETH",
    price: 3000.12,
    change1h: -0.21,
    change24h: 1.14,
    change7d: 5.88,
    marketCap: 380000000000,
    volume24h: 20000000000,
    supply: "120M",
    maxSupply: "∞",
    chart: ethereumChart,
  },
  {
    id: 3,
    logo: tetherLogo,
    name: "Tether",
    symbol: "USDT",
    price: 1.0,
    change1h: 0.01,
    change24h: 0.0,
    change7d: -0.02,
    marketCap: 88000000000,
    volume24h: 35000000000,
    supply: "88B",
    maxSupply: "∞",
    chart: tetherChart,
  },
  {
    id: 4,
    logo: rippleLogo,
    name: "Ripple",
    symbol: "XRP",
    price: 0.52,
    change1h: 0.05,
    change24h: -0.91,
    change7d: 1.02,
    marketCap: 27000000000,
    volume24h: 1000000000,
    supply: "52B",
    maxSupply: "100B",
    chart: rippleChart,
  },
  {
    id: 5,
    logo: binanceLogo,
    name: "Binance Coin",
    symbol: "BNB",
    price: 430.12,
    change1h: -0.33,
    change24h: 2.01,
    change7d: 7.53,
    marketCap: 66000000000,
    volume24h: 1500000000,
    supply: "154M",
    maxSupply: "200M",
    chart: binanceChart,
  },
];
