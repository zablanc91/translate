import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{
    //refactor to use Consumer instead of context, so no need for contextType
    //child of Consumer is a function that will be invoked

    renderSubmit(value){
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color){
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value) }
                </LanguageContext.Consumer>
            </button>
        );
    }

    //ColorContext will wrap the button since it may change the color through its className
    render(){
        return(
            <ColorContext.Consumer>
                { (color) => this.renderButton(color) }
            </ColorContext.Consumer>
        );
    }
}
export default Button;