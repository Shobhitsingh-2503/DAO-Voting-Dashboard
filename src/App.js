import "./App.css";
import { Card } from "./components/Card/Card";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import dateTime from "date-time";
import { abi, contract_address } from "./constants";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Modal.setAppElement("#yourAppElement");

function App() {
  const [liveAgendas, setLiveAgendas] = useState([]);
  const [deadAgendas, setDeadAgendas] = useState([]);
  const [active, setActive] = useState(true);
  const [user, setUser] = useState("CONNECT");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [quorum, setQuorum] = useState(0);

  async function contractInfo() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setUser(signer.address);
    } else {
      alert("Metamask not installed");
    }
  }

  useEffect(() => {
    contractInfo();
  }, []);

  async function getLive() {
    setActive(true);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contract_address, abi, signer);
    await contract.getLiveAgendas().then((res) => {
      setLiveAgendas(res);
    });
  }

  async function getDead() {
    setActive(false);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contract_address, abi, signer);
    await contract.getDeadAgendas().then((res) => {
      setDeadAgendas(res);
    });
  }

  async function createAgenda() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contract_address, abi, signer);
    await contract
      .createAgenda(title, desc, signer, dateTime(), quorum)
      .then(async () => {
        setDesc("");
        setTitle("");
        closeModal();
        await contract.getLiveAgendas().then((res) => {
          setLiveAgendas(res);
        });
      })
      .catch((error) => {
        alert(error.reason);
        closeModal();
      });
  }

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#3674B5";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="app">
      <div id="title">
        <div style={{ fontWeight: "bold" }}>DAO VOTING DAPP</div>
        <div id="subHeading">
          <div className="subItem">
            <div onClick={openModal}>Create an Agenda</div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2
                align="center"
                id="modal-title"
                ref={(_subtitle) => (subtitle = _subtitle)}
              >
                Add Agenda
              </h2>
              <div className="addAgenda">
                <input
                  type="text"
                  placeholder="Agenda Topic"
                  className="agendaCred"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Agenda Description"
                  className="agendaCred"
                  onChange={(e) => setDesc(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="quorum"
                  className="agendaCred"
                  onChange={(e) => setQuorum(e.target.value)}
                />
                <button id="Addbtn" onClick={createAgenda}>
                  Submit
                </button>
              </div>
            </Modal>
          </div>
          <div
            className="subItem"
            align="center"
            onClick={contractInfo}
            style={{ width: "10rem", overflowX: "hidden" }}
          >
            {user}
          </div>
        </div>
      </div>
      <div id="nav">
        <div
          className="navItem"
          style={
            !active
              ? { backgrondColor: "#3674B5" }
              : { backgroundColor: "#578FCA" }
          }
        >
          <div className="blinking-red-dot"></div>
          <div onClick={getLive}>Live Agendas</div>
        </div>
        <div
          className="navItem"
          onClick={getDead}
          style={
            active
              ? { backgrondColor: "#3674B5" }
              : { backgroundColor: "#578FCA" }
          }
        >
          History
        </div>
      </div>
      <hr style={{ width: "80%" }} />
      <div id="content">
        {active
          ? liveAgendas.map((agenda) => {
              return (
                <Card
                  title={agenda.title}
                  description={agenda.description}
                  issuedOn={agenda.issuedOn}
                  id={agenda.id}
                  votesFor={agenda.votesFor}
                  votesAgainst={agenda.votesAgainst}
                  setLiveAgendas={setLiveAgendas}
                  status={agenda.live}
                  quorum={agenda.quorum}
                />
              );
            })
          : deadAgendas.map((agenda) => {
              return (
                <Card
                  title={agenda.title}
                  description={agenda.description}
                  issuedOn={agenda.issuedOn}
                  id={agenda.id}
                  votesFor={agenda.votesFor}
                  votesAgainst={agenda.votesAgainst}
                  quorum={agenda.quorum}
                />
              );
            })}
      </div>
      <pre align="center">@Copyright 2025 Shobhit Singh</pre>
    </div>
  );
}

export default App;
