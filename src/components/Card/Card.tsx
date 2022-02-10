import { Component } from 'react';
import styles from './Card.module.scss';
interface CardProps {
  children: JSX.Element;
}

function Card({ children }: CardProps): JSX.Element {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Card;
