// Define EmailProvider interface that enforces implementation of send method for sending emails
interface EmailProvider {
    send(to: string, subject: string, body: string): Promise<boolean>;
  }
  
  // Implement SMTPProvider class that implements EmailProvider interface and sends email via SMTP
  class SMTPProvider implements EmailProvider {
    public async send(to: string, subject: string, body: string): Promise<boolean> {
      console.log(`Sending email via SMTP to: ${to}`); // Log to the console that an email is being sent via SMTP
      // Implementation details of sending email via SMTP
      return true; // Return true if email sending was successful
    }
  }
  
  // Implement SendGridProvider class that implements EmailProvider interface and sends email via SendGrid
  class SendGridProvider implements EmailProvider {
    public async send(to: string, subject: string, body: string): Promise<boolean> {
      console.log(`Sending email via SendGrid to: ${to}`); // Log to the console that an email is being sent via SendGrid
      // Implementation details of sending email via SendGrid
      return true; // Return true if email sending was successful
    }
  }
  
  // Enum to list out valid provider types - currently SMTP and SendGrid
  enum EmailProviderType {
    SMTP = 'smtp',
    SENDGRID = 'sendgrid',
  }
  
  // Define SMTPConfig and SendGridConfig interfaces that can be used to define specific configuration options based on individual requirements
  interface SMTPConfig {
    // Add interface properties as per your project requirements
  }
  
  interface SendGridConfig {
    // Add interface properties as per your project requirements
  }
  
  // EmailServiceFacade class that uses EmailProvider instances to send emails based on the provider type specified
  class EmailServiceFacade {
    private providers: Map<EmailProviderType, EmailProvider>;
  
    constructor(smtpConfig: SMTPConfig, sendGridConfig: SendGridConfig) {
      // Initialize map object to store provider instances against their respective provider types 
      this.providers = new Map();
  
      // Create instances of SMTPProvider and SendGridProvider and set them in the map with their corresponding EmailProviderType values
      this.providers.set(EmailProviderType.SMTP, new SMTPProvider());
      this.providers.set(EmailProviderType.SENDGRID, new SendGridProvider());
    }
  
    // Method to send emails using a specific provider type
    public async sendEmail(to: string, subject: string, body: string, providerType: EmailProviderType) {
      const provider = this.providers.get(providerType); // Retrieve the provider instance based on the specified provider type from the map
      if (provider) {
        // If a valid provider instance is found, call its send method with the email's details and return the response
        return await provider.send(to, subject, body);
      } else {
        // If no valid provider instance is found, throw an error message indicating that the specified provider type was not found
        throw new Error(`Provider of type ${providerType} not found`);
      }
    }
  }
  
  // Define SMTP and SendGrid configuration objects as per your project requirements
  const smtpConfig = {}; // SMTP configuration
  const sendGridConfig = {}; // SendGrid configuration
  
  // Instantiate EmailServiceFacade class by passing SMTP and SendGrid configuration objects
  const emailService = new EmailServiceFacade(smtpConfig, sendGridConfig);
  
  // Send email using SMTP provider
  emailService.sendEmail('john@example.com', 'Hello', 'This is a test email', EmailProviderType.SMTP)
    .then(() => {
      console.log('Email sent successfully'); // Log to the console if the email sending was successful
    })
    .catch((error) => {
      console.error('Failed to send email:', error); // Log to the console if an error occurred during email sending
    });
  
  // Send email using SendGrid provider
  emailService.sendEmail('jane@example.com', 'Greetings', 'This is another test email', EmailProviderType.SENDGRID)
    .then(() => {
      console.log('Email sent successfully'); // Log to the console if the email sending was successful
    })
    .catch((error) => {
      console.error('Failed to send email:', error); // Log to the console if an error occurred during email sending
    });
  



// another ex


nterface Store {
  product(name: string): string
  category(): string
}

class Minuman implements Store {
   product(name: string): string {
      return name
   }
   
   category(): string {
      return 'minuman'
   }
}

class Makanan implements Store {   
   product(name: string): string {
      return name
   }
   
   category(): string {
     return 'makanan'
   }
}

class StoreFaced {
  public minuman: InstanceType<typeof Minuman>
  public makanan: InstanceType<typeof Makanan>
  
  constructor() {
    this.minuman = new Minuman()
    this.makanan = new Makanan()
  }
  
  storeMinuman(name: string): string {
    return this.minuman.product(name)
  }
  
  storeMakanan(name: string): string {
    return this.makanan.product(name)
  }
}

const res = new StoreFaced()
console.log(`product name: ${res.storeMinuman("cola cola")} and product category ${res.minuman.category()}`)
console.log(`product name: ${res.storeMakanan("biskuat")} and product category ${res.makanan.category()}`)
