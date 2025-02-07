import React from "react";
import "./Card.css";
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
// import { GrHalt } from "react-icons/gr";
import { ethers } from "ethers";
import { abi, contract_address } from "../../constants";

export const Card = ({
  title,
  description,
  votesFor,
  votesAgainst,
  id,
  issuedOn,
  setLiveAgendas,
  status,
  quorum,
}) => {
  async function upvote() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contract_address, abi, signer);
    await contract
      .vote(id, true, signer)
      .then(async (res) => {
        await contract.getLiveAgendas().then((res) => {
          setLiveAgendas(res);
        });
        console.log(res);
      })
      .catch((error) => {
        alert(error.reason);
      });
  }

  // async function close() {
  //   const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/tRgE3PZbSNFoWGId3eF29tI2pPg-JXeZ");
  //   const signer = await provider.getSigner();
  //   const contract = new ethers.Contract(env.REACT_APP_CONTRACT_ADDRESS, env.REACT_APP_ABI, signer);
  //   await contract
  //     .closeAgenda(id, signer)
  //     .then(async (res) => {
  //       await contract.getLiveAgendas().then((res) => {
  //         setLiveAgendas(res);
  //       });
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  async function downvote() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contract_address, abi, signer);
    await contract
      .vote(id, false, signer)
      .then(async (res) => {
        await contract.getLiveAgendas().then((res) => {
          setLiveAgendas(res);
        });
        console.log(res);
      })
      .catch((error) => {
        alert(error.reason);
      });
  }

  return (
    <div id="card">
      <div className="cardItems" id="topic">
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div>{description}</div>
      </div>
      <div className="cardItems">{issuedOn}</div>
      <div className="stats">
        {status ? (
          <GoThumbsup className="btn" id="like" onClick={upvote} />
        ) : (
          <div className="btn">Favour</div>
        )}
        <div>{votesFor}</div>
      </div>
      <div className="stats" onClick={downvote}>
        {status ? (
          <GoThumbsdown className="btn" id="dislike" />
        ) : (
          <div className="btn">Against</div>
        )}
        <div>{votesAgainst}</div>
      </div>
      <div className="btn" id="quorum">
        Quorum : {quorum}
      </div>
      {/* {user === proposer && status && (
        <div className="stats" onClick={close}>
          <GrHalt className="btn" />
          <div>STOP</div>
        </div>
      )} */}
      {!status && (
        <div
          className="btn"
          style={{
            backgroundColor: votesFor > votesAgainst ? "green" : "red",
            color: "white",
          }}
        >
          {votesFor > votesAgainst ? <div>Approved</div> : <div>Rejected</div>}
        </div>
      )}
    </div>
  );
};
