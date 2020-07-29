import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import LineChart from '../../components/LineChart'
import "./line.scss";

export default class Line extends Component {
  
  componentDidMount() {
    const chartData = {
      dimensions: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      measures: [{
        data: [10, 52, 200, 334, 390, 330, 220]
      }]
    }
    this.lineChart.refresh(chartData);
  }
  refLineChart = (node) => this.lineChart = node

  render() {
    return (
      <View className="line-chart">
        <LineChart ref={this.refLineChart} />
      </View>
    );
  }
}
