import React, { useState, useEffect } from "react";
import Poll from "./Poll";

function Polls(_props) {
  let [polls, setPolls] = useState(null);

  useEffect(() => {
    async function fetchPolls() {
      try {
        let api = "http://localhost:3000/api/v1/poll";
        let req = await fetch(api);
        if (req.status === 200 || req.status === 304) {
          let data = await req.json();
          setPolls(data.polls);
        }
      } catch (err) {
        throw new Error(err);
      }
    }
    fetchPolls();
  }, []);

  if (!polls) return <h2>No Polls to vote on</h2>;

  return (
    <>
      <section className="container mx-auto">
        <div className="lg:text-center text-3x1">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Polls
          </h2>
        </div>
        {polls.map((poll) => (
          <Poll topic={poll.topic} options={poll.options} />
        ))}
      </section>
    </>
  );
}

export default Polls;
