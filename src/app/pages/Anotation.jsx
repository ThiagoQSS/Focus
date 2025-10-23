import { pageStyles, textStyles } from '@/commomStyles/styles';
import { OptionsButton } from '@/components/anotation/OptionsButton';
import { Colors } from '@/constants/Colors';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { withObservables } from '@nozbe/watermelondb/react';
import { database } from '@/database';

const _renderItem = (item) => {
  switch (item.type) {
    case 'note':
      return <Text>Note Item</Text>;
    case 'image':
      return <Text>Image Item</Text>;
    case 'checklist':
      return <Text>Checklist Item</Text>;
  }
};

const AnotationUI = ({anotations}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flatlistContainer}>
        {/* <Text style={textStyles.title}>Anotações</Text> */}
        <FlatList
          data={anotations}
          renderItem={_renderItem}
          ListFooterComponent={<OptionsButton />}
          style={styles.flatlist}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </View>
  );
};

const enhance = withObservables([], () => ({
  anotations: database.get('notes').query(),
}));
const Anotation = enhance(AnotationUI);

export default Anotation;


const styles = StyleSheet.create({
  container: {
    ...pageStyles.hpadding,
    flex: 1,
    alignItems: 'flex-start',
    gap: 10,
    // backgroundColor: Colors.placeholder,
  },
  newButton: {
    borderRadius: 50,
    backgroundColor: Colors.smoothDark,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
    flexDirection: 'row',
    flexShrink: 1,
    padding: 10,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  flatlist: {
    flex: 1,
  },
  flatlistContainer: {
    // backgroundColor: Colors.black,
    width: '100%',
    height: '100%',
  },
});
