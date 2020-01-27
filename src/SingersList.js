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
    //sort Singers with highest votes

    let sortSingers = this.state.Singers.sort((a, b) => {
      return b.votes - a.votes;
    });
    const Singer = sortSingers.map(singer => (
      <Singers
        key={singer.id}
        id={singer.id}
        name={singer.name}
        votes={singer.votes}
        submitten_due={singer.submitten_due}
        imageUrl={singer.imageUrl}
        uploader={singer.Submitted_by}
        voteSinger={this.voteHandler}
      />
    ));
    return <div className="ui divided unstackable items main">{Singer}</div>;
  }
}

export default Component;
