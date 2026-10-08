class BankAccount {
  #balance;
  #transactions = [];

  constructor(owner, balance = 0) {
    if (balance < 0) throw new Error("Balans manfiy bo'lmasin!");
    this.owner = owner;
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Noma'lum summa!");
    this.#balance += amount;
    this.#transactions.push({ type: "deposit", amount, date: new Date() });
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.#balance) throw new Error("Xatolik!");
    this.#balance -= amount;
    this.#transactions.push({ type: "withdraw", amount, date: new Date() });
  }

  getTransactions() {
    return this.#transactions;
  }
}
//error bor ekanku