// استبدل الـ interface القديم بهذا
export interface AddressData {
  ok: boolean;
  data: Details[] | null;     // ← غيرها لـ null بدل Details[]
  error: string | null;
}

export interface Details {
  _id: string;
  name: string;
  details: string;
  phone: string;
  city: string;
}