import { render } from '@testing-library/react';
import React from 'react';
import { isPropertySignature } from 'typescript';

interface Props{}
interface State{}
export default class Home extends React.Component<Props,State>{
    constructor(props:Props){
        super(props)
    }

    render(){
        return(<div>home</div>)
    }
} 