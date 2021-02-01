import React from 'react';

interface Props{}
interface State{}
export default class Child2 extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <div>child2</div>
        )
    }

}