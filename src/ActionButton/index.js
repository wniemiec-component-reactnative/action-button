/**
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

/**
 * Simple button.
 * 
 * @param    {string} title: Button label
 * @param    {function(void): void} onPress: Function that is called when the 
 * button is pressed
 * @param    {string} [bgColor='#233287'] Background color (in hexadecimal) 
 * @param    {string} [fgColor='#FFFFFF'] Foreground color (in hexadecimal)
 * @param    {boolean} [full=false] Indicates whether the width should be 100%
 */
export default function ActionButton({ 
  title, 
  onPress, 
  bgColor='#233287', 
  fgColor='#FFFFFF', 
  full=true 
}) {
  return (
    <TouchableOpacity style={buildButtonStyle(bgColor, full)} onPress={onPress}>
      <Text style={buildButtonTextStyle(fgColor)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function buildButtonStyle(bgColor, full) {
  return [
    styles.btn, 
    { backgroundColor: bgColor }, 
    full ? { width: '100%' } : null
  ];
}

function buildButtonTextStyle(fgColor) {
  return [
    styles.title, 
    { color: fgColor }
  ];
}
