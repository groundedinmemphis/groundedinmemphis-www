import React from 'react';

import s from './Member.scss';
// import { checkPropTypes } from 'prop-types';

// export default (props: any) => (

//     // const { index } = props;

//     // if ({props.index} % 2 === 0) {

//     // } else {

//     // }

//     <div className={s.Member}>

//         <div className={s.Member__Photo}>
//             <img src={props.imgUrl}/>
//         </div>

//         <h1 className={s.Member__Name}>{props.name} {props.index}</h1>

//         <h2 className={s.Member__Position}>{props.position}</h2>

//         <p className={s.Member__Desc}>{props.description}</p>

//         <button className={s.Member__ReadMore}>Read More</button>

//         <div className={s.Member__Detail}>
//             <p className={s.Member__DescFull}>{props.description}</p>
//             <button className={s.Member__ReadLess}>Read Less</button>
//         </div>

//     </div>

// );

export default (props: any) => {
  // const i = props.index;
  // const classNamewee = i % 2 === 0 ? 'one' : 'two';
  // if ( index % 2 === 0) {

  //     return (
  //         <div>weeee</div>
  //     );

  // } else {

  //     return (

  //         <div>booo</div>
  //     );

  // }

  return (
    <div className={s.Member}>
      <div className={s.Member__Photo}>
        <img src={props.imgUrl} />
      </div>

      <h1 className={s.Member__Name}>
        {props.name} {props.index}
      </h1>

      <h2 className={s.Member__Position}>{props.position}</h2>

      <p className={s.Member__Desc}>{props.description}</p>

      <button className={s.Member__ReadMore}>Read More</button>

      <div className={s.Member__Detail}>
        <p className={s.Member__DescFull}>{props.description}</p>
        <button className={s.Member__ReadLess}>Read Less</button>
      </div>
    </div>
  );
};
