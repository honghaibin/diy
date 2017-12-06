import React from 'react'
import {Card,Popover,Button} from 'antd'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class PopoverComponent extends React.Component{
	render(){
		return (
			<div>
		    	<Card title="气泡卡片">
					<Popover content={content} title="Title" trigger="hover">
				      	<Button>Hover me</Button>
				    </Popover>
				    <Popover content={content} placement="topLeft" title="Title" trigger="focus">
				      	<Button>Focus me</Button>
				    </Popover>
				    <Popover content={content} placement="topRight" title="Title" trigger="click">
				      	<Button>Click me</Button>
				    </Popover>
		    	</Card>
		  	</div>
		)
	}
}

export default PopoverComponent