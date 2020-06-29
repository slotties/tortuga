import React, { Component, useState } from 'react';
import { characterById, charactersByFaction } from './data/Characters';
import validateList from './rules/validateList';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useLocation, useParams } from 'react-router';

const TYPE_ORDER = 'ASG';

function NewList() {
    const sortByType = (char1, char2) => {
        const type1 = char1.type;
        const type2 = char2.type;

        if (type1 === type2) {
            return char1.name.localeCompare(char2.name);
        }

        const order1 = TYPE_ORDER.indexOf(type1);
        const order2 = TYPE_ORDER.indexOf(type2);

        return order1 < order2 ? -1 : 1;
    };

    const addChar = (id) => {
        const item = characterById(id)

        const updatedChars = [...chars, item];
        const errors = validateList(updatedChars);

        setChars(updatedChars);
        setErrors(errors);
        setErrorsVisible(errors.length > 0);
    };

    const removeChar = (removedIndex) => {
        const updatedChars = chars.filter((_, index) => {
            return index !== removedIndex;
        })

        const errors = validateList(updatedChars);

        setChars(updatedChars);
        setErrors(errors);
        setErrorsVisible(errors.length > 0);
    };

    const typeNameOf = (type) => {
        switch (type) {
            case 'A':
                return 'Anführer';
            case 'S':
                return 'Spezialist';
            case 'G':
                return 'Gefolge';
            default:
                return 'Unbekannt';
        }
    };

    const typeClassName = (type) => {
        return type ? ('t-type-' + type.toLowerCase()) : '';
    };

    let { faction } = useParams();
    // TODO: handle faction = null

    const characters = charactersByFaction(faction)
    characters.sort(sortByType);

    const [chars, setChars] = useState([]);
    const [allChars, setAllChars] = useState(characters);
    const [errors, setErrors] = useState([]);
    const [errorsVisible, setErrorsVisible] = useState(false);

    // TODO: sub-komponenten auslagern
    // TODO: meldung wenn keine charaktere ausgewählt sind
    // TODO: farblegende für typen

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
                                {errors.map((error, index) =>
                                    <li key={index}>{error}</li>
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
                            {chars.map((value, index) =>
                                <CSSTransition key={index} timeout={250} classNames="listChar">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="mr-auto">{value.name}</span>
                                        <span className={`badge badge-primary badge-pill ${typeClassName(value.type)} m-2`}>{typeNameOf(value.type)}</span>
                                        <span className="badge badge-primary badge-pill m-2">{value.costs}</span>
                                        <button type="button" className="btn btn-danger" onClick={removeChar.bind(this, index)}>X</button>
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
                        {allChars.map((value) =>
                            <a key={value.id} href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={addChar.bind(this, value.id)}>
                                <span className="mr-auto">{value.name}</span>
                                <span className={`badge badge-primary badge-pill ${typeClassName(value.type)} m-2`}>{typeNameOf(value.type)}</span>
                                <span className="badge badge-primary badge-pill m-2">{value.costs}</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewList;