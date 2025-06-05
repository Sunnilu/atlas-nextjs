'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="p-8 text-center space-y-4">
      <h1 className="text-3xl font-bold">Hello Atlas</h1>
      <p className="text-gray-600">Welcome to the platform. Please log in to continue.</p>
      <button
        onClick={() => router.push('/login')}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Log In
      </button>
    </main>
  );
}
