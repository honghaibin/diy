import React from 'react'
import { DatePicker, Card, Row, Col } from 'antd'
const {MonthPicker, RangePicker, WeekPicker} =DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

class DatePickerComponent extends React.Component{
	render(){
		return (
			<div>
				<Card title="日期插件，月插件，日期范围插件，周插件">
					<Row gutter={16}>
						<Col xs={24}  md={12}>
							<Card.Grid style={{width:'100%'}}>
								<DatePicker onChange={onChange}></DatePicker>
							</Card.Grid>
						</Col>
						<Col xs={24}  md={12}>
							<Card.Grid style={{width:'100%'}}>
								<MonthPicker onChange={onChange} placeholder="Select month" />
							</Card.Grid>
						</Col>
						<Col xs={24}  md={12}>
							<Card.Grid style={{width:'100%'}}>
								<RangePicker onChange={onChange} />
							</Card.Grid>
						</Col>
						<Col xs={24}  md={12}>
							<Card.Grid style={{width:'100%'}}>
								<WeekPicker onChange={onChange} placeholder="Select week" />
							</Card.Grid>
						</Col>
					</Row>
					
				</Card>
				<Card title="日期和时间">
					<Row gutter={16}>
						<Col xs={24}  md={12}>
							<Card.Grid style={{width:'100%'}}>
								<DatePicker 
									showTime 
									format='YYYY-MM-DD HH:mm:ss'
									onChange={onChange} 
								/>
							</Card.Grid>
						</Col>
						<Col xs={24}  md={12}>
							<Card.Grid style={{width:'100%'}}>
								<RangePicker 
									showTime={{format:'HH:mm'}} 
									format='YYYY-MM-DD HH:mm'
									onChange={onChange} 
								/>
							</Card.Grid>
						</Col>
					</Row>
				</Card>
			</div>
		)
	}
}

export default DatePickerComponent