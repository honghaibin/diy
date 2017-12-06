import React from 'react'
import { TimePicker, Card, Row, Col } from 'antd'

function onChange(time, timeString) {
  console.log(time, timeString);
}

class TimePickerComponent extends React.Component{
	render(){
		return (
			<div>
				<Card title="精确到时，分，秒">
					<Row gutter={16}>
						<Col xs={24}  md={12}>
							<Card.Grid style={{width:'100%'}}>
								<TimePicker onChange={onChange} format='HH:00:00'></TimePicker>
							</Card.Grid>
						</Col>
						<Col xs={24}  md={12}>
							<Card.Grid style={{width:'100%'}}>
								<TimePicker onChange={onChange} format='HH:mm:00'></TimePicker>
							</Card.Grid>
						</Col>
						<Col xs={24}  md={12}>
							<Card.Grid style={{width:'100%'}}>
								<TimePicker onChange={onChange} format='HH:mm:ss'></TimePicker>
							</Card.Grid>
						</Col>
					</Row>
					
				</Card>
			</div>
		)
	}
}

export default TimePickerComponent