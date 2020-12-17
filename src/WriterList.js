import React from 'react';
import Writer from './writer';

export default function WriterList(props){
    let writers=props.data;
    return(
        <>
        {
        writers.map(writer=><Writer{...writer} key=""></Writer>)
        }
        </>
    )
}