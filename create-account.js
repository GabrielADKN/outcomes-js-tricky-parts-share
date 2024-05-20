function createAccount(pin, amount = 0) {
    let account = Object.freeze({
        balance: amount,
        pin
    });

    return {
        checkBalance(pinToCheck) {
            return pinToCheck === account.pin ? `$${account.balance}` : "Invalid PIN.";
        },

        deposit(pinToCheck, amount) {
            if (pinToCheck !== account.pin) return "Invalid PIN.";
            account = Object.freeze({
                ...account,
                balance: account.balance + amount
            });
            return `Successfully deposited $${amount}. Current balance: $${account.balance}.`;
        },

        withdraw(pinToCheck, amount) {
            if (pinToCheck !== account.pin) return "Invalid PIN.";
            if (amount > account.balance) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            account = Object.freeze({
                ...account,
                balance: account.balance - amount
            });
            return `Successfully withdrew $${amount}. Current balance: $${account.balance}.`;
        },

        changePin(oldPin, newPin) {
            if (oldPin !== account.pin) return "Invalid PIN.";
            account = Object.freeze({
                ...account,
                pin: newPin
            });
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };
