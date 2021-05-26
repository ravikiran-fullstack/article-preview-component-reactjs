import React, { useState } from "react";
import { Popover } from "react-tiny-popover";
import PopoverContent from "./PopoverContent";

const Card = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isMobilePopoverOpen, setMobilePopoverOpen] = useState(false);
  return (
    <div className="card">
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
            <div className="row userSocialLinks">
              <div className="col-2">
                <img
                  className="avatar"
                  src="images/avatar-michelle.jpg"
                  alt="michelle"
                />
              </div>
              <div className="col-8 text-left">
                Michell Appleton <br />{" "}
                <span className="date">28 Jun 2020</span>
              </div>

              <div className="col-2 pt-2">
                <div
                  className={`arrowIcon ${isPopoverOpen && "active"}`}
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                >
                  <Popover
                    isOpen={isPopoverOpen}
                    onClickOutside={() => setIsPopoverOpen(false)}
                    positions={["top"]} // preferred positions by priority
                    content={<PopoverContent></PopoverContent>}
                    className="customPopover"
                  >
                    <div>
                      <ion-icon name="arrow-redo-outline"></ion-icon>
                    </div>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isMobilePopoverOpen ? (
        <div className="row userSocialLinksMobile">
          <div className="col-2">
            <img
              className="avatar"
              src="images/avatar-michelle.jpg"
              alt="michelle"
            />
          </div>
          <div className="col-8 text-left">
            Michell Appleton <br /> <span className="date">28 Jun 2020</span>
          </div>

          <div className="col-2 pt-2">
            <div
              className={`arrowIcon ${isPopoverOpen && "active"}`}
              onClick={() => setMobilePopoverOpen(!isMobilePopoverOpen)}
            >
              <div>
                <ion-icon name="arrow-redo-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="socialLinksRowMobile">
          <ul>
            <li className="text-uppercase">Share</li>
            <li>
              <a href="http://facebook.com">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="http://twitter.com">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="http://pinterest.com">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>
            <li onClick={() => setMobilePopoverOpen(!isMobilePopoverOpen)}>
              <ion-icon name="arrow-redo-outline"></ion-icon>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
