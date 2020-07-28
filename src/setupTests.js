// learn more: https://github.com/testing-library/jest-dom
import enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';

enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethod: true
});