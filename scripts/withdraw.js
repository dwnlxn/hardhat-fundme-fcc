const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Withdrawing funds...")
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)
    console.log(
        `Got it, current balance is ${ethers.utils.formatEther(
            await ethers.provider.getBalance(deployer)
        )}!`
    )
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        process.exit(1)
    })
