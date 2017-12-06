import React from 'react'
import {Card, Carousel} from 'antd'
import './carousel.css'

class CarouselComponent extends React.Component{
	render(){
		return (
			<div>
				<Card title="走马灯">
					<Carousel autoplay vertical>
						<div><h3>1</h3></div>
					    <div><h3>2</h3></div>
					    <div><h3>3</h3></div>
					    <div><h3>4</h3></div>
					</Carousel>
				</Card>
			</div>			
		)
	}
}

export default CarouselComponent