'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { nextAuthOptions } from '../../utils/authOptions';
import Image from "next/image";
import Link from 'next/link';

export default function MonsterForm() {
  const [name, setName] = useState('');
  const [characteristics, setCharacteristics] = useState('');
  const [remaining_torments, setRemainingTorments] = useState('');
  const [author_comment, setAuthorComment] = useState ('');
  const [conditions, setConditions] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const { data: session } = useSession();
  const backgroundImage = '/spock-zombie.svg'; 

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
        name,
        characteristics,
        remaining_torments,
        conditions,
        author_comment,
    };
    
    try {
      const response = await fetch('https://bunkerapi.onrender.com/bunker/api/v1/monsters/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.accessToken}` 
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatusMessage({
          text: 'Monster sheet saved successfully!',
          type: 'success'
        });
      } else {
        setStatusMessage({
          text: 'Failed to save monster sheet.',
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Error during saving monster sheet:', error);
      setStatusMessage({
        text: 'Error during saving monster sheet.',
        type: 'error'
      });
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center justify-center min-h-screen bg-black bg-cover transition-all duration-500 ease-in-out" style={{ backgroundImage: `url(${backgroundImage})`}}></div>
      <form onSubmit={handleSubmit} className="bg-gradient-to-r from-red-900 via-black to-red-900 shadow-2xl rounded-2xl px-16 pt-10 pb-12 mb-4 max-w-3xl mx-8">
        
      {statusMessage && (
          <div className={`mb-4 ${statusMessage.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            <span className="text-3xl flex items-center justify-center">{statusMessage.text}</span>
          </div>
        )}

        <div className="flex items-center justify-center mb-8">
        <Image
            src="/assets/zumbie5.avif" 
            width={200}
            height={200}
            alt="Picture Monster"
            style={{ borderRadius: '50%' }} 
          />
          <h1 className="text-4xl p-3 font-bold text-center text-yellow-100 transition-all duration-500 ease-in-out">Create Your Monster!</h1>
        </div>
        <div className="mb-4">
          <label className="block text-yellow-100 text-4xl font-bold mb-2">
            Name:
          </label>
          <input className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-red-500" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-100 text-4xl font-bold mb-2">
            Characteristics:
          </label>
          <textarea className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-red-500" value={characteristics} onChange={(e) => setCharacteristics(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-100 text-4xl font-bold mb-2">
            Author Comment:
          </label>
          <textarea className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-red-500" value={author_comment} onChange={(e) => setAuthorComment(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-100 text-4xl font-bold mb-2">
            Torments Remainings:
          </label>
          <textarea className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-red-500" value={remaining_torments} onChange={(e) => setRemainingTorments(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-100 text-4xl font-bold mb-2">
            Condictions:
          </label>
          <textarea className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-red-500" value={conditions} onChange={(e) => setConditions(e.target.value)} />
        </div>
        <div className="flex items-center justify-between">
        <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-6 text-4xl rounded focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-red-500 mr-4" type="submit">
            Create Survivor
        </button>
            <Link href="/create">
                <button className="bg-red-800 hover:bg-red-600 text-white font-bold py-3 px-6 text-4xl rounded focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-red-500 mr-4" type="button">
                Back
                </button>
            </Link>
            </div>
      </form>
    </div>
  );
}




