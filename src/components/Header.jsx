import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            query: ''
        };

        this.onQueryChangeHandler = this.onQueryChangeHandler.bind(this);
    }

    onQueryChangeHandler(event) {
        this.setState(() => {
            return {
                query: event.target.value
            }
        })
        this.props.onQueryChange(event.target.value);
    }

    render() {
        return(
            <div className="notes-header">
                <h1>Notes App</h1>
                <form onChange={this.onQueryChangeHandler}>
                    <input className="search-bar" type="text" id="search" name="search" placeholder="Search notes.." value={this.state.query} onChange={this.onQueryChangeHandler}/>
                </form>
            </div>
        )
    }
}

export default Header;