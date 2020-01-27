import React from "react";

function Singers (props) {
  return (
    <div className="item">
      <div>
        <img
        src={props.imageUrl}
        alt={props.name}
        />
      </div>

      <div >
        <div className="description">
          <a class="icon">
            <i
              onClick={props.voteSinger.bind(this, props.id)}
              className="large caret up icon"
            />
            {props.votes}
          </a>
          <p>
          <a href="https://www.google.com/search?q=best+hindi+singers+name&rlz=1C1CHBF_enCA865CA865&oq=best+hindi+sin&aqs=chrome.5.69i57j0l5j69i61l2.11513j0j7&sourceid=chrome&ie=UTF-8">{props.name}</a>
          </p>
          <p>{props.submitten_due}</p>
        </div>
        <div className="extra">
          <span className="club">submitted by:</span>
          <img
            src={props.uploader}
            className="ui avatar image"
           
          />
        </div>
      </div>
    </div>
  );
};

export default Singers;
