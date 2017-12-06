import React from 'react'
import {Row, Col, Card, Icon, Avatar} from 'antd'
import './main.css'
import echarts from 'echarts/lib/echarts'
// import  'echarts/lib/chart/bar';
// import  "echarts/lib/chart/pie";
import  "echarts/lib/chart/line";
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

class MainComponent extends React.Component{
	componentDidMount(){
		// 基于准备好的dom，初始化echarts实例
		// console.log(this.echartsPanel.offsetWidth)
       	this.myChart = echarts.init(this.echartsPanel);
      	this.myChart.setOption({
		    title: {
		        text: '堆叠区域图'
		    },
		    tooltip : {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            label: {
		                backgroundColor: '#6a7985'
		            }
		        }
		    },
		    legend: {
		        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
		    },
		    toolbox: {
		        feature: {
		            saveAsImage: {}
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['周一','周二','周三','周四','周五','周六','周日']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'邮件营销',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name:'联盟广告',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name:'视频广告',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[150, 232, 201, 154, 190, 330, 410]
		        },
		        {
		            name:'直接访问',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[320, 332, 301, 334, 390, 330, 320]
		        },
		        {
		            name:'搜索引擎',
		            type:'line',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top'
		                }
		            },
		            areaStyle: {normal: {}},
		            data:[820, 932, 901, 934, 1290, 1330, 1320]
		        }
		    ]
		})
		window.addEventListener('resize',this.myChart.resize,false);
	}
	componentWillUnmount=()=>{
		window.removeEventListener('resize',this.myChart.resize);
		echarts.dispose(this.echartsPanel)
	}
	echarts=(node)=>{
		this.echartsPanel= node;
	}
	render(){
		return (
			<div id="diy-main">
				<Row>
					<Col xs={24} sm={24} md={18}>
						<Row gutter={16}>
							<Col xs={24} sm={12} md={6}>
								<Card 
									className="diy-card-info"
									title={<div><p className="card-title">新的访客</p><p className="card-subtitle">1.2K</p></div>} 
									extra={<Icon type="user-add" style={{color:'white',fontSize:30,margin: '20px 0'}}></Icon>}
									loading
								>Whatever content</Card>
							</Col>
							<Col xs={24} sm={12} md={6}>
								<Card 
									className="diy-card-warning"
									title={<div><p className="card-title">比率</p><p className="card-subtitle">50%</p></div>} 
									extra={<Icon type="usergroup-add" style={{color:'white',fontSize:30,margin: '20px 0'}}></Icon>}
									loading
								>Whatever content</Card>
							</Col>
							<Col xs={24} sm={12} md={6}>
								<Card 
									className="diy-card-danger"
									title={<div><p className="card-title">查找用户</p><p className="card-subtitle">28%</p></div>} 
									extra={<Icon type="search" style={{color:'white',fontSize:30,margin: '20px 0'}}></Icon>}
									loading
								>Whatever content</Card>
							</Col>
							<Col xs={24} sm={12} md={6}>
								<Card 
									className="diy-card-success"
									title={<div><p className="card-title">转运</p><p className="card-subtitle">140.5 kb</p></div>} 
									extra={<Icon type="wifi" style={{color:'white',fontSize:30,margin: '20px 0'}}></Icon>}
									loading
								>Whatever content</Card>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<div style={{width:'100%',height:300}} id="aaa" ref={this.echarts}></div>
							</Col>
						</Row>
					</Col>
					<Col md={6} sm={0}>
						<Row style={{paddingLeft:16}}>
							<Col span={24}>
								<Card title="未读消息" extar={<span>45</span>}>
									<Card.Grid className="grid-style">内容1</Card.Grid>
									<Card.Grid className="grid-style">内容2</Card.Grid>
									<Card.Grid className="grid-style">内容3</Card.Grid>
									<Card.Grid className="grid-style">内容4</Card.Grid>
									<Card.Grid className="grid-style">内容5</Card.Grid>
								</Card>
							</Col>
						</Row>
					</Col>
				</Row>
				
			</div>
			
		)
	}
}

export default MainComponent