import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ChartComponent from './components/Chart';

function App() {
  const [selectedRow, setSelectedRow] = useState(null);

  const tableData = [
    {
      indicator: 'Выручка, руб',
      currentDay: 500521,
      yesterday: 480521,
      thisWeek: 4805121
    },
    {
      indicator: 'Наличные',
      currentDay: 300000,
      yesterday: 300000,
      thisWeek: 300000
    },
    {
      indicator: 'Безналичный расчет',
      currentDay: 100000,
      yesterday: 100000,
      thisWeek: 100000
    },
    {
      indicator: 'Кредитные карты',
      currentDay: 100521,
      yesterday: 100521,
      thisWeek: 100521
    },
    {
      indicator: 'Средний чек, руб',
      currentDay: 1300,
      yesterday: 900,
      thisWeek: 900
    },
    {
      indicator: 'Средний гость, руб',
      currentDay: 1200,
      yesterday: 800,
      thisWeek: 800
    },
    {
      indicator: 'Удаления из чека (после оплаты), руб',
      currentDay: 1000,
      yesterday: 1100,
      thisWeek: 900
    },
    {
      indicator: 'Удаления из чека (до оплаты), руб',
      currentDay: 1300,
      yesterday: 1300,
      thisWeek: 900
    },
    {
      indicator: 'Количество чеков',
      currentDay: 34,
      yesterday: 36,
      thisWeek: 34
    },
    {
      indicator: 'Количество гостей',
      currentDay: 34,
      yesterday: 36,
      thisWeek: 32
    },
  ]
  const cells = ['Показатель', 'Текущий день', 'Вчера', 'Этот день недели']
  const percents = [4, 0, 0, 0, 44, 50, -9, 0, -6, -6];
  const handleRowClick = (id) => {
    setSelectedRow(selectedRow === id ? null : id);
  };

  return (
    <div className="App">
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    {cells.map((item) => {
                      return (
                        <th scope="col" className="px-6 py-3">
                          {item}
                        </th>
                      )
                    })}
                  </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (      
                  <React.Fragment key={item.indicator}>
                    <tr 
                      className="cursor-pointer border-b"
                      onClick={() => handleRowClick(item.indicator)}
                    >
                      <td className="px-6 py-4">{item.indicator}</td>
                      <td className="px-6 py-4">{item.currentDay}</td>
                      <td className={`px-6 py-4 ${percents[index]>0 ? 'bg-gray-100' : percents[index]<0 ? 'bg-gray-200' : 'bg-gray-50'}`}>
                        {item.yesterday} 
                        <span className={`ml-4 ${percents[index]>=0 ? 'text-green-400' : 'text-red-400'}`}>
                          {percents[index]}%
                        </span>
                      </td>
                      <td className="px-6 py-4">{item.thisWeek}</td>
                    </tr>
                    {selectedRow === item.indicator && (
                      <tr>
                        <td colSpan={4} className="p-4 bg-gray-50">
                          <ChartComponent data={item}/>
                        </td>
                      </tr>
                    )}
                    </React.Fragment>
                ))}
                 
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default App;
