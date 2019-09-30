import React from 'react';

//our Context object for App, Field, and Button
//give it a default value for language
//needs to be capital C because we will render this as component
const Context = React.createContext('english');

export class LanguageStore extends React.Component{
    state = { language: 'english'};

    //callback, so make an arrow
    onLanguageChange = (language) => {
        this.setState({language});
    };

    //need to provide state as well as onLanguageChange callback to the Provider's value
    //In App, the LanguageStore needs to wrap children UserCreate (wants state) and LanguageSelector (wants callback)
    render(){
        return(
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}} > 
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;