import React from 'react';
import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';
import s from './BlockText.scss';

interface IBlockTextProps {
  heading: string;
  description: React.ReactNode;
}

export const BlockText = ({ heading, description }: IBlockTextProps) => (
  <Container>
    <div className={s.block}>
      {/* <Row> */}
      <div className={s.block__col}>
        <h3 className={s.block__heading}>{heading}</h3>
        <div className={s.block__description}>{description}</div>
      </div>
      {/* </Row> */}
    </div>
  </Container>
);
