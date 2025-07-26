"use client";

import handlePdfUpload from '@/actions/handlePdfUpload';
import Form from 'next/form';
import { useActionState } from 'react';

export default function UploadPDF() {
  const [formState, formAction, pending] = useActionState(handlePdfUpload, null);

  return (
    <Form action={formAction}>
      <div>
        <input required type="text" name="user_id" placeholder="Please enter user id" className="mb-4 p-2 border rounded w-full" />
      </div>
      <div>
        <input required type="text" name="title" placeholder="Please enter document title" className="mb-4 p-2 border rounded w-full" />
      </div>
      <div>
        <div>
          <input required type="file" name="file" placeholder="Upload PDF to parse" />
        </div>
        <div>
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Upload file
          </button>
        </div>
      </div>
      {pending && <p className="mt-4 text-gray-500">Uploading...</p>}
      {formState && (
        <div className={`mt-4 p-4 rounded ${formState.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p>{formState.message}</p>
          {/* {formState.data && <pre className="mt-2 bg-gray-200 p-2 rounded">{JSON.stringify(formState.data, null, 2)}</pre>} */}
        </div>
      )}
    </Form>
  )
}