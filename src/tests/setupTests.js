// import Enzyme and wire it up to work with adapter
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Configuration
Enzyme.configure({
    adapter: new Adapter()
});
