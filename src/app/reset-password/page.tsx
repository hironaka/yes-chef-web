"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ResetPasswordComponent from '@/components/Auth/ResetPassword';
import Loader from '@/components/Common/Loader'; // Assuming you have a Loader component

// Helper component to access search params
function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const oobCode = searchParams.get('oobCode');
  const code = oobCode || token;

  if (!code) {
    // Handle the case where the token is missing from the URL
    // You might want to redirect or show a specific message
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-red-500">Invalid or missing password reset token.</p>
        </div>
    );
  }

  return <ResetPasswordComponent token={code} />;
}

// Main page component using Suspense
export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
            <Loader />
        </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}