import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*Acá debería contener los items de compra*/}
                {this.props.name}
            </div>
        )
    }
}
