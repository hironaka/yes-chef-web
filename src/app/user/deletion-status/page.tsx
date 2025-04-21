import { PrismaClient } from '@prisma/client';
import { Suspense } from 'react';

const prisma = new PrismaClient();

interface StatusPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

async function StatusDisplay({ confirmationCode }: { confirmationCode: string }) {
  let statusMessage = 'Invalid or missing confirmation code.';
  let requestStatus = 'error'; // 'error', 'pending', 'success', 'not_found', 'failed'

  if (confirmationCode) {
    try {
      const deletionRequest = await prisma.dataDeletionRequest.findUnique({
        where: { confirmationCode: confirmationCode },
      });

      if (deletionRequest) {
        requestStatus = deletionRequest.status;
        switch (deletionRequest.status) {
          case 'pending':
            statusMessage = `Your data deletion request is being processed. Confirmation code: ${confirmationCode}`;
            break;
          case 'success':
            statusMessage = `Your data associated with Facebook has been successfully deleted. Confirmation code: ${confirmationCode}`;
            break;
          case 'failed':
            statusMessage = `We encountered an issue processing your data deletion request. Please contact support if needed. Confirmation code: ${confirmationCode}`;
            break;
          case 'not_found':
            statusMessage = `We received your request, but could not find associated user data to delete. Confirmation code: ${confirmationCode}`;
            break;
          default:
            statusMessage = `Unknown status for your request. Confirmation code: ${confirmationCode}`;
            requestStatus = 'error';
            break;
        }
      } else {
        statusMessage = `Deletion request not found for confirmation code: ${confirmationCode}`;
        requestStatus = 'error';
      }
    } catch (error) {
      console.error(`Error fetching deletion status for code ${confirmationCode}:`, error);
      statusMessage = 'An error occurred while checking the status of your request.';
      requestStatus = 'error';
    } finally {
      await prisma.$disconnect();
    }
  }

  // Basic styling - you can replace this with your actual layout/styling components
  const getStatusColor = () => {
    switch (requestStatus) {
      case 'success': return 'text-green-600';
      case 'pending': return 'text-blue-600';
      case 'failed':
      case 'error': return 'text-red-600';
      case 'not_found': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Data Deletion Request Status</h1>
      <p className={`text-lg ${getStatusColor()}`}>{statusMessage}</p>
    </div>
  );
}


// Main page component using Suspense for data fetching
export default function DeletionStatusPage({ searchParams }: StatusPageProps) {
  const code = typeof searchParams.code === 'string' ? searchParams.code : '';

  return (
    // You might want to wrap this in your standard Layout component
    <div>
      <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading status...</div>}>
        <StatusDisplay confirmationCode={code} />
      </Suspense>
    </div>
  );
}