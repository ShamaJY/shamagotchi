import React from 'react';
import { Routes, Route } from 'react-router';
import Avatar from './Avatar';
import Park from './Theme/Park';
import Ny from './Theme/Ny';

const Screen = ({isPark, isNy, isLeft, isRight, action, count, isStart, isActive, ToggleClass}) => {
    console.log(isPark)
    console.log(isNy)
    return (
        <div className="screen">
            {
                isStart && isPark ? <Park isLeft={isLeft} isRight={isRight} count={count}/> : null
            }
            {
                isStart && isNy ? <Ny isLeft={isLeft} isRight={isRight} count={count}/> : null
            }
            {
                isStart ? <Avatar isLeft={isLeft} isRight={isRight} action={action} isStart={isStart} count={count}/> : null
            }
        </div>
    );
};

export default React.memo(Screen);