import { createStackNavigator } from 'react-navigation';
import CalculatorForm from './src/components/CalculatorForm';

const App = createStackNavigator({
  Home: { screen: CalculatorForm },
});

export default App;
