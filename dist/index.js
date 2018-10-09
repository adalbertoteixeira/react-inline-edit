'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var styles={inlineEdit:{textDecoration:'underline dotted',cursor:'pointer'},inputWrapper:{position:'relative'},inputWrapperInput:{width:'100%',margin:0,padding:'.5rem'},inputWrapperActions:{position:'absolute',width:'100%',display:'flex',color:'white'},inputWrapperActionsButton:{flex:'0 0 50%',border:'none',padding:'.5rem',color:'white',textTransform:'uppercase'}};var getValueByType=function getValueByType(value,type){if(type==='number'){try{var _number=Number(value);if(Number.isNaN(_number)){return null}return _number}catch(e){return value}}return value};var getFormatedValue=function getFormatedValue(value,format){if(!format){return value}return format(value)};var InlineEdit=function(_PureComponent){_inherits(InlineEdit,_PureComponent);function InlineEdit(props){_classCallCheck(this,InlineEdit);var _this=_possibleConstructorReturn(this,(InlineEdit.__proto__||Object.getPrototypeOf(InlineEdit)).call(this,props));var _this$props=_this.props,value=_this$props.value,type=_this$props.type;var valueToUse=getValueByType(value,type);_this.state={value:valueToUse,edit:false};_this.toggleMode=_this.toggleMode.bind(_this);_this.cancel=_this.cancel.bind(_this);_this.save=_this.save.bind(_this);_this.change=_this.change.bind(_this);_this.input=_react2.default.createRef();return _this}_createClass(InlineEdit,[{key:'componentDidUpdate',value:function componentDidUpdate(){var _props=this.props,updateOnNewProps=_props.updateOnNewProps,value=_props.value;var edit=this.state.edit;if(!updateOnNewProps){return}if(edit){return}this.setState({value:value})}},{key:'toggleMode',value:function toggleMode(edit){var _this2=this;this.setState({edit:edit},function(){if(edit&&_this2.input.current){_this2.input.current.focus()}})}},{key:'save',value:function save(){var _this3=this;this.setState({edit:false},function(){return _this3.props.onSave(_this3.state.value)})}},{key:'cancel',value:function cancel(){this.setState({edit:false,value:this.props.value})}},{key:'change',value:function change(ev){var type=this.props.type;this.setState({value:getValueByType(ev.target.value,type)})}},{key:'render',value:function render(){var _this4=this;var _props2=this.props,tag=_props2.tag,type=_props2.type,format=_props2.format;var value=this.state.value;var Tag=tag;var Input=type==='textarea'?'textarea':'input';return _react2.default.createElement('div',{className:'inline-edit',style:styles.inlineEdit},this.state.edit?_react2.default.createElement('div',{className:'input-wrapper',style:styles.inputWrapper},_react2.default.createElement(Input,{style:styles.inputWrapperInput,type:this.props.type,value:this.state.value,onChange:this.change}),_react2.default.createElement('div',{className:'actions',style:styles.inputWrapperActions},_react2.default.createElement('button',{style:_extends({},styles.inputWrapperActionsButton,{backgroundColor:this.props.saveColor}),className:'save',onClick:this.save},this.props.saveLabel),_react2.default.createElement('button',{style:_extends({},styles.inputWrapperActionsButton,{backgroundColor:this.props.cancelColor}),className:'cancel',onClick:this.cancel},this.props.cancelLabel))):_react2.default.createElement(Tag,{ref:this.input,className:'tag-wrapper',onClick:function onClick(){return _this4.toggleMode(true)}},getFormatedValue(value,format)))}}]);return InlineEdit}(_react.PureComponent);InlineEdit.propTypes={value:(0,_propTypes.oneOfType)([_propTypes.string,_propTypes.number]),format:_propTypes.func,tag:_propTypes.string,type:_propTypes.string,onSave:_propTypes.func,updateOnNewProps:_propTypes.bool,saveColor:_propTypes.string,saveLabel:_propTypes.string,cancelColor:_propTypes.string,cancelLabel:_propTypes.string,getValue:_propTypes.func};InlineEdit.defaultProps={value:'',format:null,tag:'span',type:'text',onSave:null,updateOnNewProps:false,saveColor:'blue',saveLabel:'Save',cancelColor:'red',cancelLabel:'Cancel',getValue:null};exports.default=InlineEdit;

//# sourceMappingURL=index.js.map