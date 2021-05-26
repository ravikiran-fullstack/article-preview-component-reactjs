import React from "react";

const PopoverContent = () => {
  return (
    <div className="popoverSocialLinks">
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
      </ul>
    </div>
  );
};

export default PopoverContent;
