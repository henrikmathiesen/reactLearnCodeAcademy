import React from "react";

export default class Footer extends React.Component {
    render() {
        const footerStyles = {
            marginTop: "30px",
        };

        return (
            <footer class="text-center" style={footerStyles}>
                Henrik Mathiesen, 2016
            </footer>
        );
    }
}