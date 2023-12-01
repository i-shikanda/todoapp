import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays Task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Today's tasks
        </Text>
        <View style={styles.items}>
                  {/* This is where the tasks items will go */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',    
  },
  taskWrapper: {

  },
  sectionTitle: {

  },
  items: {

  }
});
