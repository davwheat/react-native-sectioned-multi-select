import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { callIfFunction, getProp } from '../helpers';
import useSMSContext from '../useSMSContext';
const Selector = () => {
  const { hideSelect, styles, colors, disabled, Icon, _toggleSelect, selectToggleIconComponent, iconNames, } = useSMSContext();
  return !hideSelect ? (<TouchableWithoutFeedback onPress={_toggleSelect} disabled={disabled}>
    <View style={[
      {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
      },
      styles.selectToggle,
    ]}>
      {_getSelectLabel()}
      {callIfFunction(selectToggleIconComponent) || (<Icon size={24} name={iconNames.arrowDown} style={{ color: colors.selectToggleTextColor }} />)}
    </View>
  </TouchableWithoutFeedback>) : null;
};
const _getSelectLabel = () => {
  const { colors, styles, selectText, selectedText, single, selectedItems, displayKey, alwaysShowSelectText, renderSelectText, selectLabelNumberOfLines, _findItem } = useSMSContext();
  let customSelect = null;
  if (renderSelectText) {
    customSelect = renderSelectText(getProps);
    if (typeof customSelect !== 'string') {
      return customSelect;
    }
  }
  let label = `${selectText} (${selectedItems.length} ${selectedText})`;
  if (!single && alwaysShowSelectText) {
    label = selectText;
  }
  if (!selectedItems || selectedItems.length === 0) {
    label = selectText;
  }
  else if (single || selectedItems.length === 1) {
    const item = selectedItems[0];
    const foundItem = _findItem(item);
    label = getProp(foundItem, displayKey) || selectText;
  }
  if (renderSelectText && customSelect && typeof customSelect === 'string') {
    label = customSelect;
  }
  return (<Text numberOfLines={selectLabelNumberOfLines} style={[
    {
      flex: 1,
      fontSize: 16,
      color: colors.selectToggleTextColor,
    },
    styles.selectToggleText,
  ]}>
    {label}
  </Text>);
};

export default Selector