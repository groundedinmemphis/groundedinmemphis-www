import React from 'react';

const defaultContextValue = {
  data: {
    navbarTheme: 'dark',
  },
};

const { Provider, Consumer } = React.createContext(defaultContextValue);

class NavigationContext extends React.Component {
  state = {
    ...defaultContextValue,
    set: this.setData,
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  render() {
    return value as Provider={this.state}>
      {this.props.children}
    </Provider>
  }
}

export { Consumer as default, NavigationContext }
