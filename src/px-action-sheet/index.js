import React from 'react';
import style from './style.scss';
import classnames from 'classnames';

/**
    * px-action-sheet component
    */
export default class ActionSheet extends React.Component {
  constructor(props){
    super(props);

    this.onOverlayClick = this.onOverlayClick.bind(this);
  }
  onOverlayClick() {
    this.toggle();
  }
  toggle() {
    this.setState({opened: !this.state.opened});
    console.log('toggle');
  }
  open() {
    console.log('open');
  }

  close() {
    console.log('close');
  }

  render() {
    const {
      opened,
      onOverlayClick,
      children
    } = this.props;



    //base
    let baseClasses = classnames('px-action-sheet',
      {'px-action-sheet--is-opened': opened}
    );

    //overlay
    let overlayClasses = classnames('c-action-dialog__mask',
      {'c-action-dialog__mask--is-opened': opened}
    );

    //style
    let classes = classnames(
      'c-action-sheet',
    { 'c-action-sheet--is-open': opened });

    return (
      <div className={baseClasses} ref='baseElement'>
        <div id="overlay" ref='overlay' onClick={onOverlayClick} className={overlayClasses}></div>
        <div id="sheet" ref='sheet' className={classes}>
          <div id="actions" ref='actions' className="c-action-sheet__actions">
            {children}
          </div>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}
