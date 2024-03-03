import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Area,
  XAxis,
  YAxis,
} from 'recharts';
import { getOrderList } from '../../Api/OrderListApi';

const BestSeller = () => {
  const { error, isPending, data } = useQuery({
    queryKey: ['all-order-lists'],
    queryFn: getOrderList,
  });

  if (isPending) return 'Loading...';
  if (error) return `An error has occurred: ${error.message}`;

  // Calculate total quantity sold for each product
  const productsData = {};
  data.forEach(order => {
    order.items.forEach(item => {
      const { productId, name, img, price, quantity } = item;
      if (!productsData[productId]) {
        productsData[productId] = { productId, name, img, price, totalQuantity: 0 }; // Initialize product data
      }
      productsData[productId].totalQuantity += quantity; // Accumulate total quantity
    });
  });

  // Find the overall best seller
  const overallBestSeller = Object.values(productsData).reduce((acc, cur) => {
    if (cur.totalQuantity > acc.totalQuantity) {
      return cur;
    } else {
      return acc;
    }
  }, {});

  return (
    <div>
      <div className="text-3xl">Best Seller</div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={Object.values(productsData)} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: '#2a3447', border: '1px solid #e0e0e0' }}
           
          />
          <Area type="monotone" dataKey="totalQuantity" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BestSeller;