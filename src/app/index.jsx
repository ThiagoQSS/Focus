import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Redirect } from 'expo-router';

const index = () => {
  const user = useState(true);

  const path = user ? 'pages/Home' : 'auth/Login';
  
  return <Redirect href={path} />;
}

export default index

const styles = StyleSheet.create({})