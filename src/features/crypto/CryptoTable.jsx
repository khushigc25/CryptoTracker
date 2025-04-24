import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAssets, updateAssets } from "./cryptoSlice";
import "./CryptoTable.css";

const CryptoTable = () => {
  const assets = useSelector(selectAssets);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateAssets());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price ($)</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, idx) => (
            <tr key={asset.id}>
              <td>{idx + 1}</td>
              <td>
                <img src={asset.logo} alt={asset.symbol} width={24} />
              </td>
              <td>{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>${asset.price.toLocaleString()}</td>
              <td style={{ color: asset.change1h >= 0 ? "green" : "red" }}>
                {asset.change1h}%
              </td>
              <td style={{ color: asset.change24h >= 0 ? "green" : "red" }}>
                {asset.change24h}%
              </td>
              <td style={{ color: asset.change7d >= 0 ? "green" : "red" }}>
                {asset.change7d}%
              </td>
              <td>${asset.marketCap.toLocaleString()}</td>
              <td>${asset.volume24h.toLocaleString()}</td>
              <td>{asset.supply}M</td>
              <td>{asset.maxSupply}M</td>
              <td>
                <img src={asset.chart} alt="7d chart" width={150} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
