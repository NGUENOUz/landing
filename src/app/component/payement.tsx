'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import '../../style/payement.scss';

// interface PaymentPayload {
//   amount: number;
//   shop_name: string;
//   message: string;
//   success_url: string;
//   failure_url: string;
//   order_id: string;
// }

export default function PaymentForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const AMOUNT = 1500;
    const SHOP_NAME = 'Votre Boutique';
    const MESSAGE = 'Contactez-nous sur WA pour toutes vos questions';
    const SUCCESS_URL = 'https://www.youtube.com/results?search_query=cors+extension+chrome';
    const FAILURE_URL = 'https://app.purpratix.com/commander/';
    const ORDER_ID = uuidv4();

    const url = 'https://api.lygosapp.com/v1/gateway';
    const payload = {
      amount: AMOUNT,
      shop_name: SHOP_NAME,
      message: MESSAGE,
      success_url: SUCCESS_URL,
      failure_url: FAILURE_URL,
      order_id: ORDER_ID,
    };
    const headers = {
      'api-key': 'lygosapp-cd79b88c-1318-4e88-abff-804a77da140d', // Remplacez par votre clé API
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.post(url, payload, { headers });
      window.location.href = response.data.link;
    } catch (err: unknown) { // Correction ici
      if (err instanceof Error) {
        setError(err.message || 'Une erreur est survenue lors du paiement.');
      } else {
        setError('Une erreur inconnue est survenue lors du paiement.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="paymentForm">
      <h2>Informations de paiement</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="fullName">Nom complet</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Chargement...' : 'Payer'}
        </button>
      </form>
    </div>
  );
}
