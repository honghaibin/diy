import React from 'react'
import {Checkbox, Card, Button, Row, Col} from 'antd'


const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

class CheckboxGroup extends React.Component{
	onChange(checkedValues){
		console.log(checkedValues)
	}
	render(){
		return (
			<div>
				<Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={this.onChange}></Checkbox.Group>
				<br />
   				<Checkbox.Group options={options} defaultValue={['Pear']} onChange={this.onChange} />
    			<br />
    			<Checkbox.Group options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.onChange} />					
			</div>
		)
	}
}

class CheckboxWithGrid extends React.Component{
	render(){
		return (
			<Checkbox.Group>
			    <Row>
				    <Col span={8}><Checkbox value="A">A</Checkbox></Col>
				    <Col span={8}><Checkbox value="B">B</Checkbox></Col>
				    <Col span={8}><Checkbox value="C">C</Checkbox></Col>
				    <Col span={8}><Checkbox value="D">D</Checkbox></Col>
				    <Col span={8}><Checkbox value="E">E</Checkbox></Col>
			    </Row>
			</Checkbox.Group>
		)
	}
}

class CheckboxComponent extends React.Component{
	constructor(){
		super(...arguments)

		this.state={
			checked: true,
			disabled: false
		}
	}
	toggleChecked = () => {
	    this.setState({ checked: !this.state.checked });
	}
	toggleDisabled = () => {
	    this.setState({ disabled: !this.state.disabled });
	}
	onChange = (e) => {
	    console.log('checked = ', e.target.checked);
	    this.setState({
	      checked: e.target.checked,
	    });
	}
	render(){
		const label= `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`
		return (
			<div>
				<Card title="受控的checkbox">
					<p style={{marginBottom:'20px'}}>
						<Checkbox
							checked={this.state.checked}
							disabled={this.state.disabled}
							onChange={this.onChange}
						>
							{label}
						</Checkbox>
					</p>
					<p>
						<Button 
							type="primary"
							onClick={this.toggleChecked}
						>
							{!this.state.checked?'Check':'Uncheck'}
						</Button>

						<Button
							style={{marginLeft:20}} 
							type="primary"
							onClick={this.toggleDisabled}
						>
							{!this.state.disabled?'Disabled':'Enable'}
						</Button>
					</p>
				</Card>
				<Card title="通过数组生成checkbox组">
					<CheckboxGroup></CheckboxGroup>
				</Card>
				<Card title="Checkbox.Group里面嵌套Grid组件">
					<CheckboxWithGrid></CheckboxWithGrid>
				</Card>
			</div>
		)
	}
}



export default CheckboxComponent