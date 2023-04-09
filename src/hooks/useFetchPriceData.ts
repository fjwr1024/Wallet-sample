import axios from 'axios';
import { useState, useEffect } from 'react';

type PriceData = {
  solana: {
    usd: number;
    jpy: number;
  };
};

export const useFetchPriceData = () => {
  const [priceData, setPriceData] = useState<PriceData | undefined>(undefined);

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await axios.get<PriceData>(
          'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd,jpy'
        );
        setPriceData(response.data);
      } catch (error) {
        console.error('Error fetching price data:', error);
      }
    };

    fetchPriceData();
  }, []);

  return priceData;
};
