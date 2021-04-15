import React from 'react';
 
class Mapa extends React.Component {
 
  render() {
 
    return (
 
        <div className="embed-responsive embed-responsive-4by3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23094.56344063711!2d-75.61326329269029!3d6.216498452944652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429c54fe5652d%3A0x5363838972b34e50!2sAeropuerto%20Olaya%20Herrera!5e0!3m2!1ses!2sco!4v1618277177078!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
 
    )
    
  }
 
}
 
export default Mapa;