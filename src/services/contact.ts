import { supabase } from '../lib/supabase';
import { ContactFormData } from '../types/contact';

export async function submitContactForm(data: ContactFormData) {
  try {
    const { error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
} 