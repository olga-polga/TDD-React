import React from 'react';
import CommentList from '../src/components/CommentList';

describe('<CommentList />', () => {

  const cb = (argggggs) => 23;

  // Shallow

  it('should render the component', () => {
    const wrapper = shallow(<CommentList/>);
    expect(wrapper.find('.comments-list')).to.have.length(1);
  });

  // Mount

  it('calls componentDidMount', () => {
    spy(CommentList.prototype, 'componentDidMount');

    const wrapper = mount(<CommentList />);
    expect(CommentList.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<CommentList onMount={ cb } />);
    expect(wrapper.props().onMount()).to.equal(23);
    wrapper.setProps({ bar: "foo" });
    expect(wrapper.props().bar).to.equal("foo");
  });

  // Render

  it('renders a button name', () => {
    const wrapper = render(<CommentList buttonValueSave="myButton"/>);
    expect(wrapper.find('button').text()).to.contain('myButton');
  });

  it('saves a new comment on the button click', () => {
    const wrapper = mount(<CommentList />);

    wrapper.setState({ comments: ['hello'] });
    wrapper.findWhere(n => n.type() === 'button' && n.contains('Explicit Save')).simulate('click');
    expect(wrapper.state().comments[0]).to.equal('hello');
  });

});
