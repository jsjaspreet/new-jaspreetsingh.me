import React, { Component } from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'

class WorkoutCard extends Component {
  render() {
    const timeData = [{ name: 'Fitness Time', value: 10 }, { name: 'Fat Burn Time', value: 45 }]
    const colors = ['red', 'orange']

    return (
      <Card>
        <CardHeader
          title="PLYOMETRIC_CARDIO_CIRCUIT"
          subtitle="CARDIO"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <PieChart width={200} height={200}>
            <Pie isAnimationActive={false} data={timeData} cx={100} cy={100} outerRadius={80} fill="#82ca9d" label>
              {
                timeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]}/>
                ))
              }
            </Pie>
            <Tooltip/>
          </PieChart>
        </CardText>
      </Card>    )
  }
}

export default WorkoutCard
