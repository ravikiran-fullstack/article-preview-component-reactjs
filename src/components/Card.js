import React from "react";

const Card = () => {
  return (
    <div className="card" style={{ width: "50vw" }}>
      <div className="row no-gutters">
        <div className="col-md-5 com-sm-12">
          <img className="card-img" src="images/drawers.jpg" alt="drawers" />
        </div>
        <div className="col-md-7 col-sm-12">
          <div className="card-body">
            <h5 className="card-title text-left">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h5>
            <p className="card-text text-left">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>
            <div className="row border">
              <div className="col-3">
                <img
                  class="avatar"
                  src="images/avatar-michelle.jpg"
                  alt="michelle"
                />
              </div>
              <div className="col-7">MIchell Appleton</div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
