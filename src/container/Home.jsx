import React, { Component } from "react";
import YoutubeComponent from "../components/YoutubeComponent";

class Home extends Component {
  state = {
    harryPotter: [
      {title: 'Harry Potter and The Philoshopers Stone', desc: 'First yaers Harry, Ron, Hermione to school in the Hogwarts', imgSrc: 'https://i.ytimg.com/vi/SafKm0tsSOw/maxresdefault.jpg'},
      {title: 'Harry Potter and The Chamber of Secrets', desc: 'Second years experience Harry, Ron, and Hermione in Hogwarts', imgSrc: 'https://i.ytimg.com/vi/GuaqcMjVS-Q/maxresdefault.jpg'},
      {title: 'Harry Potter and The Prisoners of Azkabar', desc: 'Sirius Black is Baptis Father of Harry Potter can be accused to big murder', imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81OUoH+cMoL._RI_.jpg'}
    ],
  }

  render() {
    return (
      <div>
        {
          this.state.harryPotter.map((film) => {
            return <YoutubeComponent key={film.id} title={film.title} desc={film.desc} imgSrc={film.imgSrc} />
          })
        }
      </div>  
    );
  }
}

export default Home;
