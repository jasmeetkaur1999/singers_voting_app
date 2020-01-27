import React from "react";
import SingerDetails from "./Singersdetails";
import Singers from "./Singers";

class Component extends React.Component {
  state = {
    Singers: []
  };

  componentDidMount() {
    this.setState({
      Singers: SingerDetails
    });
  }

  voteHandler = singerId => {
    const voteSinger = this.state.Singers.map(singer => {
      //get idea from youtube video and also searched on stack overflow
      if (singerId === singer.id) {
        return Object.assign({}, singer, {
          votes: singer.votes + 1
        });
      } else {
        return singer;
      }
    });

    this.setState({
      Singers: voteSinger
    });
  };
  render() {
    
    return <div className="ui divided unstackable items main">{Singer}</div>;
  }
}

export default Component;
