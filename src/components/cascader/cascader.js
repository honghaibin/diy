import React from 'react'
import {Card, Cascader} from 'antd'


const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
class CascaderComponent extends React.Component{
	onChange(value){
		console.log(value)
	}
	displayRender(label, selectedOptions){
		return selectedOptions.pop().label;
	}
	render(){
		return (
			<Card title="级联选择">
				<Cascader style={{width:300}} 
					defaultValue={['zhejiang', 'hangzhou', 'xihu']} 
					options={options} 
					onChange={this.onChange} 
					displayRender={this.displayRender}
					/>
			</Card>
		)
	}
}

export default CascaderComponent