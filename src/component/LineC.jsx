import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart} from '@mui/x-charts';

const LineC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('data.json');
        const { xLabels, pData, uData } = response.data;

        // Combine pData and uData into one data array
        const combinedData = pData.map((point, index) => ({
          x: point.x,
          pv: point.y,
          uv: uData[index].y
        }));

        setData(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 w-full">
     <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
       series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
      area: true,
    },
  ]}
  width={500}
  height={300}
      />
    </div>
  );
};

export default LineC;
