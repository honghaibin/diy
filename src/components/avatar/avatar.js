import React from 'react'
import {Badge, Avatar} from 'antd'

class AvatarComponent extends React.Component{
	render(){
		return (
			<Badge count={5} style={{float:'right'}}>
				<Avatar icon="user" size="large" shape="square" style={{ color: '#fff', backgroundColor: '#27ae60'}}></Avatar>
			</Badge>
		)
	}
}

export default AvatarComponent