'use client';

import { useState } from 'react';
import { ContactFormData, ContactFormProps } from '../types/contact';

export default function ContactForm({ onSubmit, isSubmitting }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Tu nombre"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <input
        type="email"
        placeholder="tu@email.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <input
        type="tel"
        placeholder="+34 600 000 000"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <textarea
        placeholder="Cuéntanos qué te interesa de Qualia..."
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        rows={4}
        className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-background py-3 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
} 