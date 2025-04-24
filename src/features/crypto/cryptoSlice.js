import { createSlice } from "@reduxjs/toolkit";
import { generateMockAssets } from "./mockAssets";

const initialState = {
  assets: generateMockAssets(),
};

const getRandomDelta = () => (Math.random() * 2 - 1).toFixed(2);

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateAssets: (state) => {
      state.assets = state.assets.map((asset) => {
        const delta = parseFloat(getRandomDelta());
        const price = +(asset.price * (1 + delta / 100)).toFixed(2);
        return {
          ...asset,
          price,
          change1h: +(asset.change1h + delta).toFixed(2),
          change24h: +(asset.change24h + delta).toFixed(2),
          volume24h: asset.volume24h + Math.floor(Math.random() * 10000000),
        };
      });
    },
  },
});

export const { updateAssets } = cryptoSlice.actions;
export const selectAssets = (state) => state.crypto.assets;
export default cryptoSlice.reducer;
