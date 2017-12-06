import React from 'react'
import {Card,TreeSelect} from 'antd'
const TreeNode= TreeSelect.TreeNode
const {SHOW_PARENT}= TreeSelect

class Multiple extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (value) => {
    console.log(arguments);
    this.setState({ value });
  }
  render() {
    return (
      <TreeSelect
        showSearch
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        multiple
        treeDefaultExpandAll
        onChange={this.onChange}
      >
        <TreeNode value="parent 1" title="parent 1" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    );
  }
}

const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: 'Child Node1',
    value: '0-0-0',
    key: '0-0-0',
  }],
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
  children: [{
    label: 'Child Node3',
    value: '0-1-0',
    key: '0-1-0',
  }, {
    label: 'Child Node4',
    value: '0-1-1',
    key: '0-1-1',
  }, {
    label: 'Child Node5',
    value: '0-1-2',
    key: '0-1-2',
  }],
}];
class MultipleShowParent extends React.Component {
  state = {
    value: ['0-0-0'],
  }
  onChange = (value) => {
    console.log('onChange ', value, arguments);
    this.setState({ value });
  }
  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: 300,
      },
    };
    return <TreeSelect {...tProps} />;
  }
}


class TreeSelectComponent extends React.Component{
	state = {
	    value: undefined,
	}
	onChange = (value) => {
	    console.log(arguments);
	    this.setState({ value });
	}
	render(){
		return (
			<div>
				<Card title="树选择单选">
					<TreeSelect
				        style={{ width: 300 }}
				        value={this.state.value}
				        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
				        treeData={treeData}
				        placeholder="Please select"
				        treeDefaultExpandAll
				        onChange={this.onChange}
				      />
				</Card>
				<Card title="多选">
					<Multiple></Multiple>
				</Card>
				<Card title="多选的时候如果子节点全选中则只显示父节点">
					<MultipleShowParent></MultipleShowParent>
				</Card>
			</div>
		)
	}
}

export default TreeSelectComponent