import React, {Component} from 'react';

class PageNotFound extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <section id="notFound" className="container">
                <h1>404 Error</h1>
                <p>The page you're looking for is having a rough day; please try again.</p>
            </section>
        )
    }
}

export default PageNotFound;