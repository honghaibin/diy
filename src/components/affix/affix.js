import React from 'react'
import {Card, Affix, Button } from 'antd'
import './affix.css'

class AffixComponent extends React.Component{
	render(){
		return (
			<div id="diy-affix">
				<Card>
					<Affix>
				      <Button type="primary">Affix top</Button>
				    </Affix>
				    <br />
				    <Affix offsetBottom={0}>
				      <Button type="primary">Affix bottom</Button>
				    </Affix>
				</Card>
				<Card>
					<Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
					    <Button>120px to affix top</Button>
					</Affix>
				</Card>
			    <Card>
			    	<div className="scrollable-container" ref={(node) => { this.container = node; }}>
				        <div className="background">
				          <Affix target={() => this.container}>
				            <Button type="primary">
				              Fixed at the top of container
				            </Button>
				          </Affix>
				        </div>
				    </div>
			    </Card>
			</div>
		)
	}
}

export default AffixComponent