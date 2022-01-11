const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT Testing", function () {

    this.beforeEach(async function() {

        const NFT = await hre.ethers.getContractFactory("NFT");
        tNFT = await TNFT.deploy("NFTName","NFTSymbol");
        await tNFT.deployed();
        organizer = await ethers.getSigners();
    })