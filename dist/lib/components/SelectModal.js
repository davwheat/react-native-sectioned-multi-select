var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.ModalControls=exports.SelectModal=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _useSMSContext3=_interopRequireDefault(require("../context/useSMSContext"));var _helpers=require("../helpers");var _this=this,_jsxFileName="/Users/renrizzolo/Documents/websites/react-native-sectioned-multi-select/lib/components/SelectModal.js";var Touchable=_reactNative.Platform.OS==='android'?_reactNative.TouchableNativeFeedback:_reactNative.TouchableOpacity;var SelectModal=function SelectModal(_ref){var children=_ref.children,stylesFromProps=_ref.styles,rest=(0,_objectWithoutProperties2.default)(_ref,["children","styles"]);var _useSMSContext=(0,_useSMSContext3.default)(),_closeSelect=_useSMSContext._closeSelect,getModalProps=_useSMSContext.getModalProps,modalWithSafeAreaView=_useSMSContext.modalWithSafeAreaView,modalWithTouchable=_useSMSContext.modalWithTouchable,selectIsVisible=_useSMSContext.selectIsVisible,getStyles=_useSMSContext.getStyles;console.log('is vis in modal',selectIsVisible);var Component=modalWithSafeAreaView?_reactNative.SafeAreaView:_reactNative.View;var Wrapper=modalWithTouchable?_reactNative.TouchableWithoutFeedback:null;var Backdrop=function Backdrop(props){return Wrapper?React.createElement(Wrapper,{onPress:_closeSelect,__self:_this,__source:{fileName:_jsxFileName,lineNumber:34,columnNumber:7}},React.createElement(_reactNative.View,(0,_extends2.default)({},props,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:35,columnNumber:9}}))):React.createElement(_reactNative.View,(0,_extends2.default)({},props,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:38,columnNumber:7}}));};return React.createElement(_reactNative.Modal,(0,_extends2.default)({},getModalProps(),rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:42,columnNumber:5}}),React.createElement(Component,{style:getStyles('modalWrapper',{},stylesFromProps),__self:_this,__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:7}},React.createElement(Backdrop,{style:getStyles('backdrop',{},stylesFromProps),__self:_this,__source:{fileName:_jsxFileName,lineNumber:44,columnNumber:9}}),React.createElement(_reactNative.View,{style:getStyles('modalContainer',{},stylesFromProps),__self:_this,__source:{fileName:_jsxFileName,lineNumber:48,columnNumber:9}},children)));};exports.SelectModal=SelectModal;var ModalControls=function ModalControls(_ref2){var _ref2$styles=_ref2.styles,stylesFromProps=_ref2$styles===void 0?{}:_ref2$styles;var _useSMSContext2=(0,_useSMSContext3.default)(),getStyles=_useSMSContext2.getStyles,confirmText=_useSMSContext2.confirmText,hideConfirm=_useSMSContext2.hideConfirm,components=_useSMSContext2.components,showCancelButton=_useSMSContext2.showCancelButton,_submitSelection=_useSMSContext2._submitSelection,styles=_useSMSContext2.styles,_cancelSelection=_useSMSContext2._cancelSelection;var cancelButtonStyles=React.useMemo(function(){return getStyles('cancelButton',{},stylesFromProps);},[stylesFromProps.cancelButton,styles.cancelButton]);var submitButtonStyles=React.useMemo(function(){return getStyles('submitButton',{},stylesFromProps);},[stylesFromProps.submitButton,styles.submitButton]);var confirmTextStyles=React.useMemo(function(){return getStyles('confirmText',{},stylesFromProps);},[stylesFromProps.confirmText,styles.confirmText]);return React.createElement(_reactNative.View,{style:{flexDirection:'row'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:82,columnNumber:5}},showCancelButton&&React.createElement(Touchable,{accessibilityComponentType:"button",onPress:_cancelSelection,__self:_this,__source:{fileName:_jsxFileName,lineNumber:84,columnNumber:9}},React.createElement(_reactNative.View,{style:cancelButtonStyles,__self:_this,__source:{fileName:_jsxFileName,lineNumber:88,columnNumber:11}},React.createElement(components.CancelIcon,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:89,columnNumber:13}}))),!hideConfirm&&React.createElement(Touchable,{accessibilityComponentType:"button",onPress:_submitSelection,style:{flex:1},__self:_this,__source:{fileName:_jsxFileName,lineNumber:94,columnNumber:9}},React.createElement(_reactNative.View,{style:submitButtonStyles,__self:_this,__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:11}},React.createElement(_reactNative.Text,{style:confirmTextStyles,__self:_this,__source:{fileName:_jsxFileName,lineNumber:102,columnNumber:13}},confirmText))));};exports.ModalControls=ModalControls;