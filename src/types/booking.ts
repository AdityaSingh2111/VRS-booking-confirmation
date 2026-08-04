export interface BookingData {
  bookingId: string;
  referenceNumber: string;
  bookingDate: string;
  generatedOn: string;

  executiveName?: string | undefined;

  customer: {
    title: string;
    name: string;
    phone: string;
    whatsapp: string;
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
