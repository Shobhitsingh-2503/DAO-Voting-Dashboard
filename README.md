# DAO Voting Dashboard

## Introduction

The **DAO Voting Dashboard** is a decentralized application (dApp) designed to facilitate governance in a Decentralized Autonomous Organization (DAO). This platform allows users to submit proposals, vote on governance decisions, and track real-time results.

## Features

- **Voting Interface:** Users can see proposals and cast votes based on their token holdings.
- **Proposal Creation:** Token holders can submit proposals for governance actions such as budget changes or new initiatives.
- **Real-time Results:** Displays live voting results with real-time updates from the blockchain.
- **Quorum Tracking:** Tracks whether voting quorums are met and when proposals pass or fail.
- **Governance History:** Shows a timeline of past governance decisions and their outcomes.

## Tech Stack

- **Frontend:** React.js with Web3.js/Ethers.js for blockchain interaction.
- **Backend:** Node.js and Express.
- **Blockchain:** Ethereum or Polkadot smart contracts.

## Installation

To run the project locally, follow these steps:

```sh
# Clone the repository
git clone https://github.com/Shobhitsingh-2503/DAO-Voting-Dashboard.git
cd DAO-Voting-Dashboard

# Install dependencies
npm install

# Start the development server
npm start
```

## Usage

### 1. Connecting to Blockchain

- The application connects to a blockchain wallet (MetaMask or similar) to verify token ownership.

### 2. Creating a Proposal

- Click on the **"Create an Agenda"** button.
- Enter the proposal topic, description, and quorum value.
- Submit the proposal, which will be stored on the blockchain.

### 3. Voting on Proposals

- Users can vote **"In Favor"** or **"Against"** a proposal.
- Votes are recorded based on the user's token holdings.

### 4. Viewing Results

- The **Live Agendas** section displays active proposals.
- The **History** section shows past proposals and their outcomes.

## Problem Statement & Solutions

### Problem: Lack of Transparent DAO Governance

**Solution:** A blockchain-based voting system ensures transparency and immutability.

### Problem: Ensuring Real-Time Updates

**Solution:** Web3.js and Ethers.js fetch real-time data from the blockchain.

## Screenshots

### Home Page

![dashboard-1](https://ik.imagekit.io/tttjlp0fj/Screenshot%202025-02-07%20000113.png?updatedAt=1738866827916)

![dashboard-2](https://ik.imagekit.io/tttjlp0fj/Screenshot%202025-02-07%20000127.png?updatedAt=1738866792829)

### Creating a Proposal

![dashboard-3](https://ik.imagekit.io/tttjlp0fj/Screenshot%202025-02-07%20000138.png?updatedAt=1738866792925)

## Contributors

- **Shobhit Singh** - _Full Stack & Blockchain Development_
