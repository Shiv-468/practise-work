import React from 'react'

const HeroLocation = () => {
    const Tabsdata = [
        {
          tab: "home",
          tabContent: "this is Home page",
        },
        {
          tab: "about",
          tabContent: "this is about page",
        },
        {
          tab: "contact",
          tabContent: "this is contact page",
        },
      ];
    
      const loc = window.location.pathname.toLowerCase();
      console.log(loc);
    
      return (
        <div>
          <div>
            {Tabsdata.map((data, index) => (
              <a
                href={`/${data.tab}`}
                key={index}
                className="mx-3 px-3 py-2 bg-black text-white"
              >
                {data.tab}
              </a>
            ))}
    
            <div className="">
              {loc === "/home" && `${Tabsdata[0].tabContent}`}
              {loc === "/about" && `${Tabsdata[1].tabContent}`}
              {loc === "/contact" && `${Tabsdata[2].tabContent}`}
            </div>
          </div>
        </div>
      );
}

export default HeroLocation