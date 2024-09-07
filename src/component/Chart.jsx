import { PieChart } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts/BarChart';

const Chart = () => {
  return (
    <div className="lg:flex">
    <div className="p-11">
      <BarChart
      xAxis={[
        {
          scaleType: 'band',
          data: ['Shanta', 'afroja', 'Maliha'],
          categoryGapRatio: 0.6,
          barGapRatio: 0.1
        }
      ]}
      series={[
        { data: [10, 20, 30], }
      ]}
      width={500}
      height={400}
      transition={{
        duration: 2000, 
        easing: 'ease-in-out', }}/>
    </div>
    <div className="pt-12">
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Shanta' },
            { id: 1, value: 20, label: 'Afroja' },
            { id: 2, value: 30, label: 'Maliha' },
          ],
        },
      ]}
      width={600}
      height={300}
    />
    </div>
    </div>
  );
};

export default Chart;
