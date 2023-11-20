class CredentialsRequestData {
  email: string = `${process.env.EMAIL}`;
}

export const credentialsRequestData = new CredentialsRequestData();
