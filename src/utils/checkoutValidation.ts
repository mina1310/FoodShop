export interface checkoutData {
  name: string;
  email: string;
  street: string;
  postal: string;
  city: string;
}
export const checkoutValidation = (data: checkoutData) => {
  const errors: Partial<Record<keyof checkoutData, string>> = {};
  const postalPattern = /^[0-9]{5,}$/;
  if (!data.name.trim()) {
    errors.name = "Full Name is required.";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!data.email.includes("@")) {
    errors.email = "Email must include @.";
  }

  if (!data.street.trim()) {
    errors.street = "Street is required.";
  }
  if (!data.postal.trim()) {
    errors.postal = "Postal is required.";
  } else if (!postalPattern.test(data.postal)) {
    errors.postal = "Postal Code must be at least 5 digits";
  }
  if (!data.city.trim()) {
    errors.city = "City is required.";
  }
  return errors;
};
