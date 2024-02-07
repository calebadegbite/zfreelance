"use client";

import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Pending", value: 10 },
  { name: "Review", value: 10 },
  { name: "On Hold", value: 5 },
  { name: "In Progress", value: 35 },
  { name: "Completed", value: 30 },
];
const COLORS = ["#000",   "#0088FE","red", "#0088FE", "#00C49F",];

export const PieChartComponent = () => {
  const demoUrl = "https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o";

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        //cx={120}
        //cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};
