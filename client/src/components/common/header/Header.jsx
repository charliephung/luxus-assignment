import React from "react";

const Header = () => {
  return (
    <header className="header my-header-image">
      <div className="header__body  flex-center flex-dir-col">
        <div className="container">
          <h1 className="h1  white ani-move-in-right-1">
            It is time to unlock your creativity
          </h1>
          <h1 className="h1  white ani-move-in-left-1">Feel free to explore</h1>
          <br />
          <div className="border border--right border--white ani-move-in-right-1 " />
          <br />
          <br />
          <h3 className="h3 text-space-3 light-text white ani-fade-in">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quasi
            corporis perspiciatis eius velit, ab cupiditate error at libero
            voluptas dolores excepturi, laboriosam culpa a, nihil esse alias est
            adipisci.
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
