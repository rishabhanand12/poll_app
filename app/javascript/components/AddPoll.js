import React, { useState } from "react";

function AddPoll(_props) {
  let [topic, setTopic] = useState("");
  let [optionA, setOptionA] = useState("");
  let [optionB, setOptionB] = useState("");
  let [optionC, setOptionC] = useState("");
  let [optionD, setOptionD] = useState("");

  async function handleSubmit() {
    event.preventDefault();
    try {
      let api = "http://localhost:3000/api/v1/poll";
      let req = await fetch(api, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ topic, optionA, optionB, optionC, optionD }),
      });
      if (req.status === 200) {
        let data = await req.json();
        console.log(data);
        
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <>
      <section className="container mx-auto">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add a new poll
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <textarea
                onChange={() => setTopic(event.target.value)}
                value={topic}
                name="topic"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Topic"
              ></textarea>
            </div>
            <div>
              <textarea
                onChange={() => setOptionA(event.target.value)}
                value={optionA}
                name="optionA"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Option A"
              ></textarea>
            </div>
            <div>
              <textarea
                onChange={() => setOptionB(event.target.value)}
                value={optionB}
                name="optionB"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Option B"
              ></textarea>
            </div>
            <div>
              <textarea
                onChange={() => setOptionC(event.target.value)}
                value={optionC}
                name="optionC"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Option C"
              ></textarea>
            </div>
            <div>
              <textarea
                onChange={() => setOptionD(event.target.value)}
                value={optionD}
                name="optionD"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Option D"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              class="group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Poll
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddPoll;
