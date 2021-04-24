import React from 'react';

class Footer extends React.Component{

    render() {
        return (

            <footer className="container bg-dark text-white">
                <p className="float-right">
                    <a href="#">Subir</a>
                </p>
                <p>&copy; {(new Date().getFullYear())} Mi pagina web</p>
            </footer>
        )
    }


}

export default Footer;