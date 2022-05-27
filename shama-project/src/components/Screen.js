import React from 'react';
import { Routes, Route } from 'react-router';
import Avatar from './Avatar';
import Park from './Theme/Park';
import Ny from './Theme/Ny';

const Screen = ({isPark, isNy, isLeft, isRight, action, count, isStart, isActive, ToggleClass}) => {
    console.log(isPark)
    return (
        <div className="screen">
            {
                isPark ? <Park isLeft={isLeft} isRight={isRight} count={count}/> : null
            }
            {
                isNy ? <Ny isLeft={isLeft} isRight={isRight} count={count}/> : null
            }
            {
                isStart ? <Avatar isLeft={isLeft} isRight={isRight} action={action} isStart={isStart} count={count}/> : null
            }
        </div>
    );
};

export default React.memo(Screen);