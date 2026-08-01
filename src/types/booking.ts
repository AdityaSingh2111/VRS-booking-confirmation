export interface BookingData {
  bookingId: string;
  referenceNumber: string;
  bookingDate: string;
  generatedOn: string;

  customer: {
    name: string;
    phone: string;
    email: string;
  };

  pickup: {
    address: string;
  };

  delivery: {
    address: string;
  };

  service: {
    type: string;
    shiftingDate: string;
  };

  payment: {
    total: number;
    advance: number;
    balance: number;
    method: string;
    status: string;
  };
}