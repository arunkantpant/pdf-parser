'use client';

import askQuestion from "@/actions/ask";
import Form from "next/form";
import { useActionState } from "react";

export default function DocsPage() {
  const [askFormState, askFormAction, pending] = useActionState(askQuestion, null);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {pending && <p className="text-gray-500">Processing...</p>}
      <h1>Docs Page</h1>
      <div className="mb-8">
        <Form action={askFormAction}>
          <div>Document id</div>
          <div>
            <input
              required
              type="text"
              name="document_id"
              placeholder="Please enter document id"
              className="mb-4 p-2 border rounded w-full"
            />
          </div>
          <div>Question</div>
          <div>
            <input
              required
              type="text"
              name="question"
              placeholder="Please enter question"
              className="mb-4 p-2 border rounded w-full"
            />
          </div>
          <div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Ask
            </button>
          </div>

          {askFormState?.data && (
            <div className="mt-4 p-3 bg-green-100 rounded text-green-800">
              <p className="font-medium">Answer:</p>
              <p>{askFormState.data.answer}</p>
            </div>
          )}

          {
            askFormState?.message && (
              <div className={`mt-4 p-3 rounded ${askFormState.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <p>{askFormState.message}</p>
              </div>
            )
          }
        </Form>
      </div>
      <div>
        <p>Generate a quiz</p>
      </div>
    </div>
  )
};