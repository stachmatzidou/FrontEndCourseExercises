function Account(name) {
    this.name = name;
    this.IBAN = "GR" + Account.IBAN;
    Account.IBAN++;
    this.balance = 0;
  }
  
  Account.IBAN = 3303641874565551;
  
  Account.prototype = {
    deposit: function (amount) {
      if (amount < 0 || typeof amount !== "number") {
        return console.log("Error 'Invalid amount");
      } else {
        this.balance += amount;
        return console.log(`You deposited ${amount} euros.`);
      }
    },
    withdraw: function (amount) {
      if (amount < 0 || typeof amount !== "number") {
        return console.log("Error 'Invalid amount");
      } else if ( amount > this.balance) {
        return console.log(`Error 'Insufficient balance!'.`);
      } else {
        this.balance -= amount;
        return console.log(`You withdrew ${amount} euros.`);
      }
    },
    getBalance: function () {
      return console.log(`Your new account balance is ${this.balance} euros.`);
    },
  };
  
  const myAccount = new Account("Sofia Tachmatzidou");
  
  myAccount.deposit(1000);
  myAccount.withdraw(980);
  myAccount.getBalance();
  
  const mySecretAccount = new Account("Sofia Heisenberg");
  
  mySecretAccount.deposit(6596381);
  mySecretAccount.withdraw(15600);
  mySecretAccount.getBalance();

  console.log(myAccount);
  console.log(mySecretAccount);