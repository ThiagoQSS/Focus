import { Redirect } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

const index = () => {
  const user = useState(true);

  const path = user ? '/Home' : 'auth/Login';
  
  return <Redirect href={path} />;
}

export default index

const styles = StyleSheet.create({})