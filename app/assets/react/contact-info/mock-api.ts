export interface ContactInformation {
  name: string;
  email?: string;
  phone?: string;
  notes?: string;
}

export function getContactInfo(): Promise<ContactInformation> {
  return Promise.resolve({ name: 'default name' });
}

export function setContactInfo(
  updatedContact: ContactInformation
): Promise<ContactInformation> {
  return Promise.resolve(updatedContact);
}
