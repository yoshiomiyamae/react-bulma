import * as React from 'react';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Alignments} from '../modifiers';

interface CardProps {
  children?: any;

  [x: string]: any;
}

interface CardImageProps {
  children?: any;

  [x: string]: any;
}

interface CardHeaderProps {
  children?: any;

  [x: string]: any;
}

interface CardHeaderTitleProps {
  children?: any;
  alignment?: Alignments;

  [x: string]: any;
}

interface CardHeaderIconProps {
  children?: any;
  href?: string;

  [x: string]: any;
}

interface CardFooterProps {
  children?: any;

  [x: string]: any;
}

interface CardFooterItemProps {
  children?: any;
  href?: string;

  [x: string]: any;
}

export class Card extends React.Component<CardProps> {
  render () {
    return (
      <div className={classNameBuilder(['card'])}>
        {this.props.children}
      </div>
    );
  }
}

export class CardImage extends React.Component<CardImageProps> {
  render () {
    return (
      <div className={classNameBuilder(['card-image'])}>
        {this.props.children}
      </div>
    );
  }
}

export class CardHeader extends React.Component<CardHeaderProps> {
  render () {
    return (
      <header className={classNameBuilder(['card-header'])}>
        {this.props.children}
      </header>
    );
  }
}

export class CardHeaderTitle extends React.Component<CardHeaderTitleProps> {
  render () {
    return (
      <p className={classNameBuilder(['card-header-title',
                                      this.props.alignment
                                    ])}>
        {this.props.children}
      </p>
    );
  }
}

export class CardHeaderIcon extends React.Component<CardHeaderIconProps> {
  render () {
    return (
      <a className={classNameBuilder(['card-header-icon'])}
         href={this.props.href}
         {...getEventHandlerFromProps(this.props)}
         >
        {this.props.children}
      </a>
    );
  }
}

export class CardFooter extends React.Component<CardFooterProps> {
  render () {
    return (
      <footer className={classNameBuilder(['card-footer'])}>
        {this.props.children}
      </footer>
    );
  }
}

export class CardFooterItem extends React.Component<CardFooterItemProps> {
  render () {
    if (this.props.href) {
      return (
        <a className={classNameBuilder(['card-footer-item'])}
           href={this.props.href}
           {...getEventHandlerFromProps(this.props)}
           >
          {this.props.children}
        </a>
      );
    } else {
      return (
        <p className={classNameBuilder(['card-footer-item'])}>
          {this.props.children}
        </p>
      );
    }
  }
}
