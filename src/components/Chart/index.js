import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";



const ChartComponent = ({ data }) => {
    const test = {
        labels: Object.keys(data).filter(key => key !== 'indicator'),
        datasets: [
            {
                label: data.indicator,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: Object.values(data).slice(1),
            },
        ],
    };
    return (<div className="transition-all duration-300 ease-in-out ">
    {/* Здесь будет ваш график. Можно использовать, например, библиотеку Chart.js или другую */}
        <div className="h-96 flex items-center justify-center">
            <Line data={test} />
        </div> 
    </div>)
};

export default ChartComponent;