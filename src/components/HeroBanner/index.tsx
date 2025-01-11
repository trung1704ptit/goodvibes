import React from "react";

export interface IBreadcumb {
  label: string;
  url: string;
}

export interface IHeroBannerProps {
  title: string;
  breadcrumb: IBreadcumb[];
  backgroundImage: string;
}

interface IProps {
  data: IHeroBannerProps;
}

const HeroBanner = (props: IProps) => {
  try {
    const { backgroundImage, breadcrumb, title } = props.data;

    return (
      <div
        className="bg-cover bg-center min-h-[300px] bg-slate-100 flex items-center justify-center fade-in-up"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg m-auto">
            {title && <h1 className="md:text-7xl text-5xl font-bold mb-3">{title}</h1>}
            {breadcrumb && (
              <nav className="text-sm text-gray-300 mb-4">
                <ul className="flex justify-center space-x-2 text-lg ">
                  {breadcrumb.map((item, index) => (
                    <li key={index}>
                      {index > 0 && <span className="mx-2">/</span>}
                      <a href={item.url} className="no-underline text-gray-600">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    );
  } catch {
    return null;
  }
};

export default HeroBanner;
