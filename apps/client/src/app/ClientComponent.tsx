'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ClientComponent(): JSX.Element {
  const router = useRouter();

  const navigateToReservation = () => {
    router.push('/reservation');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Image src="/api/placeholder/40/40" width={40} height={40} alt="IMC Logo" />
        <h1 className="text-3xl font-bold">Welcome to IMC</h1>
        <p className="text-lg">Your one-stop solution for room reservations.</p>
        <button
          onClick={navigateToReservation}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Go to Reservation Page
        </button>
      </div>
    </div>
  );
}