import React from 'react'
import { Route, Switch, Redirect, NavLink, withRouter} from 'react-router-dom'

import { Layout, Menu, Icon, Breadcrumb}  from 'antd'
import './home.css'

import AvatarComponent from '../../components/avatar/avatar.js'
import MainComponent from '../../components/main/main.js'
import AffixComponent from '../../components/affix/affix.js'
import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.js'
import DropdownComponent from '../../components/dropdown/dropdown.js'
import MenuComponent from '../../components/menu/menu.js'
import PaginationComponent from '../../components/pagination/pagination.js'
import StepsComponent from '../../components/steps/steps.js'
import AutoCompleteComponent from '../../components/autocomplete/autocomplete.js'
import CascaderComponent from '../../components/cascader/cascader.js'
import CheckboxComponent from '../../components/checkbox/checkbox.js'
import DatePickerComponent from '../../components/datepicker/datepicker.js'
import TimePickerComponent from '../../components/timepicker/timepicker.js'
import FormComponent from '../../components/form/form.js'
import TreeSelectComponent from '../../components/treeselect/treeselect.js'
import CalendarComponent from '../../components/calendar/calendar.js'
import CarouselComponent from '../../components/carousel/carousel.js'
import ListComponent from '../../components/list/list.js'
import PopoverComponent from '../../components/popover/popover.js'
import TooltipComponent from '../../components/tooltip/tooltip.js'

const {Content, Sider, Header, Footer}= Layout
const {SubMenu}= Menu;
const MenuItem= Menu.Item


class Home extends React.Component{
	constructor(){
		super(...arguments)
	
		const {location} =this.props;
		this.state={
			collapsed: false,
			selectedKey:location.pathname,
			openKeys:[location.pathname.split('/')[2]],
			rootSubmenuKeys: Object.keys(this.menuData)
		}

	}

	menuData={
		'Main': {
				component: MainComponent
			},
		Navigation: [{
				_id:'Affix',
				desc:'固钉Affix',
				component: AffixComponent
			},{
				_id:'Breadcrumb',
				desc:'面包屑Breadcrumb',
				component: BreadcrumbComponent
			},{
				_id:'Dropdown',
				desc:'下拉菜单Dropdown',
				component: DropdownComponent
			},{
				_id:'Menu',
				desc:'导航菜单Menu',
				component: MenuComponent
			},{
				_id:'Pagination',
				desc:'分页Pagination',
				component: PaginationComponent
			},{
				_id:'Steps',
				desc:'步骤条Steps',
				component: StepsComponent
			}],
		DataEntry:[{
				_id:'AutoComplete',
				desc:'自动完成AutoComplete',
				component: AutoCompleteComponent
			},{
				_id:'Cascader',
				desc:'级联选择Cascader',
				component: CascaderComponent
			},{
				_id:'Checkbox',
				desc:'多选框Checkbox',
				component: CheckboxComponent
			},{
				_id:'DatePicker',
				desc:'日期选择框DatePicker',
				component: DatePickerComponent
			},{
				_id:'TimePicker',
				desc:'时间选择框TimePicker',
				component: TimePickerComponent
			},{
				_id:'Form',
				desc:'表单Form',
				component: FormComponent
			},{
				_id:'TreeSelect',
				desc:'树选择TreeSelect',
				component: TreeSelectComponent
			}],
		DataDisplay:[{
				_id:'Calendar',
				desc:'日历Calendar',
				component: CalendarComponent
			},{
				_id:'Carousel',
				desc:'走马灯Carousel',
				component: CarouselComponent
			},{
				_id:'List',
				desc:'列表List',
				component: ListComponent
			},{
				_id:'Popover',
				desc:'气泡卡片Popover',
				component: PopoverComponent
			},{
				_id:'Tooltip',
				desc:'文字提示Tooltip',
				component: TooltipComponent
			}]
	}
	toggle= () =>{
		this.setState({
			collapsed: !this.state.collapsed
		})
	}
	handleClick=(e)=>{
		this.setState({
			selectedKey: e.key
		})
	}
	handleOpenChange=(openKeys)=>{
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
	    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
	      this.setState({ openKeys });
	    } else {
	      this.setState({
	        openKeys: latestOpenKey ? [latestOpenKey] : [],
	      });
	    }
	}
	render(){
		const firstTitles=Object.keys(this.menuData);
		const secondTitles= Object.values(this.menuData);
		// console.log(firstTitles,secondTitles)
		const logoStyle= !this.state.collapsed?{width:168}:{width:40};
		const pathname= this.props.location.pathname;
		const pathArray= pathname.split('/')
		// console.log(this.props.location.pathname);
		return (
			<div id="diy-home-layout">
				<Layout style={{height:'100%'}}>
					<Sider
						trigger={null}
						collapsible
						collapsed={this.state.collapsed}
					>
						<div className="logo" style={logoStyle}>{!this.state.collapsed?'Do it yourself':'DIY'}</div>
						<Menu 
							onClick={this.handleClick}
							onOpenChange={this.handleOpenChange}
							theme="dark" 
							mode="inline" 
							selectedKeys={[this.state.selectedKey]}
							openKeys={this.state.openKeys}
							forceSubMenuRender={true}
						>	
							{
								firstTitles.map((item,i)=>{
									if(Object.prototype.toString.call(secondTitles[i])==='[object Object]'){
										return (
											<MenuItem key={`/home/${item}`}>
												<NavLink to={`/home/${item}`}>
													<Icon type="team"></Icon>
													<span>{item}</span>
												</NavLink>
											</MenuItem>
										)
									}else{
										return (
											<SubMenu key={item} title={<span><Icon type="team"/><span>{item}</span></span>}>
												{
													secondTitles[i].map(v => (
														<MenuItem key={`/home/${item}/${v._id}`}>
															<NavLink to={`/home/${item}/${v._id}`}>{v.desc}</NavLink>
														</MenuItem>
													))
												}
											</SubMenu>
										)
									}
								})
							}
						</Menu>
					</Sider>
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }}>
							<Icon
								className="trigger"
								type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
	              				onClick={this.toggle}
							></Icon>
							<div style={{display:'inline-block',float:'right',marginRight:20}}>
								<AvatarComponent></AvatarComponent>
							</div>
						</Header>
						<Content style={{ margin: '24px 16px' }}>
							<Breadcrumb style={{ margin: '10px 10px' }}>
								{
									pathArray.map((v,i)=>{
										if(i===0){
											return null;
										}else {
											return <Breadcrumb.Item key={v}>{v}</Breadcrumb.Item>
										}
									})
								}
						    </Breadcrumb>
						    <div style={{padding: 24, background: '#fff', minHeight: 280}}>
						    	<Switch>
					            	{
										firstTitles.map((item,i)=>{
											if(Object.prototype.toString.call(secondTitles[i])==='[object Object]'){
												return (
													<Route key={i} path={`/home/${item}`} component={secondTitles[i].component}></Route>
												)
											}else{
												return (
													secondTitles[i].map(v => (
														<Route key={v._id} path={`/home/${item}/${v._id}`} component={v.component}></Route>
													))
												)
											}
										})
									}
									<Redirect to="/home/Main"></Redirect>
					            </Switch>
						    </div>		            
				        </Content>
					</Layout>
				</Layout>
			</div>
		)
	}
}

export default Home