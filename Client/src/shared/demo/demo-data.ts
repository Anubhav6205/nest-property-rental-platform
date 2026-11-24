import { Property } from 'src/shared/model/Property';

/**
 * Sample listings used only in demo mode (see DemoInterceptor).
 * These are invented for the demo and are not real properties or people.
 */
const img = (n: number) => `assets/demo/house${n}.svg`;

const landlord = (id: string, firstName: string, lastName: string) => ({
  id,
  email: `${firstName.toLowerCase()}@example.com`,
  password: '',
  firstName,
  lastName,
  role: 'landlord',
  contactNumber: '0000000000',
});

const listing = (
  n: number,
  name: string,
  city: string,
  locality: string,
  apartmentType: string,
  bhkType: string,
  floor: string,
  propertyAge: string,
  facingDirection: string,
  gallery: number[],
  expectedRent: string,
  furnishing: string,
  parking: string,
  landlordName: [string, string]
): Property => ({
  id: `demo-${n}`,
  propertyDetails: {
    name,
    city,
    locality,
    apartmentType,
    bhkType,
    floor,
    propertyAge,
    facingDirection,
  },
  propertyGallery: gallery.map(img),
  rentalDetails: { expectedRent, furnishing, parking },
  landlordDetails: landlord(`demo-l${n}`, landlordName[0], landlordName[1]),
});

export const DEMO_PROPERTIES: Property[] = [
  listing(1, 'Lakeview Residency', 'Pune', 'Baner', 'Apartment', '2_BHK', '5', '3', 'East', [1, 2, 3], '28000', 'semi furnished', 'both', ['Asha', 'Rao']),
  listing(2, 'Green Park Villa', 'Pune', 'Kothrud', 'Villa', '3_BHK', '0', '8', 'North', [2, 3, 1], '45000', 'fully furnished', 'car', ['Vikram', 'Shah']),
  listing(3, 'Tech Park Heights', 'Bangalore', 'Whitefield', 'Apartment', '1_BHK', '9', '2', 'West', [3, 1], '22000', 'fully furnished', 'bike', ['Meera', 'Nair']),
  listing(4, 'Koramangala Courtyard', 'Bangalore', 'Koramangala', 'Apartment', '2_BHK', '2', '6', 'South', [1, 2], '35000', 'unfurnished', 'both', ['Rohit', 'Menon']),
  listing(5, 'Banjara Hills Residence', 'Hyderabad', 'Banjara Hills', 'Apartment', '3_BHK', '7', '4', 'East', [2, 1, 3], '52000', 'semi furnished', 'car', ['Farah', 'Khan']),
  listing(6, 'Morabadi Garden Flat', 'Ranchi', 'Morabadi', 'Apartment', '2_BHK', '1', '5', 'North', [3, 2], '14000', 'semi furnished', 'bike', ['Sanjay', 'Kumar']),
  listing(7, 'Calangute Beach House', 'Goa', 'Calangute', 'Villa', '4_BHK', '0', '10', 'West', [1, 3, 2], '90000', 'fully furnished', 'both', ['Diana', 'Fernandes']),
  listing(8, 'Salt Lake Corner', 'Kolkata', 'Salt Lake', 'Apartment', '2_BHK', '4', '7', 'South', [2, 3], '24000', 'unfurnished', 'car', ['Arindam', 'Das']),
];
