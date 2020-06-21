import React, { Component } from 'react';
import { characterById, charactersByFaction } from './data/Characters';
import validateList from './rules/validateList';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class NewList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chars: [],
            allChars: charactersByFaction('PIR'),
            errors: [],
            errorsVisible: false
        };
    }

    addChar(id) {
        const item = characterById(id)

        // FIXME: checken, ob das state-handling so richtig ist. wirkt komisch direkt auf this.state zuzugreifen
        const updatedChars = [...this.state.chars, item ];
        const errors = validateList(updatedChars);

        this.setState({
            chars: updatedChars,
            errors: errors,
            errorsVisible: (errors.length > 0)
        })
    }

    removeChar(removedIndex) {
        const updatedChars = this.state.chars.filter((_, index) => {
            return index !== removedIndex;
        })

        const errors = validateList(updatedChars);
        
        this.setState({
            chars: updatedChars,
            errors: errors,
            errorsVisible: (errors.length > 0)
        })
    }

    render() {
        const errorsVisible = this.state.errorsVisible;

        // TODO: sub-komponenten auslagern
        // TODO: meldung wenn keine charaktere ausgewählt sind

        return (
            <div>
            <div className="row">
                <div className="col">
                    <h5 className="user-select-none">Ausgewählte Charaktere</h5>
                </div>
            </div>
                <CSSTransition in={errorsVisible} unmountOnExit timeout={250} classNames="alert">
                    <div className="row">
                        <div className="col">
                            <div className="alert alert-danger" role="alert">
                                Fehler:
                                <ul>
                                    {this.state.errors.map((error, index) => 
                                        <li key={index}>{ error }</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
                <div className="row">
                    <div className="col">
                            <ul className="list-group">
                                <TransitionGroup>
                                    {this.state.chars.map((value, index) =>
                                        <CSSTransition key={index} timeout={250} classNames="listChar">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span className="mr-auto">{value.name}</span>                                    
                                                <span className="badge badge-primary badge-pill m-2">{value.costs}</span>
                                                <button type="button" className="btn btn-danger" onClick={this.removeChar.bind(this, index)}>X</button>
                                            </li>
                                        </CSSTransition>
                                    )}
                                </TransitionGroup>
                            </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="user-select-none">Charakter hinzufügen</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="list-group">
                            {this.state.allChars.map((value) =>
                                <a key={value.id} href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={this.addChar.bind(this, value.id)}>
                                    {value.name}

                                    <span className="badge badge-primary badge-pill">
                                        {value.costs}
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewList;