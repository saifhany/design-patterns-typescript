// Define the PaymentStrategy interface which enforces the `pay` method.
interface PaymentStrategy {
    pay(amount: number): void;
  }
  
  // Define a CreditCardStrategy class that implements the PaymentStrategy interface and has `pay` method for processing credit card payment.
  class CreditCardStrategy implements PaymentStrategy {
    private cardNumber: string;
    private cvv: string;
    private expirationDate: string;
  
    constructor(cardNumber: string, cvv: string, expirationDate: string) {
      this.cardNumber = cardNumber;
      this.cvv = cvv;
      this.expirationDate = expirationDate;
    }
  
    // Implement the `pay` method with logic for processing credit card payment.
    pay(amount: number): void {
      console.log(`Paid $${amount} with Credit Card`);
    }
  }
  
  // Define a PayPalStrategy class that also implements the PaymentStrategy interface and has `pay` method for processing PayPal payment.
  class PayPalStrategy implements PaymentStrategy {
    private email: string;
    private password: string;
  
    constructor(email: string, password: string) {
      this.email = email;
      this.password = password;
    }
  
    // Implement the `pay` method with logic for processing PayPal payment.
    pay(amount: number): void {
      console.log(`Paid $${amount} with PayPal`);
    }
  }
  
  // Define the context that uses the Strategy to handle payment processes.
  class PaymentContext {
    private paymentStrategy: PaymentStrategy;
  
    // A method to set the payment strategy.
    setPaymentStrategy(strategy: PaymentStrategy): void {
      this.paymentStrategy = strategy;
    }
  
    // A method to invoke the payment strategy's `pay` method to process a payment of a given amount.
    pay(amount: number): void {
      this.paymentStrategy.pay(amount);
    }
  }
  
  // Usage: create an instance of PaymentContext, set the payment strategy, and process payments.
  const paymentContext = new PaymentContext();
  
  // Create an instance of CreditCardStrategy and set it as the payment strategy to pay an amount of 100 with a credit card.
  const creditCardStrategy = new CreditCardStrategy('1234567890123456', '123', '12/25');
  paymentContext.setPaymentStrategy(creditCardStrategy);
  paymentContext.pay(100); // Output: Paid $100 with Credit Card
  
  // Create an instance of PayPalStrategy and set it as the payment strategy to pay an amount of 50 with PayPal.
  const payPalStrategy = new PayPalStrategy('test@example.com', 'password');
  paymentContext.setPaymentStrategy(payPalStrategy);
  paymentContext.pay(50); // Output: Paid $50 with PayPal
  