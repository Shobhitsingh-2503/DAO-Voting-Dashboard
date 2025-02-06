export const contract_address = "0xd5BB330e5c1252787281629477a02415e9fedc4C";
export const abi = [
  {
    inputs: [],
    name: "agendaId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_agendaId",
        type: "uint256",
      },
    ],
    name: "closeAgenda",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "address",
        name: "_proposer",
        type: "address",
      },
      {
        internalType: "string",
        name: "_issuedOn",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_quorum",
        type: "uint256",
      },
    ],
    name: "createAgenda",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeadAgendas",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "proposer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "votesFor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "votesAgainst",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "live",
            type: "bool",
          },
          {
            internalType: "string",
            name: "issuedOn",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quorum",
            type: "uint256",
          },
        ],
        internalType: "struct Vote.Agenda[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLiveAgendas",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "proposer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "votesFor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "votesAgainst",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "live",
            type: "bool",
          },
          {
            internalType: "string",
            name: "issuedOn",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quorum",
            type: "uint256",
          },
        ],
        internalType: "struct Vote.Agenda[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_agendaId",
        type: "uint256",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_agendaId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_vote",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_voter",
        type: "address",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
