import React from 'react';

export default () => {
  const spokes = [];
  for (let i = 0; i <= 11; i++) {
    spokes.push(
      { rectProps: {
          key: i,
          transform: `rotate(${ i * 30 } 50 50) translate(0 -30)`
        },
        animateProps: { begin: `${ i / 24.0 }s` }
      });
  }
  return (
    <svg style={ { marginTop: '200px' }} width='120px' height='120px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-default">
      <rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect>
      { spokes.map((spoke) => (
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='black' opacity='0.2' { ...spoke.rectProps}>
          <animate attributeName='opacity' from='1' to='0' dur='0.5s' { ...spoke.animateProps } repeatCount='indefinite'/>
        </rect>
      )) }
    </svg>
  );
};
