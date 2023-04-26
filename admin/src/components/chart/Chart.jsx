
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title,data,datakey,grid}) {

  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke="darkblue"/>
                <Line type="monotone" dataKey={datakey} stroke="darkblue"/>
                <Tooltip/>
                {grid && <CartesianGrid stroke="lightgray" strokeDasharray="5 5"/>}
            </LineChart>

        </ResponsiveContainer>
    </div>
  )
}
