// React;
// ReactDOM;

class Heading extends React.Component {
  render() {
    const {title, className, children} = this.props;
    return React.createElement('h1', {title: title, className: className}, 'Im in', ...children);
  }
}

const reactElement = React.createElement(Heading, {titleForHeading: 'HACKERMANS', className:'heading'}, 'test');

ReactDOM.render(reactElement, document.getElementById('root'));