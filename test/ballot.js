const helpers = require("../js-helpers/ether-wrappers");

const testBallot = artifacts.require("TestBallot.sol");

contract('Ballot', (accounts) => {
    let ballotInstance;
    before(async () => {
        proposals = ["apples", "cats", "dogs"];
        ballotInstance = await testBallot.new(proposals.map((element) => {
            return helpers.createBytes(element);
        }));
    });
    it("initialized properly", async () => {;
        proposalNames = ["apples", "cats", "dogs"];
        proposals = await ballotInstance.getProposals();

        for (let i = 0; i < proposalNames.length; i++) {
            proposalName = proposalNames[i];
            proposal = proposals[i];
            assert.equal(helpers.parseBytes(proposal.name), proposalName, "names converted right");
            assert.equal(proposal.voteCount, 0, "all start with 0 votes");
        }
    });
    it("gives rights to vote", async () => {
        
    });
    it("delegates votes", async () => {

    });
    it("lets you vote", async () => {

    });
    // mentioned in this issue:
    // https://github.com/ethereum/solidity/issues/12478
    it("handles winning and ties", async () => {

    });
});