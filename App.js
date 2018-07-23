import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import reducers from './src/reducers';
import CalculatorForm from './src/components/CalculatorForm';

const App = () => {
  const Navigation = createStackNavigator({
    Home: { screen: CalculatorForm },
  });
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
