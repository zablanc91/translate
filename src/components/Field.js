import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    //hooks the Context object to this class
    static contextType = LanguageContext;

    render(){
        const text = this.context === 'english' ? 'Name' : 'Naam';
        return(
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;