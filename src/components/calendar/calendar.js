import React from 'react'
import {Calendar,Card} from 'antd'
class CalendarComponent extends React.Component{
	render(){
		return (
			
			<div>
				<Card title="日历">
					<Calendar />
				</Card>
			</div>
		)
	}
}

export default CalendarComponent