import React from 'react'
import {Card,Tooltip,Button} from 'antd'


class TooltipComponent extends React.Component{
	render(){
		return (
			<div>
		    	<Card title="文字提示">
					<Tooltip placement="topLeft" title="prompt text">
					     <Button>Align edge / 边缘对齐</Button>
					</Tooltip>
		    	</Card>
		  	</div>
		)
	}
}

export default TooltipComponent