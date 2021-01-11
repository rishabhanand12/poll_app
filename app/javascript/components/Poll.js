import React from "react";

export default function Poll(props) {
  let { topic, options } = props;
  return (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {topic}
          </p>
          {options.map((elem) => {
            return (
              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 border-solid border-dark-gray">
                  <div className="flex">
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900 border-solid">
                        {elem.option}
                      </dt>
                    </div>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
