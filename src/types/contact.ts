export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at?: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isSubmitting: boolean;
} 