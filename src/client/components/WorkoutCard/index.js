import React, { Component } from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'
import { heartContent, workoutContents, calStyle, timeStyle, heartStyle, hbStyle } from './styles.css'
import CountUp from 'react-countup'
import FontAwesome from 'react-fontawesome'

class WorkoutCard extends Component {
  render() {
    const timeData = [{ name: 'Fitness Time', value: 10 }, { name: 'Fat Burn Time', value: 45 }]
    const colors = ['orangered', 'darkorange']
    const totalTime = "1 h  40 m  30 s"
    const avgAndMax = "177 / 188"

    return (
      <Card>
        <CardHeader
          title="PLYOMETRIC_CARDIO_CIRCUIT"
          subtitle="CARDIO"
          avatar={
            <FontAwesome
              name='bolt'
              size='2x'
            />
          }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <div className={workoutContents}>
            <div>
              <CountUp
                className={calStyle}
                start={0}
                end={580}
                duration={1.6}
                useEasing={true}
                suffix=" Cal"
              />
            </div>
            <div className={heartContent}>
              <FontAwesome
                className={heartStyle}
                name='heartbeat'
                size='3x'
              />
              <span className={hbStyle}>
                { avgAndMax}
              </span>
            </div>
            <PieChart width={200} height={200}>
              <Pie isAnimationActive={true} data={timeData} cx={100} cy={100} outerRadius={80} fill="#82ca9d" label>
                {
                  timeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]}/>
                  ))
                }
              </Pie>
              <Tooltip/>
            </PieChart>
            <div className={timeStyle}>
              {totalTime}
            </div>
          </div>
        </CardText>
      </Card>    )
  }
}

export default WorkoutCard
