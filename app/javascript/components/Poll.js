import React, { useEffect, useState } from "react";

export default function Poll({ poll, index }) {
  let [voteData, setVoteData] = useState(null);
  let { topic, options } = poll;

  async function fetchVotes() {
    try {
      let api = `/api/v1/poll/${poll.id}`;
      let req = await fetch(api, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      if (req.status == 200) {
        let data = await req.json();
        setVoteData(data);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async function registerVote(optionId) {
    try {
      let api = `api/v1/poll/${poll.id}/${optionId}`;
      let req = await fetch(api, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      if (req.status === 200) {
        await fetchVotes();
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  useEffect(() => {
    fetchVotes();
  }, []);

  return (
    <>
      {voteData ? (
        <VotedByUser
          topic={topic}
          options={options}
          data={voteData}
          index={index}
        />
      ) : (
        <NotVotedByUser
          topic={topic}
          options={options}
          index={index}
          registerVote={registerVote}
        />
      )}
    </>
  );
}

function VotedByUser({ data, topic, options, index }) {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {index + 1}. {topic}
          </p>
          {options.map((elem) => {
            return (
              <div
                className={
                  elem.option === data.voted_option
                    ? "mt-10 bg-green-100 rounded py-3 px-2"
                    : "mt-10 bg-gray-100 rounded py-3 px-2"
                }
              >
                <p className="text-lg leading-6 font-medium text-gray-900 border-solid">
                  {elem.option}
                </p>
                <p>votes: {data.data[elem.option] || 0}</p>
              </div>
            );
          })}
          <p>Total votes: {data.vote_count}</p>
        </div>
      </div>
      ;
    </>
  );
}

function NotVotedByUser({ topic, options, index, registerVote }) {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {index + 1}. {topic}
          </p>
          {options.map((elem) => {
            return (
              <div
                onClick={() => registerVote(elem.option_id)}
                className="mt-10 bg-gray-100 hover:bg-gray-300 rounded py-3 px-2"
              >
                <p className="text-lg leading-6 font-medium text-gray-900 border-solid">
                  {elem.option}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
}
