import React from "react";
import ListCoin from "../ListCoin/ListCoin.jsx";

const trendingCoins = [
  {
    image: "/cryptocurrencies/bitcoin.png",
    name: "Bitcoin",
    price: "$43,180.13",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/etherium.png",
    name: "Bitcoin",
    price: "$3,480.65",
    uptrend: false,
  },
  {
    image: "/cryptocurrencies/solona.png",
    name: "Bitcoin",
    price: "$150,20",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/doge.png",
    name: "Bitcoin",
    price: "$0,1572",
    uptrend: true,
  },
];
const gainerCoins = [
  {
    image: "/cryptocurrencies/bitcoin.png",
    name: "PAPPAY",
    price: "$0.00374",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/bitcoinasia.png",
    name: "Bitcoin Asia",
    price: "$0.02096",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/moonrock.png",
    name: "Moon Rock",
    price: "$0.004907",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/ninjafloki.png",
    name: "Ninja Floki",
    price: "$0.000123",
    uptrend: true,
  },
];
const recentlyCoins = [
  {
    image: "/cryptocurrencies/metacraft.png",
    name: "Metacraft",
    price: "$0.0608",
    uptrend: false,
  },
  {
    image: "/cryptocurrencies/frog.png",
    name: "Frog",
    price: "$0.5875",
    uptrend: false,
  },
  {
    image: "/cryptocurrencies/muskdoge.png",
    name: "Musk Doge",
    price: "$0.04041",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/2share.png",
    name: "2SHARE",
    price: "$1,366.24",
    uptrend: true,
  },
];

function CryptocurrencySection(props) {
  return (
    <section className="-mt-2">
      <div className="container rounded-3xl bg-white py-8 px-4 shadow mx-auto w-5/6">
        <div className="grid grid-cols-3">
          <div className="px-4">
            <ListCoin title="🔥 Trending" data={trendingCoins} />
          </div>
          <div className="px-4">
            <ListCoin title="🚀 Top Gainers" data={gainerCoins} />
          </div>
          <div className="px-4">
            <ListCoin title="💎 Recently Added" data={recentlyCoins} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CryptocurrencySection;
