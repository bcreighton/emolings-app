import React, {Component} from 'react';

class PageNotFound extends Component {
    render() {
        return (
            <secton id="notFound" className="container">
                <h1>404 Error</h1>
                <p>The page you're looking for is having a rough day; please try again.</p>
            </secton>
        )
    }
}

export default PageNotFound;