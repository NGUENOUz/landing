'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import '../../style/payement.scss';

interface BtnProps {
  texte: string;
  className?: string; // Ajout d'une prop pour les classes CSS
}

export default function BtnPay({ texte, className }: BtnProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const AMOUNT = 1500;
    const SHOP_NAME = 'Dreno/Formation Excel';
    const MESSAGE = 'Achat effectuer avec succes';
    const SUCCESS_URL = 'https://www.linkedin.com/in/wilfrieddzomeu/';
    const FAILURE_URL = 'https://nextjs.org/docs';
    const ORDER_ID = uuidv4();

    const payload = {
      amount: AMOUNT,
      shop_name: SHOP_NAME,
      message: MESSAGE,
      success_url: SUCCESS_URL,
      failure_url: FAILURE_URL,
      order_id: ORDER_ID,
    };

    try {
      const response = await axios.post('/api/lygosProxy', payload);
      window.location.href = response.data.link;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Une erreur inconnue est survenue.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className={`btn-grad ${className || ''}`} // Ajout des classes CSS
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Chargement...' : texte} {/* Utilisation de la prop texte */}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}