import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{
    //refactor to use Consumer instead of context, so no need for contextType
    //child of Consumer is a function that will be invoked

    renderSubmit(language){
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color){
        //remember, LanguageStore holds state as object with language in it, so we pass this
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    { ({language}) => this.renderSubmit(language) }
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